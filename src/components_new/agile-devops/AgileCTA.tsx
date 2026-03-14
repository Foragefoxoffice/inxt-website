'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/Button';

const AgileCTA = () => {
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
              Start Your DevOps Transformation
            </span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 id="cta-heading" className="mx-auto max-w-[689px] text-center font-medium" itemProp="headline">
                Build Faster, Smarter Software Delivery Pipelines
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[689px] text-center" itemProp="description">
                Partner with our DevOps experts to automate development workflows, accelerate deployments, and improve system reliability across your digital platforms.
              </p>
            </RevealAnimation>
          </div>
        </div>

        <RevealAnimation delay={0.4}>
          <div className="mx-auto mt-[76px] w-[90%] text-center md:w-auto">
            <LinkButton
              href="mailto:connect@iortatechnxt.com"
              btnClass="btn-md btn-secondary-v2 group-hover/btn-v2:btn-primary-v2"
              aria-label="Book your free strategy call">
              Start Your DevOps Journey
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

AgileCTA.displayName = 'AgileCTA';
export default AgileCTA;
