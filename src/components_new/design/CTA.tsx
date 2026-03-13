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
            <span className="badge badge-ivory uppercase" aria-label="Call to action section badge" itemProp="name">
              Let’s Build Better Experiences
            </span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 id="cta-heading" className="mx-auto max-w-[689px] text-center font-medium" itemProp="headline">
                Design Digital Experiences That Users Love
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p itemProp="description">Create intuitive, engaging, and user-centered digital products with our UI/UX design expertise. From research to interface design, we help transform ideas into seamless user experiences.</p>
            </RevealAnimation>
          </div>
        </div>

        <RevealAnimation delay={0.4}>
          <div className="mx-auto mt-[76px] w-[90%] text-center md:w-auto">
            <LinkButton
              href="/signup"
              btnClass="btn-xl-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2"
              aria-label="Book your free strategy call - Navigate to signup page">
              Start Your Design Journey
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CTA;
