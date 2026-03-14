import { defaultMetadata } from '@/utils/generateMetaData';
import Hero from '@/components_new/customer-verse/Hero';
import CTA from '@/components_new/customer-verse/CTA';
import Faq from '@/components_new/customer-verse/Faq';
import Overview from '@/components_new/customer-verse/Overview';
import Eligibility from '@/components_new/customer-verse/Eligibility';
import Services from '@/components_new/customer-verse/Services';
import Templates from '@/components_new/customer-verse/Templates';
import Integration from '@/components_new/customer-verse/Integration';
import Services1 from '@/components_new/customer-verse/Services1';
import Steps from '@/components_new/customer-verse/Steps';
import Integration1 from '@/components_new/customer-verse/Integration1';
import Number from '@/components_new/customer-verse/Number';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'CustomerVerse - AI-Powered Customer Engagement Platform',
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
