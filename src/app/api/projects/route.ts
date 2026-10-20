import { NextResponse } from 'next/server';
import { getProjects, saveProject } from '@/lib/storage';

export async function GET() {
  try {
    const projects = await getProjects();
    return NextResponse.json({ success: true, projects });
  } catch (error) {
    console.error('API Projects GET error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch projects' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const project = await saveProject(body);
    return NextResponse.json({ success: true, project }, { status: 201 });
  } catch (error) {
    console.error('API Projects POST error:', error);
    return NextResponse.json({ success: false, error: 'Failed to save project' }, { status: 500 });
  }
}
