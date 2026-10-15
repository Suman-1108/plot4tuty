import { NextResponse } from 'next/server';
import { getPlots, savePlot } from '@/lib/storage';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const location = searchParams.get('location');
    const budgetRange = searchParams.get('budgetRange');
    const plotSize = searchParams.get('plotSize');
    const approval = searchParams.get('approval');
    const status = searchParams.get('status');
    const query = searchParams.get('q')?.toLowerCase();

    let plots = await getPlots();

    if (location && location !== 'all') {
      plots = plots.filter((p) => p.location.toLowerCase() === location.toLowerCase());
    }

    if (budgetRange && budgetRange !== 'all') {
      if (budgetRange === 'under-15') {
        plots = plots.filter((p) => p.price < 1500000);
      } else if (budgetRange === '15-25') {
        plots = plots.filter((p) => p.price >= 1500000 && p.price <= 2500000);
      } else if (budgetRange === '25-35') {
        plots = plots.filter((p) => p.price > 2500000 && p.price <= 3500000);
      } else if (budgetRange === 'above-35') {
        plots = plots.filter((p) => p.price > 3500000);
      }
    }

    if (plotSize && plotSize !== 'all') {
      if (plotSize === 'under-3-cents') {
        plots = plots.filter((p) => p.areaCents < 3);
      } else if (plotSize === '3-5-cents') {
        plots = plots.filter((p) => p.areaCents >= 3 && p.areaCents <= 5);
      } else if (plotSize === 'above-5-cents') {
        plots = plots.filter((p) => p.areaCents > 5);
      }
    }

    if (approval && approval !== 'all') {
      plots = plots.filter((p) => p.approval.toLowerCase().includes(approval.toLowerCase()));
    }

    if (status && status !== 'all') {
      plots = plots.filter((p) => p.status.toLowerCase() === status.toLowerCase());
    }

    if (query) {
      plots = plots.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.location.toLowerCase().includes(query) ||
          p.project.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
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
      return NextResponse.json({ success: false, error: 'Title, location, and price are required' }, { status: 400 });
    }

    const saved = await savePlot(body);
    return NextResponse.json({ success: true, plot: saved }, { status: 201 });
  } catch (error) {
    console.error('API Plots POST error:', error);
    return NextResponse.json({ success: false, error: 'Failed to save plot' }, { status: 500 });
  }
}
