import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import StackCardItem from '../ui/stack-card/StackCardItem';
import StackCardWrapper from '../ui/stack-card/StackCardWrapper';

interface ServiceCard {
  id: number;
  icon: string;
  iconType: 'shape' | 'svg';
  title: string;
  description: string;
}

const servicesData: ServiceCard[] = [
  {
    id: 1,
    icon: 'ns-shape-25',
    iconType: 'shape',
    title: 'Sales Management',
    description: 'Comprehensive tools to manage and optimize the insurance sales lifecycle from lead capture and qualification to quote generation, proposal management, and conversion. Enables real-time tracking, performance analytics, and sales pipeline visibility to accelerate deal closures.',
  },
  {
    id: 2,
    icon: 'ns-shape-19',
    iconType: 'shape',
    title: 'Policy Administration',
    description: 'A robust, end-to-end platform for managing insurance policies throughout their lifecycle. Supports new policy issuance, endorsements, renewals, cancellations, and reinstatements with high levels of automation and compliance. Tailored workflows for both direct insurers and brokers.',
  },
  {
    id: 3,
    icon: 'ns-shape-17',
    iconType: 'shape',
    title: 'Operations Management',
    description: 'Efficient orchestration of core insurance operations, including underwriting, claims processing, customer service, and agent management. Ensures process consistency, reduces manual intervention, and increases productivity across departments.',
  },
  {
    id: 4,
    icon: 'ns-shape-34',
    iconType: 'shape',
    title: 'Revenue Management',
    description: 'Streamlines premium billing, payment collection, commission management, and reconciliation. Provides clear visibility into revenue streams, minimizes leakages, and improves cash flow predictability. Ideal for insurers and brokers handling complex financial transactions.',
  },
  {
    id: 5,
    icon: 'ns-shape-2',
    iconType: 'shape',
    title: 'Direct-to-Customer Solutions',
    description: 'Empowers carriers and brokers to deliver self-service portals and digital onboarding experiences. Enables quote-to-bind journeys, document uploads, and customer communications through web and mobile platforms—eliminating dependency on intermediaries.',
  },
  {
    id: 6,
    icon: 'ns-shape-3',
    iconType: 'shape',
    title: 'Digital Journeys',
    description: 'Designs seamless, omni-channel customer experiences that span acquisition, onboarding, servicing, and retention. Leverages AI to personalize interactions, improve satisfaction, and increase conversion rates across touchpoints.',
  },
  {
    id: 7,
    icon: 'ns-shape-12',
    iconType: 'shape',
    title: 'Gen-AI Core Suite',
    description: 'A modular, AI-driven solution that streamlines policy administration, claims, and customer engagement. Built for general, life, and health insurance, it enhances efficiency, speeds up product launches, and delivers personalized experiences at scale.',
  },
  {
    id: 8,
    icon: 'ns-shape-31',
    iconType: 'shape',
    title: 'Insurance LLM',
    description: 'An AI model trained specifically on insurance data and workflows to automate tasks such as policy explanations, claims triage, fraud detection, customer support, and compliance. Enhances decision-making with contextual understanding and natural language capabilities.',
  },
  {
    id: 9,
    icon: 'ns-shape-28',
    iconType: 'shape',
    title: 'Gen-AI Frontend Fabric',
    description: 'A modular, AI-powered platform for general, life, and health insurance that streamlines policy admin, claims, and engagement—boosting efficiency, accelerating product launches, and delivering personalized experiences at scale.',
  },
];

const Services = () => {
  return (
    <div>
      <RevealAnimation delay={0.1}>
      <section className="pt-14 pb-[220px] sm:pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
        <div className="main-container">
          <div className="flex flex-col items-start justify-center max-md:gap-y-18 md:flex-row md:justify-between md:gap-x-[120px]">
            {/* Left: Intro */}
            <div className="lg:sticky lg:top-28">
              
              <div className="mb-14 space-y-2 md:max-w-[595px]">
                <RevealAnimation delay={0.2}>
                  <h2>What We Do</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="max-w-[512px]">
                    We bring together deep insurance domain expertise and next-generation technology to transform key insurance workflows including:
                  </p>
                </RevealAnimation>
              </div>
            </div>
            {/* Right: Features List */}
            <StackCardWrapper topOffset="13vh" gap="20px" initDelay={100} className="w-full max-w-xl">
              {servicesData.map((service) => (
                <StackCardItem key={service.id}>
                  <div
                    key={service.id}
                    className="border-stroke-8/20 dark:border-stroke-5 bg-background-2 dark:bg-background-8 relative z-0 min-h-[170px] w-full space-y-4 overflow-hidden rounded-[20px] border p-8">
                    <div className="inline-block">
                      {service.iconType === 'shape' && (
                        <span className={`${service.icon} text-secondary dark:text-accent text-[52px]`}> </span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-heading-5">{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </StackCardItem>
              ))}
            </StackCardWrapper>
          </div>
        </div>
      </section>
    </RevealAnimation>
    </div>
  );
};

export default Services;
