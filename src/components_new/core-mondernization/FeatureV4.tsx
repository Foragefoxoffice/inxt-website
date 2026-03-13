'use client';
import whyUsImage from '@public/images/ns-img-286.png';
import whyUsImageDark from '@public/images/ns-img-dark-195.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

interface FeatureItem {
  id: number;
  icon: string;
  title: string;
}

const featureItems: FeatureItem[] = [
  {
    id: 1,
    icon: 'ns-shape-7',
    title: 'Limited digital engagement with customers',
  },
  {
    id: 2,
    icon: 'ns-shape-9',
    title: 'Slower development and launch of new products',
  },
  {
    id: 3,
    icon: 'ns-shape-12',
    title: 'Increasing operational inefficiencies',
  },
  {
    id: 4,
    icon: 'ns-shape-8',
    title: 'Difficulty scaling systems to support business growth',
  },
  {
    id: 5,
    icon: 'ns-shape-11',
    title: 'Loss of competitive advantage in digital markets',
  }
];

const FeatureV4 = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="py-20 md:py-[100px] lg:py-[200px]">
        <div className="main-container">
          <div className="lp:gap-[100px] grid grid-cols-12 items-center gap-y-10 md:gap-y-18 lg:gap-y-20">
            
            <div className="lp:col-span-7 col-span-12 lg:col-span-6">
              <RevealAnimation delay={0.3} direction="left">
                <figure className="relative w-full lg:max-w-[668px]">
                  <Image
                    src={whyUsImage}
                    alt="Why data-driven teams choose us"
                    className="h-full w-full object-cover dark:hidden"
                  />
                  <Image
                    src={whyUsImageDark}
                    alt="Why data-driven teams choose us"
                    className="hidden h-full w-full object-cover dark:block"
                  />
                </figure>
              </RevealAnimation>
            </div>
            <div className="lp:col-span-5 col-span-12 lg:col-span-6">
              <div className="flex flex-col justify-between gap-10 md:flex-row lg:flex-col lg:gap-y-14">
                <div className="space-y-7">
                  <div className="space-y-3 md:max-w-[450px] lg:max-w-[521px]">
                    <RevealAnimation delay={0.1}>
                      <h2>The Cost of Doing Nothing</h2>
                    </RevealAnimation>
                    <RevealAnimation delay={0.2}>
                      <p>
                        Delaying core modernization can expose organizations to increasing operational inefficiencies, higher costs, and reduced competitiveness in a rapidly evolving digital landscape.
                      </p>
                    </RevealAnimation>
                  </div>
                </div>
                <div>
                  <ul className="sm:space-y-2">
                    {featureItems.map((feature, index) => (
                      <RevealAnimation key={feature.id} delay={0.3 + index * 0.1}>
                        <li className="flex items-center gap-3 py-2">
                          <div className="inline-block">
                            <span
                              className={`${feature.icon} text-secondary dark:text-accent text-[24px] sm:text-[36px]`}></span>
                          </div>
                          <span className="xl:text-heading-6 sm:text-tagline-1 text-tagline-2 text-secondary dark:text-accent font-normal">
                            {feature.title}
                          </span>
                        </li>
                      </RevealAnimation>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default FeatureV4;
