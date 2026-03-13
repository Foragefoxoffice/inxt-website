import { defaultMetadata } from '@/utils/generateMetaData';
import Hero from '@/components_new/dex/Hero';
import CTA from '@/components_new/dex/CTA';
import Faq from '@/components_new/dex/Faq';
import Overview from '@/components_new/dex/Overview';
import Eligibility from '@/components_new/dex/Eligibility';
import Services from '@/components_new/dex/Services';
import Templates from '@/components_new/dex/Templates';
import Integration from '@/components_new/dex/Integration';
import Services1 from '@/components_new/dex/Services1';
import Steps from '@/components_new/dex/Steps';
import Integration1 from '@/components_new/dex/Integration1';
import Number from '@/components_new/dex/Number';
import OurServices from '@/components_new/dex/OurServices';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Integration - AI Voice Generator || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-3">
      <Hero />
      <Overview />
      <Eligibility />
      <Services />
      <Integration />
      <Services1 />
      <OurServices />
      <Steps />
      <Integration1 />
      <Number />
      <Faq />
      <CTA />
    </main>
  );
};

export default page;
