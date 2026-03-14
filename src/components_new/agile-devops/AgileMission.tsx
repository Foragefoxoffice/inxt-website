import gradient4Img from '@public/images/ns-img-496.png';
import Image from 'next/image';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';

const missionData = [
  {
    id: 1,
    title: 'Thriving in the Digital Era with Enterprise Agile DevOps',
    description:
      'In today’s fast-moving digital landscape, organizations must deliver software faster while maintaining quality and reliability. Our DevOps solutions enable enterprises to automate development pipelines, streamline collaboration between development and operations teams, and deploy applications efficiently.',
    description2:
      'By implementing modern DevOps practices, businesses can reduce release cycles, improve product stability, and respond quickly to changing customer demands.',
    image: 'https://placehold.co/600x400',
  },
  {
    id: 2,
    title: 'Driving Agility with Product-Centric Value Delivery',
    description:
      'At Iorta TechNXT, we enable organizations to adopt a product-focused DevOps approach that aligns technology delivery with business outcomes. Our DevOps framework combines automation, continuous integration, and scalable infrastructure to help teams deliver reliable software faster.',
    description2:
      'With optimized workflows and intelligent monitoring, organizations can improve deployment frequency, reduce system downtime, and enhance operational efficiency.',
    image: 'https://placehold.co/600x400',
  },
];

const AgileMission = () => {
  return (
    <section className="pt-14 pb-20 md:pt-16 md:pb-28 lg:pt-[88px] lg:pb-44 xl:pt-[100px] xl:pb-[200px]">
      <div className="main-container flex flex-col gap-y-20 lg:gap-y-32">
        {missionData.map((item, index) => (
          <div className="grid grid-cols-12 items-center gap-y-14 xl:gap-x-28" key={item.id}>
            <div
              className={cn(
                'col-span-12 mx-4 lg:col-span-6 xl:mx-0',
                index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
              )}>
              <div className="space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2>{item.title}</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>{item.description}</p>
                </RevealAnimation>
                {item.description2 && (
                  <RevealAnimation delay={0.5}>
                    <p>{item.description2}</p>
                  </RevealAnimation>
                )}
              </div>
            </div>
            {/*  */}
            <div
              className={cn(
                'relative col-span-12 mx-4 lg:col-span-6 xl:mx-0',
                index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
              )}>
              <RevealAnimation delay={0.6}>
                <div className="dark:bg-background-8 shadow-2 relative z-10 flex h-full lg:min-h-[380px] min-h-[250px] items-center justify-center overflow-hidden rounded-[20px] bg-white/60 p-[26px] backdrop-blur-[20px]">
                  {/* gradient bg */}
                  <RevealAnimation delay={0.7}>
                    <figure className="pointer-events-none absolute right-[-33%] bottom-[-54%] -z-10 w-full max-w-[500px] rotate-180 select-none max-[376px]:bottom-[-45%] md:right-[-30%] md:bottom-[-112%] md:max-w-[700px] lg:bottom-[-80%] xl:right-[-32%] xl:bottom-[-90%]">
                      <Image src={gradient4Img} alt="hero author bg" className="size-full object-cover" />
                    </figure>
                  </RevealAnimation>
                  <div className="relative z-10 flex w-full items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full max-w-[400px] rounded-[12px] object-cover"
                    />
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

AgileMission.displayName = 'AgileMission';
export default AgileMission;
