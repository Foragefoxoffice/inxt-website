import NewsletterShowcase from '@/components/newsletter/NewsletterShowcase';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getNewsletterIssues } from '@/utils/api';
import { Metadata } from 'next';
import CTA from '@/components_new/blog/Cta';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Newsletter - inxt',
};

const page = async () => {
  try {
    const response = await getNewsletterIssues('en');
    const issues = response.data || [];

    return (
      <main className="bg-white">
        <NewsletterShowcase issues={issues} />
        <CTA />
      </main>
    );
  } catch (error) {
    console.error('Error fetching newsletters:', error);
    return (
      <main className="bg-white">
        <NewsletterShowcase issues={[]} />
        <CTA />
      </main>
    );
  }
};

export default page;
