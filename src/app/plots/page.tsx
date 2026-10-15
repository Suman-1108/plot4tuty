import { Suspense } from 'react';
import type { Metadata } from 'next';
import { getPlots } from '@/lib/storage';
import PlotsClient from '@/components/plots/PlotsClient';

export const metadata: Metadata = {
  title: 'Explore Residential Plots in Thoothukudi | PLOT 4 TUTY',
  description:
    'Browse verified residential plots for sale in Thoothukudi, Tamil Nadu. Filter by location (Korampallam, Millerpuram, Palayamkottai Road), budget, area in cents, and DTCP approval.',
};

export default async function PlotsPage() {
  const plots = await getPlots();

  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-sm text-[#666A5D]">
          Loading Thoothukudi land listings...
        </div>
      }
    >
      <PlotsClient initialPlots={plots} />
    </Suspense>
  );
}
