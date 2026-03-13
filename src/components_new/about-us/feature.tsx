import arrowUpRight from '@public/images/icons/arrow-up-right.svg';
import avatar1 from '@public/images/ns-avatar-1.png';
import avatar2 from '@public/images/ns-avatar-2.png';
import avatar3 from '@public/images/ns-avatar-3.png';
import featureImg04 from '@public/images/ns-img-53.svg';
import featureCardImg3 from '@public/images/ns-img-54.svg';
import featureImg04Dark from '@public/images/ns-img-dark-32.svg';
import featureCardImg3Dark from '@public/images/ns-img-dark-33.svg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const Feature = () => {
  return (
    <section className="dark:bg-background-6 bg-white pt-[100px] pb-[100px] md:pb-[85px] xl:pt-[200px] xl:pb-[100px]">
      <div className="main-container">
        <div className="flex flex-col items-center space-y-[40px] md:space-y-[50px] lg:space-y-[60px] xl:space-y-[70px]">

          {/* cards  */}
          <div className="flex flex-col items-center justify-center gap-8 xl:flex-row">
            {/* card one  */}

            <RevealAnimation delay={0.4}>
              <article className="bg-background-3 dark:bg-background-5 relative h-[493px] w-full max-w-[408px] space-y-[72px] overflow-hidden rounded-[20px] px-0 pt-[29px] sm:px-2.5">
                {/* card heading  */}
                <div className="mx-auto max-w-[350px] space-y-4 pl-4 text-center xl:text-left">
                  <h3 className="text-heading-5">Our mission</h3>
                  <p>Simplify legacy systems. Accelerate digital transformation. Deliver operational excellence. Streamline and modernize outdated legacy systems. Drive faster and smarter digital transformation initiatives. Enhance business agility with innovative technologies. Achieve consistent efficiency and operational excellence.</p>
                </div>
              </article>
            </RevealAnimation>
            {/* card two  */}

            <RevealAnimation delay={0.5}>
              <article className="bg-ns-green h-[493px] w-full max-w-[408px] space-y-[72px] overflow-hidden rounded-[20px] pt-[29px] sm:px-[29px]">
                {/* card heading  */}
                <div className="space-y-4 text-center xl:text-left">
                  <h3 className="text-secondary text-heading-5">About Iorta TechNXT</h3>
                  <p className="dark:text-secondary/60">
                    Iorta TechNXT is a global insurance technology company built to help insurers modernize, adapt, and lead with confidence. Headquartered in Kuala Lumpur, Malaysia, and with a presence across India, Southeast Asia, Africa, and the United States, we deliver cutting-edge digital transformation solutions tailored for the insurance industry. We specialize in Digital Transformation, Policy Administration Systems (PAS), core modernization, and cloud-native platforms designed to streamline operations and future-proof insurance businesses.
                  </p>
                </div>
                {/* card description   */}

              </article>
            </RevealAnimation>
            {/* card three  */}

            <RevealAnimation delay={0.6}>
              <article className="bg-background-3 dark:bg-background-5 relative h-[493px] w-full max-w-[408px] space-y-[72px] overflow-hidden rounded-[20px] px-0 pt-[29px] sm:px-2.5">
                {/* card heading  */}
                <div className="mx-auto max-w-[350px] space-y-4 pl-4 text-center xl:text-left">
                  <h3 className="text-heading-5">Our Vision</h3>
                  <p>To be the world's most trusted insurance technology partner empowering insurers with innovative, scalable, and plug-and-play solutions that drive digital transformation and deliver smarter, faster, and seamless customer experiences.</p>
                </div>
              </article>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
