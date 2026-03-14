import gradient4Img from '@public/images/ns-img-496.png';
import Image from 'next/image';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';

const missionData = [
  {
    id: 1,
    title: 'End-to-End Cybersecurity for Business Resilience',
    description:
      "In today's rapidly evolving digital landscape, cybersecurity is essential for protecting business operations and customer data. At Iorta TechNXT, we deliver comprehensive cybersecurity solutions that help organizations prevent, detect, and respond to security threats effectively.",
    description2:
      'Our security-first approach integrates advanced technologies, threat intelligence, and risk management strategies to ensure your organization maintains a secure and resilient digital environment.',
    image: 'https://placehold.co/600x400',
  },
  {
    id: 2,
    title: 'Secure by Scale and Future-Proof Security',
    description:
      'As businesses adopt cloud platforms, digital services, and connected systems, cybersecurity must evolve to address new threats. Our scalable security frameworks are designed to protect enterprise systems across on-premise, cloud, and hybrid environments.',
    description2:
      'By combining security architecture, proactive monitoring, and risk mitigation strategies, we help organizations strengthen their security posture and build long-term resilience against cyber threats.',
    image: 'https://placehold.co/600x400',
  },
];

const CyberMission = () => {
  return (
    <section className="pt-14 pb-20 md:pt-16 md:pb-28 lg:pt-[88px] lg:pb-44 xl:pt-[100px] xl:pb-[200px]">
      <div className="main-container flex flex-col gap-y-20 lg:gap-y-32">
        {missionData.map((item, index) => (
          <div className="grid grid-cols-12 items-center gap-y-14 xl:gap-x-28" key={item.id}>
            <div className={cn('col-span-12 mx-4 lg:col-span-6 xl:mx-0', index % 2 === 1 ? 'lg:order-2' : 'lg:order-1')}>
              <div className="space-y-3">
                <RevealAnimation delay={0.2}><h2>{item.title}</h2></RevealAnimation>
                <RevealAnimation delay={0.4}><p>{item.description}</p></RevealAnimation>
                {item.description2 && (<RevealAnimation delay={0.5}><p>{item.description2}</p></RevealAnimation>)}
              </div>
            </div>
            <div className={cn('relative col-span-12 mx-4 lg:col-span-6 xl:mx-0', index % 2 === 1 ? 'lg:order-1' : 'lg:order-2')}>
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

CyberMission.displayName = 'CyberMission';
export default CyberMission;
