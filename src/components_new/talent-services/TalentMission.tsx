import gradient4Img from '@public/images/ns-img-496.png';
import Image from 'next/image';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';

const missionData = [
  {
    id: 1,
    title: 'Empowering BFSI Organizations with Strategic Recruitment & HR Solutions',
    description:
      "At Iorta TechNXT, we specialize in delivering recruitment and HR solutions tailored to the BFSI sector. Our expertise in the financial services industry enables us to identify skilled professionals who align with your organization's goals and culture.",
    description2:
      'We support organizations in building strong teams by streamlining the recruitment process, improving hiring efficiency, and ensuring the right talent is placed in the right roles to drive business growth.',
    image: 'https://placehold.co/600x400',
  },
  {
    id: 2,
    title: 'Industry-Specific Expertise in BFSI Recruitment',
    description:
      'Recruiting for the BFSI sector requires a deep understanding of regulatory frameworks, industry processes, and specialized skill sets. Our recruitment experts leverage industry insights and extensive talent networks to identify professionals with the right experience and expertise.',
    description2:
      'From technology specialists and operations experts to risk analysts and digital transformation leaders, we help BFSI organizations build teams that support innovation and operational excellence.',
    image: 'https://placehold.co/600x400',
  },
];

const TalentMission = () => {
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
            <div
              className={cn(
                'relative col-span-12 mx-4 lg:col-span-6 xl:mx-0',
                index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
              )}>
              <RevealAnimation delay={0.6}>
                <div className="dark:bg-background-8 shadow-2 relative z-10 flex h-full lg:min-h-[380px] min-h-[250px] items-center justify-center overflow-hidden rounded-[20px] bg-white/60 p-[26px] backdrop-blur-[20px]">
                  <RevealAnimation delay={0.7}>
                    <figure className="pointer-events-none absolute right-[-33%] bottom-[-54%] -z-10 w-full max-w-[500px] rotate-180 select-none max-[376px]:bottom-[-45%] md:right-[-30%] md:bottom-[-112%] md:max-w-[700px] lg:bottom-[-80%] xl:right-[-32%] xl:bottom-[-90%]">
                      <Image src={gradient4Img} alt="hero author bg" className="size-full object-cover" />
                    </figure>
                  </RevealAnimation>
                  <div className="relative z-10 flex w-full items-center justify-center">
                    <img src={item.image} alt={item.title} className="w-full max-w-[400px] rounded-[12px] object-cover" />
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

TalentMission.displayName = 'TalentMission';
export default TalentMission;
