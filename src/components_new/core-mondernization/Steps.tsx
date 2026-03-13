'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';
import stepImage554 from '@public/images/ns-img-554.png';
import stepImage555 from '@public/images/ns-img-555.svg';
import stepImage556 from '@public/images/ns-img-556.png';
import stepImage557 from '@public/images/ns-img-557.png';
import stepImage558 from '@public/images/ns-img-558.png';
import stepImage559 from '@public/images/ns-img-559.svg';
import { useLenis } from 'lenis/react';
import { useEffect, useRef, useState } from 'react';
import StepCard, { StepData } from './StepCard1';

const stepsData: StepData[] = [
  {
    id: 'step-1',
    stepNumber: 1,
    title: 'AI-Driven Automation',
    description:
      "Leverage artificial intelligence to automate underwriting, claims processing, and decision-making, improving accuracy and reducing manual effort.",
    mainImage: stepImage554,
    overlayImage: stepImage555,
    overlayImagePosition: 'right',
  },
  {
    id: 'step-2',
    stepNumber: 2,
    title: 'Microservices Architecture',
    description:
      'Adopt a flexible microservices-based architecture that enables scalable applications, faster development cycles, and seamless system integrations.',
    mainImage: stepImage556,
  },
  {
    id: 'step-3',
    stepNumber: 3,
    title: 'Digital Customer Platforms',
    description:
      'Enable modern digital experiences through customer portals, mobile applications, and connected digital services.',
    mainImage: stepImage557,
  },
  {
    id: 'step-4',
    stepNumber: 4,
    title: 'Advanced Analytics & Insights',
    description:
      "Utilize real-time analytics and business intelligence to gain deeper insights, improve decision-making, and drive data-driven strategies.",
    mainImage: stepImage558,
    overlayImage: stepImage559,
    overlayImagePosition: 'center',
  },
];

const Steps = () => {
  const [activeStep, setActiveStep] = useState(1);
  const stepCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lenis = useLenis();

  useEffect(() => {
    const stepCards = stepCardRefs.current.filter((ref): ref is HTMLDivElement => ref !== null);

    if (stepCards.length === 0) {
      return;
    }

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-400px 0px -50% 0px',
      threshold: [0, 0.1, 0.5, 1],
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          const stepNumber = Number.parseInt(entry.target.dataset.step || '1', 10);
          setActiveStep(stepNumber);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    stepCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleStepClick = (stepNumber: number) => {
    const targetCard = document.getElementById(`step-${stepNumber}`);

    if (targetCard) {
      // Check if Lenis is available (for smooth scrolling)
      if (lenis) {
        lenis.scrollTo(`#step-${stepNumber}`, {
          offset: -156, // Account for sticky header offset
          duration: 1.5,
          easing: (t: number) => 1 - Math.pow(1 - t, 3),
        });
      } else {
        // Fallback for when Lenis is not available (mobile devices)
        const targetPosition = targetCard.getBoundingClientRect().top + window.pageYOffset - 156;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
      setActiveStep(stepNumber);
    }
  };

  return (
    <section className="py-[80px] md:py-[120px] lg:py-[156px]">
      <div className="main-container">
        <div className="flex flex-wrap items-start justify-center gap-y-[58px] lg:flex-nowrap lg:gap-x-[58px] lg:gap-y-0">
          {/* heading  */}
          <div className="lg:sticky lg:top-[156px] space-y-[20px] text-center lg:text-left">
            <RevealAnimation delay={0.1}>
              <h2 className="max-w-[629px] font-normal">
                Technology Integration
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="max-w-[550px]">
                Modernized core systems seamlessly integrate with advanced digital technologies to enhance operational efficiency, enable intelligent automation, and support scalable innovation across insurance operations.
              </p>
            </RevealAnimation>
          </div>

          {/* bar  */}
          <RevealAnimation delay={0.1}>
            <div className="bg-ns-ivory sticky top-[156px] hidden h-[564px] w-px lg:block" />
          </RevealAnimation>

          {/* cards  */}
          <RevealAnimation delay={0.2}>
            <div className="space-y-8 lg:space-y-60">
              {stepsData.map((step) => (
                <StepCard
                  key={step.id}
                  step={step}
                  cardRef={(el) => {
                    stepCardRefs.current[step.stepNumber - 1] = el;
                  }}
                />
              ))}
            </div>
          </RevealAnimation>

        
        </div>
      </div>
    </section>
  );
};

export default Steps;
