import Hero from '@/components_new/about-us/Hero';
import Feature from '@/components_new/about-us/feature';
import CoreValues from '@/components_new/about-us/core-values';
import WhatWeDo from '@/components_new/about-us/what-we-do';
import WhereWeWork from '@/components_new/about-us/where-we-work';
import Why from '@/components_new/about-us/why';
import Partner from '@/components_new/about-us/partner';
import CTA from '@/components_new/about-us/CTA';
export default function AboutUsPage() {
  return (
    <main>
      <Hero />
      <Feature />
      <CoreValues />
      <WhatWeDo />
      <WhereWeWork />
      <Why />
      <Partner />
      <CTA />
    </main>
  );
}
