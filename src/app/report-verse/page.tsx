import { defaultMetadata } from '@/utils/generateMetaData';
import Hero from '@/components_new/report-verse/Hero';
import CTA from '@/components_new/report-verse/CTA';
import Faq from '@/components_new/report-verse/Faq';
import Overview from '@/components_new/report-verse/Overview';
import Eligibility from '@/components_new/report-verse/Eligibility';
import Services from '@/components_new/report-verse/Services';
import Templates from '@/components_new/report-verse/Templates';
import Integration from '@/components_new/report-verse/Integration';
import Services1 from '@/components_new/report-verse/Services1';
import Steps from '@/components_new/report-verse/Steps';
import Integration1 from '@/components_new/report-verse/Integration1';
import Number from '@/components_new/report-verse/Number';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'ReportVerse - AI-Powered Analytics & Reporting Platform',
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
