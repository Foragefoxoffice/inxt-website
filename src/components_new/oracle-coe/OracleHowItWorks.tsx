import { cn } from '@/utils/cn';
import RevealAnimation from '@/components/animation/RevealAnimation';
import StepCard, { StepCardProps } from '@/components_new/shared/StepCard';
import StepDirection from '@/components_new/shared/StepDirection';

const OracleHowItWorks = () => {
  const stepCardData: StepCardProps[] = [
    {
      id: 'step-1',
      stepNumber: 1,
      title: 'Consultation & Strategy',
      description: 'We assess your database and application requirements to develop a tailored Oracle strategy aligned with your business goals.',
    },
    {
      id: 'step-2',
      stepNumber: 2,
      title: 'Solution Design & Development',
      description: 'Our experts design scalable Oracle architectures and develop custom applications using Oracle APEX and modern frameworks.',
    },
    {
      id: 'step-3',
      stepNumber: 3,
      title: 'Implementation & Integration',
      description: 'Oracle solutions are deployed securely across cloud or on-premise environments and integrated with existing enterprise systems.',
    },
    {
      id: 'step-4',
      stepNumber: 4,
      title: 'Ongoing Support & Optimization',
      description: 'We provide continuous monitoring, maintenance, and optimization to ensure long-term performance and reliability.',
    },
  ];

  return (
    <section className="pt-10 pb-12 md:pb-16 lg:pt-16 lg:pb-12 xl:pt-20 xl:pb-20" aria-labelledby="how-it-works-heading">
      <div className="main-container">
        <div className="space-y-10 md:space-y-12 lg:space-y-14 xl:space-y-19">
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge bg-[#D3E7F8]">How It Works</span>
            </RevealAnimation>
            <RevealAnimation delay={0.1}>
              <h2 id="how-it-works-heading" itemProp="name">End-to-End Oracle Solutions</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="text-[#323A44] max-w-[700px] mx-auto" itemProp="description">
                Our Oracle implementation framework ensures seamless integration, scalability, and performance optimization across enterprise systems.
              </p>
            </RevealAnimation>
          </div>
          <div className="relative flex items-center justify-center gap-x-3 gap-y-6 max-xl:flex-wrap" aria-label="Step-by-step process">
            {stepCardData.map((step, index) => (
              <RevealAnimation key={step.id} delay={0.1 + index * 0.2} direction="left">
                <StepCard key={step.id} {...step} className={`${cn(index % 2 === 0 ? 'bg-background-3' : 'bg-[#D3E7F8]')} lg:min-h-[430px]`} />
              </RevealAnimation>
            ))}
            <RevealAnimation delay={0.6} direction="left">
              <StepDirection className="left-[23.5%] md:block" />
            </RevealAnimation>
            <RevealAnimation delay={0.4} direction="left">
              <StepDirection className="left-1/2 -translate-x-1/2 lg:block" />
            </RevealAnimation>
            <RevealAnimation delay={0.8} direction="left">
              <StepDirection className="right-[23.5%] md:block" />
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

OracleHowItWorks.displayName = 'OracleHowItWorks';
export default OracleHowItWorks;
