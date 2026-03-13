/* eslint-disable @typescript-eslint/no-explicit-any */
import RevealAnimation from '@/components/animation/RevealAnimation';
import ServiceCard from './ServiceCard';

export interface ServiceData {
  id: string;
  title: string;
  icon: any;
}

interface ServiceSection {
  title: string;
  description: string;
  services: ServiceData[];
}

const allServicesData: ServiceSection[] = [
  {
    title: 'General Insurance Platform',
    description:
      'Complete platform for managing general insurance operations including policy administration, underwriting, claims management, and customer servicing.',
    services: [
      {
        id: 'g1',
        title: 'Policy issuance and renewals',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6">
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18.7 7h-1.2l-1.1 4H7.6L6.5 7H5.3L3.5 11.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2m10 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0ZM5 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0Z" />
          </svg>
        ),
      },
      {
        id: 'g2',
        title: 'Claims processing and settlement',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        ),
      },
      {
        id: 'g3',
        title: 'Broker and agent integration',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        ),
      },
      {
        id: 'g4',
        title: 'Operational analytics',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </svg>
        ),
      },
    ],
  },
  {
    title: 'Group Life Insurance Platform',
    description:
      'Specialized platform designed to manage group life insurance policies and services.',
    services: [
      {
        id: 'l1',
        title: 'Group policy administration',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        ),
      },
      {
        id: 'l2',
        title: 'Employer and employee management',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        ),
      },
      {
        id: 'l3',
        title: 'Benefits administration',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
      },
      {
        id: 'l4',
        title: 'Group claims processing',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6">
            <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3" />
          </svg>
        ),
      },
    ],
  },
  {
    title: 'Individual Life Insurance Platform',
    description:
      'Platform tailored for managing individual life insurance policies.',
    services: [
      {
        id: 'h1',
        title: 'Policy lifecycle management',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        ),
      },
      {
        id: 'h2',
        title: 'Underwriting support',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        ),
      },
      {
        id: 'h3',
        title: 'Premium collection and policy servicing',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6">
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <line x1="7" y1="8" x2="17" y2="8" />
            <line x1="7" y1="12" x2="17" y2="12" />
            <line x1="7" y1="16" x2="13" y2="16" />
          </svg>
        ),
      },
      {
        id: 'h4',
        title: 'Customer policy portals',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
        ),
      },
    ],
  },
  {
    title: 'Health Insurance Platform',
    description:
      'Comprehensive platform designed to manage health insurance products and claims.',
    services: [
      {
        id: 'c1',
        title: 'Health policy administration',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
      },
      {
        id: 'c2',
        title: 'Claims adjudication and processing',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        ),
      },
      {
        id: 'c3',
        title: 'Provider network integration',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        ),
      },
      {
        id: 'c4',
        title: 'Health plan analytics',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        ),
      },
    ],
  },
];

const Services = () => {
  return (
    <section className="pt-14 pb-30 xl:pt-28 xl:pb-43.5" aria-labelledby="services-heading">
      <div className="main-container">
        <div className="space-y-20 lg:space-y-32">
          {allServicesData.map((section, sectionIdx) => (
            <div key={section.title} className="space-y-12 lg:space-y-19">
              <div className="flex flex-col items-center justify-between gap-y-5 lg:flex-row">
                <div className="space-y-3">
                  <RevealAnimation delay={0.1}>
                    <h2 className="text-center lg:max-w-[550px] lg:text-left">{section.title}</h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.2}>
                    <p className="mx-auto max-w-[500px] text-center lg:mx-0 lg:text-left">
                      {section.description}
                    </p>
                  </RevealAnimation>
                </div>
              </div>
              <div className="grid w-full grid-cols-12 items-center justify-center gap-3">
                {section.services.map((service, index) => (
                  <RevealAnimation delay={0.3 + index * 0.1} key={service.id}>
                    <ServiceCard service={service} index={index} />
                  </RevealAnimation>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Services.displayName = 'Services';
export default Services;
