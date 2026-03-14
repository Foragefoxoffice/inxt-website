import { defaultMetadata } from '@/utils/generateMetaData';
import Hero from '@/components_new/digital-one/Hero';
import CTA from '@/components_new/digital-one/CTA';
import Faq from '@/components_new/digital-one/Faq';
import Overview from '@/components_new/digital-one/Overview';
import Eligibility from '@/components_new/digital-one/Eligibility';
import Services from '@/components_new/digital-one/Services';
import Integration from '@/components_new/digital-one/Integration';
import Services1 from '@/components_new/digital-one/Services1';
import Steps from '@/components_new/digital-one/Steps';
import Integration1 from '@/components_new/digital-one/Integration1';
import Number from '@/components_new/digital-one/Number';
import OurServices from '@/components_new/digital-one/OurServices';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'DigitalOne - AI-Powered Digital Experience Platform',
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
