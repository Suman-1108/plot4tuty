import type { Metadata } from 'next';
import { getProjects } from '@/lib/storage';
import ProjectsClient from '@/components/projects/ProjectsClient';

export const metadata: Metadata = {
  title: 'Masterplan Layout Projects in Thoothukudi | PLOT 4 TUTY',
  description:
    'Explore signature residential plotted communities in Thoothukudi, Tamil Nadu. Pearl Haven, Palayam Greens, and Harbour Enclave with DTCP and TNRERA approvals, wide roads, and sweet groundwater.',
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return <ProjectsClient projects={projects} />;
}
