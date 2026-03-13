import userActivityChart from '@public/images/ns-img-120.png';
import aboutBg from '@public/images/ns-img-14.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import Progress from './Progress1';

const Feature = () => {
  return (
    <section className="bg-background-2 dark:bg-background-5 py-16 md:py-20 lg:py-[100px] xl:py-[200px]">
      <div className="main-container">
        <div className="mb-10 space-y-5 text-center md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-cyan">Business Impact Example</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2>
                Real Financial Impact from 
                <span className="text-primary-500"> Core Modernization</span>
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p>
                Modernizing legacy insurance systems can deliver measurable financial and operational benefits. A typical mid-size insurer can significantly improve efficiency, reduce costs, and unlock new revenue opportunities through modernization.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div>
          <div className="mx-auto grid max-w-[800px] grid-cols-12 gap-y-8 xl:mx-0 xl:max-w-full xl:gap-8">
            <RevealAnimation delay={0.5}>
              <div className="col-span-12 xl:col-span-6 grid place-items-center">
                <div className="bg-secondary dark:bg-background-8 rounded-[20px] p-6 sm:p-8 md:p-[42px]">
                  <div className="mb-[53px] flex items-center justify-between">
                    <p className="text-lg leading-[27px] font-semibold text-white">User activity</p>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width={6} height={30} viewBox="0 0 6 30" fill="none">
                        <path
                          d="M3 6C1.34315 6 1.24614e-06 4.65685 1.31174e-06 3C1.37734e-06 1.34315 1.34315 -2.24746e-07 3 -1.44784e-07C4.65685 -6.48221e-08 6 1.34315 6 3C6 4.65685 4.65685 6 3 6Z"
                          fill="#CED1C7"
                        />
                        <path
                          d="M3 18C1.34315 18 7.71061e-07 16.6569 8.36656e-07 15C9.02252e-07 13.3431 1.34315 12 3 12C4.65685 12 6 13.3431 6 15C6 16.6569 4.65685 18 3 18Z"
                          fill="#CED1C7"
                        />
                        <path
                          d="M3 30C1.34315 30 2.95976e-07 28.6569 3.61572e-07 27C4.27167e-07 25.3431 1.34315 24 3 24C4.65685 24 6 25.3431 6 27C6 28.6569 4.65685 30 3 30Z"
                          fill="#CED1C7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <figure className="w-full max-w-[545px]">
                      <Image src={userActivityChart} alt="user-activity" className="w-full" />
                    </figure>
                  </div>
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <div className="col-span-12 xl:col-span-6">
                <div className="dark:bg-background-8 space-y-3 rounded-[20px] bg-white p-6 sm:p-8 md:p-[42px]">
                  <Progress />
                </div>
              </div>
            </RevealAnimation>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
