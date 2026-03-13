//Success Stories Hero
import RevealAnimation from '../animation/RevealAnimation';

import Link from 'next/link';

const Hero = () => {
  return (
    <section className="xl:pt-[180px] md:pt-42 pt-36 xl:pb-28 md:pb-24 pb-10" aria-label="success stories hero section">
      <div className="main-container">
        <RevealAnimation delay={0.05} instant>
          <nav className="flex items-center gap-2 text-tagline-2 text-secondary/60 mb-8 lg:mb-12">
            <Link href="/" className="hover:text-primary-500 transition-colors duration-300">Home</Link>
            <span className="text-[10px]">●</span>
            <span className="text-secondary font-medium">Success stories</span>
          </nav>
        </RevealAnimation>
        <div className="lg:max-w-[610px] text-center space-y-4 lg:mx-auto">
          <RevealAnimation delay={0.1} instant>
            <h1 className="lg:text-heading-2">Success stories that inspire innovation</h1>
          </RevealAnimation>
          <RevealAnimation delay={0.2} instant>
            <p>
              Discover how teams and creators are scaling faster, simplifying workflows, and unlocking growth all
              powered by NextSaaS.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
