import { NextResponse } from 'next/server';
import { getSellers, saveSeller, getUsers, saveUser } from '@/lib/storage';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { role = 'admin', password, email, phone, name, companyName, action } = body;

    // 1. ADMIN AUTHENTICATION
    if (role === 'admin') {
      const correctPassword = process.env.ADMIN_PASSWORD || 'plot4tuty2026';
      if (password === correctPassword || password === 'admin123') {
        const response = NextResponse.json({
          success: true,
          role: 'admin',
          message: 'Admin authentication successful',
        });
        response.cookies.set('admin_auth', 'authenticated_plot4tuty', {
          httpOnly: true,
          path: '/',
          maxAge: 60 * 60 * 24 * 7, // 7 days
          sameSite: 'lax',
        });
        return response;
      }
      return NextResponse.json(
        { success: false, error: 'Invalid admin password. Default is plot4tuty2026 or admin123' },
        { status: 401 }
      );
    }

    // 2. SELLER REGISTRATION / LOGIN
    if (role === 'seller') {
      const sellers = await getSellers();

      if (action === 'register') {
        if (!name || (!email && !phone)) {
          return NextResponse.json(
            { success: false, error: 'Name and email or phone number are required for seller registration.' },
            { status: 400 }
          );
        }

        // Check for existing seller
        const existing = sellers.find(
          (s) => (email && s.email.toLowerCase() === email.toLowerCase()) || (phone && s.phone === phone)
        );
        if (existing) {
          const response = NextResponse.json({
            success: true,
            seller: existing,
            message: 'Seller account found. Logged in successfully.',
          });
          response.cookies.set('seller_session', existing.id, {
            httpOnly: true,
            path: '/',
            maxAge: 60 * 60 * 24 * 14,
            sameSite: 'lax',
          });
          return response;
        }

        const newSeller = await saveSeller({
          name,
          companyName: companyName || `${name} Properties`,
          email: email || '',
          phone: phone || '',
          whatsapp: phone || '',
          locality: body.locality || 'Thoothukudi',
          isVerified: false,
          subscriptionPlanId: body.subscriptionPlanId || 'starter',
        });

        const response = NextResponse.json({
          success: true,
          seller: newSeller,
          message: 'Seller registered successfully',
        });
        response.cookies.set('seller_session', newSeller.id, {
          httpOnly: true,
          path: '/',
          maxAge: 60 * 60 * 24 * 14,
          sameSite: 'lax',
        });
        return response;
      }

      // Seller Login by email or phone
      let seller = sellers.find(
        (s) =>
          (email && s.email.toLowerCase() === email.toLowerCase()) ||
          (phone && s.phone === phone) ||
          (body.sellerId && s.id === body.sellerId)
      );

      // Default demo login if no email provided or test fallback
      if (!seller && (!email || email === 'muthu@plot4tuty.com')) {
        seller = sellers[0] || null;
      }

      if (!seller) {
        return NextResponse.json(
          { success: false, error: 'Seller not found. Please register or check your email/phone.' },
          { status: 404 }
        );
      }

      const response = NextResponse.json({
        success: true,
        seller,
        role: 'seller',
        message: 'Seller logged in successfully',
      });
      response.cookies.set('seller_session', seller.id, {
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24 * 14,
        sameSite: 'lax',
      });
      return response;
    }

    // 3. CUSTOMER AUTHENTICATION
    if (role === 'customer') {
      const users = await getUsers();
      let user = users.find(
        (u) =>
          (email && u.email.toLowerCase() === email.toLowerCase()) ||
          (phone && u.phone === phone)
      );

      if (!user) {
        user = await saveUser({
          name: name || 'Valued Buyer',
          email: email || '',
          phone: phone || '',
          role: 'customer',
          savedPlotIds: [],
        });
      }

      return NextResponse.json({ success: true, user, role: 'customer' });
    }

    return NextResponse.json({ success: false, error: 'Unsupported role' }, { status: 400 });
  } catch (error) {
    console.error('Auth API error:', error);
    return NextResponse.json({ success: false, error: 'Authentication service error' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const cookieHeader = request.headers.get('cookie') || '';
  const isAdmin = cookieHeader.includes('admin_auth=authenticated_plot4tuty');

  let sellerId: string | null = null;
  const sellerCookieMatch = cookieHeader.match(/seller_session=([^;]+)/);
  if (sellerCookieMatch) {
    sellerId = decodeURIComponent(sellerCookieMatch[1]);
  }

  return NextResponse.json({
    authenticated: isAdmin || !!sellerId,
    isAdmin,
    isSeller: !!sellerId,
    sellerId: sellerId || (isAdmin ? null : 'sel-1'), // fallback demo seller id if not specified
  });
}

export async function DELETE() {
  const response = NextResponse.json({ success: true, message: 'Logged out successfully' });
  response.cookies.delete('admin_auth');
  response.cookies.delete('seller_session');
  return response;
}
