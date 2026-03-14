import { defaultMetadata } from '@/utils/generateMetaData';
import Hero from '@/components_new/dashes/Hero';
import CTA from '@/components_new/dashes/CTA';
import Faq from '@/components_new/dashes/Faq';
import Overview from '@/components_new/dashes/Overview';
import Eligibility from '@/components_new/dashes/Eligibility';
import Services from '@/components_new/dashes/Services';
import Integration from '@/components_new/dashes/Integration';
import Services1 from '@/components_new/dashes/Services1';
import Steps from '@/components_new/dashes/Steps';
import Integration1 from '@/components_new/dashes/Integration1';
import Number from '@/components_new/dashes/Number';
import OurServices from '@/components_new/dashes/OurServices';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Dashes - AI-Powered Business Dashboard & Insights Platform',
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
