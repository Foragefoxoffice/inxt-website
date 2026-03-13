import { defaultMetadata } from '@/utils/generateMetaData';
import Hero from '@/components_new/insure-prime/Hero';
import CTA from '@/components_new/insure-prime/CTA';
import Faq from '@/components_new/insure-prime/Faq';
import Overview from '@/components_new/insure-prime/Overview';
import Integration from '@/components_new/insure-prime/Integration';
import Services from '@/components_new/insure-prime/Services';
import CaseStudy from '@/components_new/insure-prime/CaseStudy';
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
      <Integration />
      <Services />
      <CaseStudy />
      <Faq />
      <CTA />
    </main>
  );
};

export default page;
