import { defaultMetadata } from '@/utils/generateMetaData';
import Hero from '@/components_new/insurance/Hero';
import Services from '@/components_new/insurance/Services';
import Templates from '@/components_new/insurance/Templates';
import Integration from '@/components_new/insurance/Integration';
import Feature from '@/components_new/insurance/Feature';
import Feature2 from '@/components_new/insurance/Feature2';
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
      <Services />
      <Templates />
      <Integration />
      <Feature />
      <Feature2 />
      <Faq />
      <CTA />
    </main>
  );
};

export default page;
