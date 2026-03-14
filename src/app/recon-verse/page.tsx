import { defaultMetadata } from '@/utils/generateMetaData';
import Hero from '@/components_new/recon-verse/Hero';
import CTA from '@/components_new/recon-verse/CTA';
import Faq from '@/components_new/recon-verse/Faq';
import Overview from '@/components_new/recon-verse/Overview';
import Eligibility from '@/components_new/recon-verse/Eligibility';
import Services from '@/components_new/recon-verse/Services';
import Templates from '@/components_new/recon-verse/Templates';
import Integration from '@/components_new/recon-verse/Integration';
import Services1 from '@/components_new/recon-verse/Services1';
import Steps from '@/components_new/recon-verse/Steps';
import Integration1 from '@/components_new/recon-verse/Integration1';
import Number from '@/components_new/recon-verse/Number';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'ReconVerse - AI-Powered Reconciliation & Financial Matching Platform',
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
