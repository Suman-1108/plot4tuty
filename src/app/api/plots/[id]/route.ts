import { NextResponse } from 'next/server';
import { getPlots, savePlot, deletePlot, updatePlotStatus } from '@/lib/storage';

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const plots = await getPlots();
    const plot = plots.find((p) => p.id === id || p.slug === id);

    if (!plot) {
      return NextResponse.json({ success: false, error: 'Plot not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, plot });
  } catch (error) {
    console.error('API Plot GET by ID error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await request.json();

    const updated = await savePlot({ ...body, id });
    return NextResponse.json({ success: true, plot: updated });
  } catch (error) {
    console.error('API Plot PUT error:', error);
    return NextResponse.json({ success: false, error: 'Failed to update plot' }, { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await request.json();

    if (body.status) {
      const updated = await updatePlotStatus(id, body.status);
      if (!updated) {
        return NextResponse.json({ success: false, error: 'Plot not found' }, { status: 404 });
      }
      return NextResponse.json({ success: true, plot: updated });
    }

    const updated = await savePlot({ ...body, id });
    return NextResponse.json({ success: true, plot: updated });
  } catch (error) {
    console.error('API Plot PATCH error:', error);
    return NextResponse.json({ success: false, error: 'Failed to patch plot' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const deleted = await deletePlot(id);

    if (!deleted) {
      return NextResponse.json({ success: false, error: 'Plot not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Plot deleted successfully' });
  } catch (error) {
    console.error('API Plot DELETE error:', error);
    return NextResponse.json({ success: false, error: 'Failed to delete plot' }, { status: 500 });
  }
}
