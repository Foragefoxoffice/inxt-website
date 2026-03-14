'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/Button';

const CTA = () => {
  return (
    <section
      className="py-[80px] md:py-[112px]"
      aria-labelledby="cta-heading"
      itemScope
      itemType="https://schema.org/WebPageElement">
      <div className="main-container">
        <div className="space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge bg-[#D3E7F8] capitalize" aria-label="Call to action section badge" itemProp="name">
              Get Started
            </span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 id="cta-heading" className="mx-auto max-w-[689px] text-center font-medium" itemProp="headline">
                Start creating Your Insurance<span className="text-[#1D74BA]">  Core Modernization</span> Journey
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className='max-w-[700px] mx-auto' itemProp="description">Modernize legacy insurance systems, streamline operations, and unlock new digital capabilities with a flexible modernization approach designed for the insurance industry.</p>
            </RevealAnimation>
          </div>
        </div>

        <RevealAnimation delay={0.4}>
          <div className="mx-auto mt-[76px] w-[90%] text-center md:w-auto">
            <LinkButton
              href="mailto:connect@iortatechnxt.com"
              btnClass="btn-xl-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2"
              aria-label="Book your free strategy call - Navigate to signup page">
              Let's set up a Call
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CTA;
