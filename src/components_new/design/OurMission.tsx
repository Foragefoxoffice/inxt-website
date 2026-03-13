import gradient4Img from '@public/images/ns-img-496.png';
import Image from 'next/image';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';

const OurMission = () => {
  return (
    <section className="pt-14 pb-20 md:pt-16 md:pb-28 lg:pt-[88px] lg:pb-44 xl:pt-[100px] xl:pb-[200px]">
      <div className="main-container flex flex-col gap-y-20 lg:gap-y-32">
        {[1, 2, 3].map((item, index) => (
          <div className="grid grid-cols-12 items-center gap-y-14 xl:gap-x-28" key={index}>
            <div className={cn("col-span-12 mx-4 lg:col-span-6 xl:mx-0", index % 2 === 1 ? "lg:order-2" : "lg:order-1")}>
              <div className="space-y-3">
                <RevealAnimation delay={0.1}>
                  <span className="badge badge-cyan mb-5">Our Mission {item}</span>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <h2>Empowering teams to collaborate and thrive with intelligent</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>
                    In today&apos;s fast-paced, digitally connected world, successful teams rely on more than just
                    talent—they thrive on intelligent collaboration.
                  </p>
                </RevealAnimation>
              </div>
            </div>
            {/*  */}
            <div className={cn("relative col-span-12 mx-4 lg:col-span-6 xl:mx-0", index % 2 === 1 ? "lg:order-1" : "lg:order-2")}>
              <RevealAnimation delay={0.6}>
                <div className="dark:bg-background-8 shadow-2 relative z-10 flex h-full min-h-[380px] items-center justify-center overflow-hidden rounded-[20px] bg-white/60 p-[26px] backdrop-blur-[20px]">
                  {/* gradient bg */}
                  <RevealAnimation delay={0.7}>
                    <figure className="pointer-events-none absolute right-[-33%] bottom-[-54%] -z-10 w-full max-w-[500px] rotate-180 select-none max-[376px]:bottom-[-45%] md:right-[-30%] md:bottom-[-112%] md:max-w-[700px] lg:bottom-[-80%] xl:right-[-32%] xl:bottom-[-90%]">
                      <Image src={gradient4Img} alt="hero author bg" className="size-full object-cover" />
                    </figure>
                  </RevealAnimation>
                  <div className="relative z-10 flex w-full items-center justify-center">
                    <img src="https://placehold.co/600x400" alt="Dummy" className="w-full max-w-[400px] rounded-[12px] object-cover" />
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

OurMission.displayName = 'OurMission';
export default OurMission;
