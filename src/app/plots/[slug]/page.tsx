import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPlotBySlug, getPlots } from '@/lib/storage';
import PlotDetailClient from './PlotDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const plot = await getPlotBySlug(slug);

  if (!plot) {
    return {
      title: 'Plot Not Found | PLOT 4 TUTY',
    };
  }

  return {
    title: `${plot.title} | ${plot.location}, Thoothukudi | PLOT 4 TUTY`,
    description: `${plot.dimensions} residential plot in ${plot.location}, Thoothukudi. Area: ${plot.areaCents} Cents (${plot.areaSqFt} sq.ft). Price: ${plot.priceDisplay}. ${plot.approval}. 100% verified legal title.`,
    openGraph: {
      title: `${plot.title} — ${plot.priceDisplay}`,
      description: `${plot.areaCents} Cents plot in ${plot.location}, Thoothukudi. ${plot.approval}.`,
      images: [
        {
          url: plot.images[0] || '/logo.png',
          width: 1200,
          height: 630,
          alt: plot.title,
        },
      ],
    },
  };
}

export default async function PlotDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const plot = await getPlotBySlug(slug);

  if (!plot) {
    notFound();
  }

  const allPlots = await getPlots();
  const similarPlots = allPlots.filter((p) => p.id !== plot.id).slice(0, 3);

  return <PlotDetailClient plot={plot} similarPlots={similarPlots} />;
}
