import { defaultMetadata } from '@/utils/generateMetaData';
import Hero from '@/components_new/sales-verse/Hero';
import CTA from '@/components_new/insurance/CTA';
import Faq from '@/components_new/insurance/Faq';

import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Integration - AI Voice Generator || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-3">
      <Hero />
      <Faq />
      <CTA />
    </main>
  );
};

export default page;
