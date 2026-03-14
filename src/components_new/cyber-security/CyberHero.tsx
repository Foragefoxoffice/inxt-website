import heroAsset1 from '@public/images/ns-img-1.svg';
import heroAsset1Dark from '@public/images/ns-img-dark-1.svg';
import avatar1 from '@public/images/ns-avatar-1.png';
import avatar2 from '@public/images/ns-avatar-2.png';
import avatar3 from '@public/images/ns-avatar-3.png';
import heroAsset2 from '@public/images/ns-img-2.png';
import heroAsset2Dark from '@public/images/ns-img-dark-2.png';
import heroAsset3 from '@public/images/ns-img-3.png';
import heroAsset3Dark from '@public/images/ns-img-dark-3.png';
import heroAsset4 from '@public/images/ns-img-4.svg';
import heroAsset4Dark from '@public/images/ns-img-dark-4.svg';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';
import HeroDotBg from '@/components/shared/HeroDotBg';
import LinkButton from '../ui/button/LinkButton';
import VerticalLine from '@/components/home/VerticalLine';

const CyberHero = () => {
  return (
    <RevealAnimation direction="up" offset={0}>
      <section className="bg-background-3 dark:bg-background-5 relative overflow-hidden pt-[200px] pb-16 lg:pb-[100px] 2xl:pt-[250px]">
        <HeroDotBg />
        <VerticalLine />
        <div className="main-container relative z-20 flex flex-col items-center justify-center text-center">
          <RevealAnimation delay={0.1} duration={2} useSpring={true}>
            <figure className="absolute -top-[25%] -left-[3%] w-[150px] rotate-[-7deg] min-[1535px]:!-left-[10%] min-[1735px]:!-left-[16%] sm:-top-[15%] sm:w-[200px] lg:-top-[5%] lg:-left-[1%] lg:w-[220px] xl:w-[350px] 2xl:w-fit">
              <Image src={heroAsset1} alt="Hero asset 1" className="inline-block h-full w-full rounded-2xl object-cover dark:hidden" />
              <Image src={heroAsset1Dark} alt="Hero asset 1" className="hidden h-full w-full object-cover dark:inline-block" />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.2} duration={2} useSpring={true}>
            <figure className="absolute hidden rotate-[11deg] min-[1535px]:!bottom-[18%] min-[1535px]:!-left-[5%] min-[1735px]:!bottom-[18%] min-[1735px]:!-left-[12.5%] md:bottom-[67%] md:left-[1%] md:block md:w-[140px] lg:bottom-[52%] lg:left-[2%] lg:w-[180px] xl:bottom-[30%] xl:w-[250px] 2xl:w-[275px]">
              <Image src={heroAsset2} alt="Hero asset 2" className="inline-block h-full w-full object-cover shadow-none outline-0 dark:hidden" />
              <Image src={heroAsset2Dark} alt="Hero asset 2" className="hidden h-full w-full object-cover shadow-none outline-0 dark:inline-block" />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.1} duration={2} useSpring={true}>
            <figure className="absolute -top-[22%] right-[4%] w-[120px] rotate-[4deg] sm:-top-[14%] md:w-[140px] lg:-top-[1.4%] lg:right-[2%] lg:w-[170px] xl:top-[5%] xl:right-[3%] xl:w-[200px] 2xl:top-[1%] 2xl:-right-[8.0%] 2xl:w-[280px]">
              <Image src={heroAsset3} alt="Hero asset 3" className="inline-block h-full w-full rounded-2xl object-cover dark:hidden" />
              <Image src={heroAsset3Dark} alt="Hero asset 3" className="hidden h-full w-full rounded-2xl object-cover dark:inline-block" />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.2} duration={2} useSpring={true}>
            <figure className="absolute right-[4%] hidden rotate-[-7deg] min-[1535px]:!-right-[12%] min-[1735px]:!-right-[18%] md:bottom-[67%] md:block md:w-[140px] lg:right-[1%] lg:bottom-[57%] lg:w-[180px] xl:-right-[1%] xl:bottom-[41%] xl:w-[250px] 2xl:bottom-[20%] 2xl:w-fit">
              <Image src={heroAsset4} alt="Hero asset 4" className="inline-block h-full w-full rounded-2xl object-cover dark:hidden" />
              <Image src={heroAsset4Dark} alt="Hero asset 4" className="hidden h-full w-full rounded-2xl object-cover dark:inline-block" />
            </figure>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h1 className="mx-auto my-12 max-w-[350px] leading-[1.2] sm:max-w-[450px] md:max-w-[700px] xl:max-w-[846px]">
              <span className="hero-text-gradient hero-text-color-1 block">
                Cybersecurity Solutions <br className="hidden md:block" /> at Iorta TechNXT
              </span>
            </h1>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <p className="mb-7 max-w-[700px] md:mb-10 lg:mb-14">
              Protect your digital infrastructure with proactive, scalable, and resilient cybersecurity solutions designed to safeguard your systems, data, and business operations.
            </p>
          </RevealAnimation>

          <ul className="opacity-0 hidden md:block mx-auto mb-9 flex flex-col gap-4 max-md:w-full md:mx-0 md:mb-11 md:w-auto md:flex-row lg:mb-14">
            <RevealAnimation delay={0.3} direction="left" offset={50}>
              <li>
                <LinkButton href="/login" className="btn btn-primary hover:btn-white-dark dark:hover:btn-white btn-lg md:btn-xl mx-auto w-full md:mx-0 md:w-auto">Get started</LinkButton>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.5} direction="left" offset={50}>
              <li>
                <LinkButton href="/signup" className="btn btn-white hover:btn-primary dark:btn-white-dark btn-lg md:btn-xl mx-auto w-full md:mx-0 md:w-auto">Free trial</LinkButton>
              </li>
            </RevealAnimation>
          </ul>

          <div className="opacity-0 mb-20 flex items-center justify-center gap-4 max-[375px]:flex-col lg:mb-[100px hidden md:block]">
            <div className="flex -space-x-3.5">
              {[{ src: avatar1, alt: 'Avatar 1' }, { src: avatar2, alt: 'Avatar 2' }, { src: avatar3, alt: 'Avatar 3' }].map((avatar, idx) => (
                <RevealAnimation delay={0.1 * (idx + 2)} direction="right" offset={50} key={idx + 1}>
                  <Image className="bg-ns-green inline-block size-12 rounded-full ring-2 ring-white dark:ring-black" src={avatar.src} alt={avatar.alt} />
                </RevealAnimation>
              ))}
              <RevealAnimation delay={0.5} direction="right" offset={50}>
                <div className="text-secondary/80 bg-ns-green text-tagline-3 inline-flex size-12 items-center justify-center rounded-full font-medium ring-2 ring-white dark:ring-black">99+</div>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.6} direction="right" offset={50}>
              <div className="text-left max-[375px]:text-center">
                <p className="text-tagline-2 text-secondary dark:text-accent block font-medium">Trusted by 20k+</p>
                <p className="text-tagline-3">Customers across the globe</p>
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation instant delay={0.6}>
            <div className="relative mx-auto w-[375px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1100px]">
              <div className="from-background-3 dark:from-background-5 absolute top-0 left-0 z-40 h-full w-[30%] bg-gradient-to-r to-transparent"></div>
              <div className="from-background-3 dark:from-background-5 absolute top-0 right-0 z-40 h-full w-[30%] bg-gradient-to-l to-transparent"></div>
              <Marquee autoFill speed={40} pauseOnHover={true}>
                <div className="flex items-center justify-center gap-12 py-4">
                  {['UI/UX Design', 'AI & ML Solution', 'Data analysis', 'Agile DevOPS', 'API & Microservices', 'Oracle COE', 'App dev & Support', 'Digital Consulting', 'Talent Services', 'Cyber security', 'Quality Analysis'].map((service, index) => (
                    <div key={index} className="flex items-center gap-12">
                      <span className="text-secondary dark:text-accent whitespace-nowrap text-lg font-semibold tracking-wide uppercase opacity-80 transition-opacity hover:opacity-100 md:text-xl">{service}</span>
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </RevealAnimation>
  );
};
CyberHero.displayName = 'CyberHero';
export default CyberHero;
