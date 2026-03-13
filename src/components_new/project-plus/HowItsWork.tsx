import newArrow from '@public/images/icons/new-arrow.svg';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';
const HowItsWork = () => {
  return (
    <section className="py-20 md:py-28 lg:py-34 xl:py-39">
      <div className="main-container">
        <div className="mb-10 text-center md:mb-11 lg:mx-auto lg:max-w-[730px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-gray-light-v2 mb-4">How It Works</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-3">Streamline Project Management with Project Pulse</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p>Project Pulse simplifies project planning, task management, and team collaboration through a centralized platform that provides real-time visibility into project progress and performance.</p>
          </RevealAnimation>
        </div>
        <div className="relative flex flex-col items-center justify-center gap-8 max-lg:flex-wrap sm:flex-row">
          <RevealAnimation delay={0.4} direction="left" offset={80}>
            <div className="bg-ns-green flex w-full max-w-[408px] flex-col justify-between rounded-[20px] p-11 max-sm:space-y-8 sm:min-h-[350px]">
              <div className="text-center">
                <span className="ns-shape-3 text-secondary text-[52px]"> </span>
              </div>
              <div className="space-y-1 text-center max-md:space-y-0.5">
                <h3 className="text-heading-6 md:text-heading-5">Project Planning & Task Management</h3>
                <p className="text-tagline-1 text-secondary/60">
                  Create structured project plans, assign tasks, and manage timelines to ensure projects stay organized and on schedule.
                </p>
              </div>
            </div>
          </RevealAnimation>

          

          <RevealAnimation delay={0.7} direction="left" offset={70} duration={0.5}>
            <div className="bg-background-3 flex w-full max-w-[408px] flex-col justify-between rounded-[20px] p-11 max-sm:space-y-8 sm:min-h-[350px]">
              <div className="text-center">
                <span className="ns-shape-2 text-secondary text-[52px]"> </span>
              </div>
              <div className="space-y-1 text-center max-md:space-y-0.5">
                <h3 className="text-heading-6 md:text-heading-5">Team Collaboration</h3>
                <p className="text-tagline-1 text-secondary/60">
                  Enable seamless collaboration between teams through shared workflows, communication tools, and centralized project updates.
                </p>
              </div>
            </div>
          </RevealAnimation>


          <RevealAnimation delay={1} direction="left" offset={80} duration={0.7}>
            <div className="bg-ns-green flex w-full max-w-[408px] flex-col justify-between rounded-[20px] p-11 max-sm:space-y-8 sm:min-h-[350px]">
              <div className="text-center">
                <span className="ns-shape-8 text-secondary text-[52px]"> </span>
              </div>
              <div className="space-y-1 text-center max-md:space-y-0.5">
                <h3 className="text-heading-6 md:text-heading-5">Progress Tracking & Insights</h3>
                <p className="text-tagline-1 text-secondary/60">
                  Monitor project milestones, track performance through dashboards, and generate reports for better decision-making.
                </p>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

HowItsWork.displayName = 'HowItsWork';
export default HowItsWork;
