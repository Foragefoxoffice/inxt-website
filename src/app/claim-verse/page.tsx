import { defaultMetadata } from '@/utils/generateMetaData';
import Hero from '@/components_new/claim-verse/Hero';
import CTA from '@/components_new/claim-verse/CTA';
import Faq from '@/components_new/claim-verse/Faq';
import Overview from '@/components_new/claim-verse/Overview';
import Eligibility from '@/components_new/claim-verse/Eligibility';
import Services from '@/components_new/claim-verse/Services';
import Templates from '@/components_new/claim-verse/Templates';
import Integration from '@/components_new/claim-verse/Integration';
import Services1 from '@/components_new/claim-verse/Services1';
import Steps from '@/components_new/claim-verse/Steps';
import Integration1 from '@/components_new/claim-verse/Integration1';
import Number from '@/components_new/claim-verse/Number';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'ClaimVerse - AI-Powered Insurance Claims Management Platform',
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
