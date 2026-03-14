import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import HeroLineGradient from './HeroLineGradient';
import CtaInputForm from '../shared/cta/CtaInputForm';

const Hero = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="bg-background-3 dark:bg-background-7 relative z-10 overflow-hidden pt-[150px] md:pt-[200px]">
        <HeroLineGradient />
        <div className="main-container">
          <div>
            <div className="space-y-3 text-center md:space-y-4">
              <RevealAnimation delay={0.2}>
                <h1 className="mx-auto max-w-[350px] leading-[1.2] sm:max-w-[450px] md:max-w-[600px] xl:max-w-[846px]">
                  <span className="hero-text-gradient hero-text-color-1 block">
                    Modernize Legacy Insurance Core Systems
                  </span>
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mx-auto max-w-[450px] sm:max-w-[600px] md:max-w-[818px]">
                  Upgrade AS400 and legacy insurance platforms to modern, scalable systems that improve operational efficiency, accelerate product innovation, and enable seamless digital experiences.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4} direction="left">
                <p className="mx-auto max-w-[450px] sm:max-w-[600px] md:max-w-[818px]">
                  Many insurers rely on decades-old core systems that are expensive to maintain and difficult to integrate with modern technologies. Our modernization approach transforms policy administration, claims processing, and operational systems while ensuring uninterrupted business operations.
                </p>
              </RevealAnimation>
            </div>
            <div className="flex justify-center w-full my-12">
              <CtaInputForm 
                btnClass="btn-md"
                btnStyle={{ background: '#000000', color: '#ffffff', borderColor: '#000000' }}
                ctaBtnText="Get Information"
              />
            </div>
            <div>
              <RevealAnimation delay={1.1} instant={true}>
                <figure className="mx-auto w-full overflow-hidden rounded-t-2xl md:max-w-[640px] lg:max-w-[1240px]">
                  <Image
                    src="/images/ns-img-285.jpg"
                    alt="Hero"
                    className="w-full dark:hidden"
                    width={1240}
                    height={800}
                  />
                  <Image
                    src="/images/ns-img-dark-194.jpg"
                    alt="Hero"
                    className="hidden w-full dark:block"
                    width={1240}
                    height={800}
                  />
                </figure>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Hero;
