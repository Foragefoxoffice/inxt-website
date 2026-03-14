import Client from '@/components/white-paper/Client';
import Hero from '@/components/white-paper/Hero';
import Research from '@/components/white-paper/Researchs';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getWhitePapers } from '@/utils/api';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Whitepaper - AI Voice Generator || NextSaaS',
};

const page = async () => {
  try {
    const response = await getWhitePapers('en');
    const whitepapers = response.data || [];

    return (
      <main className="bg-background-3">
        <Hero />
        <Research whitepapers={whitepapers} />
        <Client />
      </main>
    );
  } catch (error) {
    console.warn('[Build Warning] Failed to fetch whitepapers for list page. Rendering empty state.');
    return (
      <main className="bg-background-3">
        <Hero />
        <Research whitepapers={[]} />
        <Client />
      </main>
    );
  }
};

export default page;
