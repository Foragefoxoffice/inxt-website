import CaseStudy from '@/components_new/project-plus/CaseStudy';
import ClientsMarquee from '@/components_new/project-plus/ClientsMarquee';
import CTA from '@/components_new/project-plus/CTA';
import Faq from '@/components_new/project-plus/Faq';
import Features from '@/components_new/project-plus/Features';
import Hero from '@/components_new/project-plus/Hero';
import HowItsWork from '@/components_new/project-plus/HowItsWork';
import Services from '@/components_new/project-plus/Services';
import Testimonial from '@/components_new/project-plus/Testimonial';
import WhatWeDo from '@/components_new/project-plus/WhatWeDo';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'AI Application || NextSaaS',
};

const page = () => {
  return (
    <main className="space-y-10 bg-white">
      <Hero />
      <HowItsWork />
      <Features />      
      <Faq />
      <CTA />
    </main>
  );
};

export default page;
