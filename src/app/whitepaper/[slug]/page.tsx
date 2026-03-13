import Content from '@/components/whitepaper-details/Content';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getWhitePaperById, getWhitePapers } from '@/utils/api';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const response = await getWhitePapers('en');
  const whitepapers = response.data || [];
  return whitepapers.map((whitepaper) => ({
    slug: whitepaper.slug,
  }));
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Whitepaper Details - AI Voice Generator || NextSaaS',
};

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  try {
    const response = await getWhitePaperById('en', slug);
    const paper = response.data;

    if (!paper) return notFound();

    return (
      <main className="bg-white">
        <Content paper={paper} />
      </main>
    );
  } catch (error) {
    console.error('Error fetching white paper:', error);
    return notFound();
  }
};

export default page;
