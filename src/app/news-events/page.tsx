import NewsShowcase from '@/components/news-events/NewsShowcase';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getNews } from '@/utils/api';
import { Metadata } from 'next';
import CTA from '@/components_new/blog/Cta';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'News & Events - inxt',
};

const page = async () => {
  try {
    const response = await getNews('en');
    const news = response.data || [];

    return (
      <main className="bg-white">
        <NewsShowcase news={news} />
        <CTA />
      </main>
    );
  } catch (error) {
    console.error('Error fetching news:', error);
    return (
      <main className="bg-white">
        <NewsShowcase news={[]} />
        <CTA />
      </main>
    );
  }
};

export default page;
