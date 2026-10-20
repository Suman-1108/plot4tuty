import { NextResponse } from 'next/server';
import { getPlots, savePlot, getSellerSubscription } from '@/lib/storage';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const location = searchParams.get('location') || searchParams.get('locality');
    const budgetRange = searchParams.get('budgetRange');
    const plotSize = searchParams.get('plotSize');
    const facing = searchParams.get('facing');
    const approval = searchParams.get('approval');
    const status = searchParams.get('status');
    const sellerId = searchParams.get('sellerId');
    const verifiedOnly = searchParams.get('verifiedOnly') === 'true';
    const isCorner = searchParams.get('isCorner') === 'true';
    const query = searchParams.get('q')?.toLowerCase();

    let plots = await getPlots();

    if (location && location !== 'all') {
      plots = plots.filter(
        (p) =>
          p.location.toLowerCase().includes(location.toLowerCase()) ||
          (p.locality && p.locality.toLowerCase().includes(location.toLowerCase()))
      );
    }

    if (budgetRange && budgetRange !== 'all') {
      if (budgetRange === 'under-10') {
        plots = plots.filter((p) => p.price < 1000000);
      } else if (budgetRange === 'under-15' || budgetRange === '10-20') {
        plots = plots.filter((p) => p.price <= 2000000);
      } else if (budgetRange === '15-25' || budgetRange === '20-35') {
        plots = plots.filter((p) => p.price >= 1500000 && p.price <= 3500000);
      } else if (budgetRange === 'above-35') {
        plots = plots.filter((p) => p.price > 3500000);
      }
    }

    if (plotSize && plotSize !== 'all') {
      if (plotSize === 'under-2-cents') {
        plots = plots.filter((p) => p.areaCents < 2);
      } else if (plotSize === 'under-3-cents') {
        plots = plots.filter((p) => p.areaCents < 3);
      } else if (plotSize === '3-5-cents') {
        plots = plots.filter((p) => p.areaCents >= 3 && p.areaCents <= 5);
      } else if (plotSize === 'above-5-cents') {
        plots = plots.filter((p) => p.areaCents > 5);
      }
    }

    if (facing && facing !== 'all') {
      plots = plots.filter((p) => p.facing.toLowerCase().includes(facing.toLowerCase()));
    }

    if (approval && approval !== 'all') {
      plots = plots.filter((p) => p.approval.toLowerCase().includes(approval.toLowerCase()));
    }

    if (status && status !== 'all') {
      plots = plots.filter((p) => p.status.toLowerCase() === status.toLowerCase());
    }

    if (sellerId) {
      plots = plots.filter((p) => p.sellerId === sellerId);
    }

    if (verifiedOnly) {
      plots = plots.filter((p) => p.sellerVerified === true || p.verificationStatus === 'Verified');
    }

    if (isCorner) {
      plots = plots.filter((p) => p.isCornerPlot === true);
    }

    if (query) {
      plots = plots.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.location.toLowerCase().includes(query) ||
          p.project.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          (p.uniquePropertyId && p.uniquePropertyId.toLowerCase().includes(query))
      );
    }

    return NextResponse.json({ success: true, count: plots.length, plots });
  } catch (error) {
    console.error('API Plots GET error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch plots' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.title || !body.location || !body.price) {
      return NextResponse.json(
        { success: false, error: 'Title, location, and price are required' },
        { status: 400 }
      );
    }

    // Backend quota check: if sellerId is provided, enforce active subscription & listing limit
    if (body.sellerId && !body.id) {
      const sub = await getSellerSubscription(body.sellerId);
      const allPlots = await getPlots();
      const sellerPlotsCount = allPlots.filter((p) => p.sellerId === body.sellerId).length;

      const limit = sub ? sub.listingLimit : 2; // Default to free starter limit (2)
      if (sellerPlotsCount >= limit) {
        return NextResponse.json(
          {
            success: false,
            error: `Your subscription limit (${limit} plots) has been reached. Please upgrade your subscription plan in the Seller Portal.`,
            quotaReached: true
          },
          { status: 403 }
        );
      }
    }

    const saved = await savePlot(body);
    return NextResponse.json({ success: true, plot: saved }, { status: 201 });
  } catch (error) {
    console.error('API Plots POST error:', error);
    return NextResponse.json({ success: false, error: 'Failed to save plot' }, { status: 500 });
  }
}
