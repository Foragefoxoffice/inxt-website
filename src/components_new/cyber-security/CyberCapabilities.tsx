import mainFeature from '@public/images/ns-img-123.png';
import mainFeatureDark from '@public/images/ns-img-dark-92.png';
import Image from 'next/image';
import RevealAnimation from '@/components/animation/RevealAnimation';

const data = [
  { id: 1, title: 'Threat intelligence and monitoring' },
  { id: 2, title: 'Security operations and incident detection' },
  { id: 3, title: 'Vulnerability assessment and testing' },
  { id: 4, title: 'Security risk analysis and mitigation' },
  { id: 5, title: 'Continuous security monitoring' },
  { id: 6, title: 'Security architecture design' },
  { id: 7, title: 'Compliance and governance frameworks' },
  { id: 8, title: 'Cloud security implementation' },
  { id: 9, title: 'Identity and access management' },
  { id: 10, title: 'Security automation and response' },
];

const CyberCapabilities = () => {
  return (
    <section className="py-16 md:py-20 lg:pt-[0px] xl:pt-[20px]">
      <div className="main-container">
        <div className="mb-10 space-y-5 text-center md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge bg-[#D3E7F8]">Security Capabilities</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2>Advanced Cybersecurity <br className="hidden md:block" /> Protection</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="mx-auto max-w-[500px] lg:max-w-[674px]">
                Our cybersecurity services combine proactive monitoring, advanced threat detection, and strategic risk management to protect your organization&#39;s digital ecosystem.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="space-y-10 md:space-y-20 lg:space-y-[100px]">
          <div className="flex flex-col items-center gap-y-6 lg:flex-row lg:gap-8 xl:gap-12">
            <RevealAnimation delay={0.5} offset={70} start="top 88%">
              <div className="bg-white dark:bg-background-6 w-full max-w-[500px] space-y-6 rounded-[20px] p-8 lg:max-w-[300px] xl:max-w-[360px] xl:p-[42px]">
                <h3 className="xl:text-heading-4 text-heading-5">Threat Protection</h3>
                <ul>
                  {data.slice(0, 5).map((item) => (
                    <li key={item.id} className="flex items-center gap-2 py-1.5 xl:py-2.5">
                      <span className="bg-background-3 dark:bg-accent flex size-5 shrink-0 items-center justify-center rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width={10} height={7} viewBox="0 0 10 7" fill="none" className="shrink-0">
                          <path d="M9.125 1.02734L3.875 6.27711L1.25 3.65234" className="stroke-secondary" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <p className="text-secondary dark:text-accent">{item.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.6} offset={70} start="top 88%">
              <div>
                <figure className="mx-auto w-full max-w-[350px] lg:max-w-[485px]">
                  <Image src={mainFeature} className="h-full w-full object-cover dark:hidden" alt="Features" />
                  <Image src={mainFeatureDark} className="hidden h-full w-full object-cover dark:block" alt="Features" />
                </figure>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.7} offset={70} start="top 88%">
              <div className="bg-white dark:bg-background-6 w-full max-w-[500px] space-y-6 rounded-[20px] p-8 lg:max-w-[300px] xl:max-w-[360px] xl:p-[42px]">
                <h3 className="xl:text-heading-4 text-heading-5">Enterprise Security</h3>
                <ul>
                  {data.slice(5).map((item) => (
                    <li key={item.id} className="flex items-center gap-2 py-1.5 xl:py-2.5">
                      <span className="bg-background-3 dark:bg-accent flex size-5 shrink-0 items-center justify-center rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width={10} height={7} viewBox="0 0 10 7" fill="none" className="shrink-0">
                          <path d="M9.125 1.02734L3.875 6.27711L1.25 3.65234" className="stroke-secondary" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <p className="text-secondary dark:text-accent">{item.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

CyberCapabilities.displayName = 'CyberCapabilities';
export default CyberCapabilities;
