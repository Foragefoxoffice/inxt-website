import { defaultMetadata } from '@/utils/generateMetaData';
import Hero from '@/components_new/sales-verse/Hero';
import CTA from '@/components_new/sales-verse/CTA';
import Faq from '@/components_new/sales-verse/Faq';
import Overview from '@/components_new/sales-verse/Overview';
import Eligibility from '@/components_new/sales-verse/Eligibility';
import Services from '@/components_new/sales-verse/Services';
import Templates from '@/components_new/sales-verse/Templates';
import Integration from '@/components_new/sales-verse/Integration';
import Services1 from '@/components_new/sales-verse/Services1';
import Steps from '@/components_new/sales-verse/Steps';
import Integration1 from '@/components_new/sales-verse/Integration1';
import Number from '@/components_new/sales-verse/Number';
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
      <Templates />
      <Integration />
      <Services1 />
      <Steps />
      <Integration1 />
      <Number />
      <Faq />
      <CTA />
    </main>
  );
};

export default page;
