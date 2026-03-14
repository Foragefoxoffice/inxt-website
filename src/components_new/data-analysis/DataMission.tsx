import gradient4Img from '@public/images/ns-img-496.png';
import Image from 'next/image';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';

const missionData = [
  {
    id: 1,
    title: 'Unlock the Power of Data to Drive Innovation and Growth',
    description:
      'Modern organizations generate vast amounts of data every day. Our analytics solutions help businesses convert this data into actionable insights that support better strategies, improved operational efficiency, and stronger customer experiences. By identifying patterns, trends, and opportunities within complex datasets, we enable organizations to make confident decisions and stay competitive in a rapidly evolving market.',
    image: 'https://placehold.co/600x400',
  },
  {
    id: 2,
    title: 'Data-Driven Decisions for Business Success',
    description:
      'We provide end-to-end data engineering, analytics, and business intelligence solutions designed to create scalable and reliable data ecosystems. Our services integrate seamlessly with your existing systems to provide real-time visibility and advanced analytics capabilities. With the right data insights, organizations can improve decision-making, identify new opportunities, and build strategies based on real evidence rather than assumptions.',
    image: 'https://placehold.co/600x400',
  },
];

const DataMission = () => {
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

DataMission.displayName = 'DataMission';
export default DataMission;
