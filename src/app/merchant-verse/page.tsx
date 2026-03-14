import { defaultMetadata } from '@/utils/generateMetaData';
import Hero from '@/components_new/merchant-verse/Hero';
import CTA from '@/components_new/merchant-verse/CTA';
import Faq from '@/components_new/merchant-verse/Faq';
import Overview from '@/components_new/merchant-verse/Overview';
import Eligibility from '@/components_new/merchant-verse/Eligibility';
import Services from '@/components_new/merchant-verse/Services';
import Templates from '@/components_new/merchant-verse/Templates';
import Integration from '@/components_new/merchant-verse/Integration';
import Services1 from '@/components_new/merchant-verse/Services1';
import Steps from '@/components_new/merchant-verse/Steps';
import Integration1 from '@/components_new/merchant-verse/Integration1';
import Number from '@/components_new/merchant-verse/Number';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'MerchantVerse - AI-Powered Merchant Onboarding & Management Platform',
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
