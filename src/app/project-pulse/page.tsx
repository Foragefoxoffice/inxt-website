import CaseStudy from '@/components_new/project-pulse/CaseStudy';
import ClientsMarquee from '@/components_new/project-pulse/ClientsMarquee';
import CTA from '@/components_new/project-pulse/CTA';
import Faq from '@/components_new/project-pulse/Faq';
import Features from '@/components_new/project-pulse/Features';
import Hero from '@/components_new/project-pulse/Hero';
import HowItsWork from '@/components_new/project-pulse/HowItsWork';
import Services from '@/components_new/project-pulse/Services';
import Testimonial from '@/components_new/project-pulse/Testimonial';
import WhatWeDo from '@/components_new/project-pulse/WhatWeDo';
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
