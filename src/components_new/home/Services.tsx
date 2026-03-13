import { IService } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import newArrowWhite from '@public/images/icons/new-arrow-white.svg';
import service03 from '@public/images/ns-img-318.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import BeforeAfterServiceImg from './BeforeAfterServiceImg';

const Services = () => {
  const services = getMarkDownData<IService & { [key: string]: unknown }>('src/data/services').filter(
    (service) => service.showHomePage === true,
  );

  return (
    <section className="mt-10 overflow-hidden py-14 md:py-16 lg:pt-24 xl:pt-28 lg:pb-10 xl:pb-16">
      <div className="main-container">
        <div className="mb-11 text-center lg:mx-auto lg:mb-9 lg:max-w-[730px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-gray-light-v2 mb-5">Our Product Solutions</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-1 md:mb-3">Intelligent Solutions for Modern Operations</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="lg:mx-auto lg:max-w-[530px]">
              A suite of digital solutions designed to streamline operations, enhance efficiency, and support intelligent decision-making across sales, claims, customer engagement, analytics, and financial processes.
            </p>
          </RevealAnimation>
        </div>
        {/* services cards */}
        <div className="grid grid-cols-12 gap-y-6 md:gap-6">
          {/* service card 01 */}
          <RevealAnimation delay={0.1}>
            <div className="group/card-img col-span-12">
              <div className="bg-background-12 border-background-12 grid h-full grid-cols-12 gap-y-6 overflow-hidden rounded-4xl border px-5 pt-8 md:gap-6 md:px-8">
                <aside className="col-span-12 flex flex-col justify-between space-y-5 pt-14 pb-9 md:col-span-5 lg:col-span-3">
                  <blockquote className="space-y-2">
                    <h3 className="text-heading-5 md:text-heading-4 line-clamp-2">SalesVerse</h3>
                    <p className="text-tagline-1 text-secondary/60 line-clamp-4">Sales and distribution management solution designed to streamline insurance sales operations. It helps manage agents, partners, and sales performance while improving visibility across distribution channels.</p>
                  </blockquote>
                  <Link
                    href={`services/${services[6].slug || ''}`}
                    className="bg-secondary group bg-secondary relative flex h-10 w-18 items-center justify-center space-y-5 overflow-hidden rounded-[40px] p-4 ring-8 ring-white transition-all duration-500 ease-in-out md:h-13 md:w-22 md:p-5">
                    <figure className="relative size-6 items-center justify-center overflow-hidden">
                      <Image
                        src={newArrowWhite}
                        alt="new-arrow"
                        className="absolute inset-0 size-full -translate-x-6 object-cover transition-transform duration-400 ease-in-out group-hover:translate-x-1"
                      />
                      <Image
                        src={newArrowWhite}
                        alt="new-arrow"
                        className="size-full object-cover transition-transform duration-400 ease-in-out group-hover:translate-x-6"
                      />
                    </figure>
                  </Link>
                </aside>
                <figure className="col-span-12 mx-auto w-full max-w-[905px] overflow-hidden rounded-t-lg transition-transform duration-500 ease-in-out group-hover/card-img:scale-105 md:col-span-7 md:rounded-t-[20px] lg:col-span-9">
                  <Image
                    src={services[6]?.image}
                    width={905}
                    height={400}
                    alt="services"
                    className="h-full w-full object-cover"
                  />
                </figure>
              </div>
            </div>
          </RevealAnimation>
          {/* service card 02 */}
          <RevealAnimation delay={0.2} direction="left">
            <div className="group/card-img col-span-12 lg:col-span-6">
              <div className="bg-background-12 border-background-12 grid h-full grid-cols-12 gap-y-16 rounded-3xl border p-5 md:gap-6 md:p-8">
                <aside className="col-span-12 flex flex-col justify-between space-y-5 pt-14 md:col-span-6">
                  <blockquote className="space-y-2">
                    <h3 className="text-heading-5 md:text-heading-4 line-clamp-2">BrokerVerse</h3>
                    <p className="text-tagline-1 text-secondary/60 line-clamp-4">Broker management solution that supports insurance intermediaries and partner networks. It simplifies broker onboarding, policy distribution, and performance tracking.</p>
                  </blockquote>
                  <Link
                    href={`/services/${services[0].slug}`}
                    className="hover:bg-primary-500 group bg-secondary relative flex h-10 w-18 items-center justify-center space-y-5 overflow-hidden rounded-[40px] p-4 ring-8 ring-white transition-all duration-500 ease-in-out md:h-13 md:w-22 md:p-5">
                    <figure className="relative size-6 items-center justify-center overflow-hidden">
                      <Image
                        src={newArrowWhite}
                        alt="new-arrow"
                        className="absolute inset-0 size-full -translate-x-6 object-cover transition-transform duration-400 ease-in-out group-hover:translate-x-1"
                      />
                      <Image
                        src={newArrowWhite}
                        alt="new-arrow"
                        className="size-full object-cover transition-transform duration-400 ease-in-out group-hover:translate-x-6"
                      />
                    </figure>
                  </Link>
                </aside>
                <figure className="col-span-12 mx-auto h-[360px] w-full max-w-[905px] overflow-hidden rounded-lg transition-transform duration-500 ease-in-out group-hover/card-img:scale-105 md:col-span-6 md:h-full md:rounded-[20px]">
                  <Image
                    src={services[0]?.image}
                    width={292}
                    height={412}
                    alt="services"
                    className="h-full w-full object-cover"
                  />
                </figure>
              </div>
            </div>
          </RevealAnimation>
          {/* service card 03 */}
          <RevealAnimation delay={0.2} direction="left">
            <div className="group/card-img col-span-12 lg:col-span-6">
              <div className="bg-background-12 border-background-12 grid h-full grid-cols-12 gap-y-16 rounded-3xl border p-5 md:gap-6 md:p-8">
                <aside className="col-span-12 flex flex-col justify-between space-y-5 pt-14 md:col-span-6">
                  <blockquote className="space-y-2">
                    <h3 className="text-heading-5 md:text-heading-4 line-clamp-2">CustomerVerse</h3>
                    <p className="text-tagline-1 text-secondary/60 line-clamp-4">Customer engagement solution designed to manage customer interactions and digital service experiences. It helps organizations deliver seamless communication and personalized services.</p>
                  </blockquote>
                  <Link
                    href={`/services/${services[0].slug}`}
                    className="hover:bg-primary-500 group bg-secondary relative flex h-10 w-18 items-center justify-center space-y-5 overflow-hidden rounded-[40px] p-4 ring-8 ring-white transition-all duration-500 ease-in-out md:h-13 md:w-22 md:p-5">
                    <figure className="relative size-6 items-center justify-center overflow-hidden">
                      <Image
                        src={newArrowWhite}
                        alt="new-arrow"
                        className="absolute inset-0 size-full -translate-x-6 object-cover transition-transform duration-400 ease-in-out group-hover:translate-x-1"
                      />
                      <Image
                        src={newArrowWhite}
                        alt="new-arrow"
                        className="size-full object-cover transition-transform duration-400 ease-in-out group-hover:translate-x-6"
                      />
                    </figure>
                  </Link>
                </aside>
                <figure className="col-span-12 mx-auto h-[360px] w-full max-w-[905px] overflow-hidden rounded-lg transition-transform duration-500 ease-in-out group-hover/card-img:scale-105 md:col-span-6 md:h-full md:rounded-[20px]">
                  <Image
                    src={services[0]?.image}
                    width={292}
                    height={412}
                    alt="services"
                    className="h-full w-full object-cover"
                  />
                </figure>
              </div>
            </div>
          </RevealAnimation>
          {/* service card 04 */}
          <RevealAnimation delay={0.1} direction="left">
            <div className="group/card-img col-span-12 lg:col-span-6">
              <div className="bg-background-12 border-background-12 grid h-full grid-cols-12 gap-y-16 rounded-3xl border p-5 md:gap-6 md:p-8">
                <aside className="col-span-12 flex flex-col justify-between space-y-5 pt-14 md:col-span-6">
                  <blockquote className="space-y-2">
                    <h3 className="text-heading-5 md:text-heading-4 line-clamp-2">MerchantVerse</h3>
                    <p className="text-tagline-1 text-secondary/60 line-clamp-4">Merchant engagement platform designed to support merchants and business partners. It streamlines merchant onboarding, order management, and performance tracking.</p>
                  </blockquote>
                  <Link
                    href={`/services/${services[7].slug}`}
                    className="hover:bg-primary-500 group bg-secondary relative flex h-10 w-18 items-center justify-center space-y-5 overflow-hidden rounded-[40px] p-4 ring-8 ring-white transition-all duration-500 ease-in-out md:h-13 md:w-22 md:p-5">
                    <figure className="relative size-6 items-center justify-center overflow-hidden">
                      <Image
                        src={newArrowWhite}
                        alt="new-arrow"
                        className="absolute inset-0 size-full -translate-x-6 object-cover transition-transform duration-400 ease-in-out group-hover:translate-x-1"
                      />
                      <Image
                        src={newArrowWhite}
                        alt="new-arrow"
                        className="size-full object-cover transition-transform duration-400 ease-in-out group-hover:translate-x-6"
                      />
                    </figure>
                  </Link>
                </aside>
                <figure className="col-span-12 mx-auto h-[360px] w-full max-w-[905px] overflow-hidden rounded-lg transition-transform duration-500 ease-in-out group-hover/card-img:scale-105 md:col-span-6 md:h-full md:rounded-[20px]">
                  <Image src={service03} alt="services" className="h-full w-full object-cover" />
                </figure>
              </div>
            </div>
          </RevealAnimation>
          {/* service card 05 */}
          <RevealAnimation delay={0.2} direction="right">
            <div className="group/card-img col-span-12 lg:col-span-6">
              <div className="bg-background-12 border-background-12 grid h-full grid-cols-12 gap-y-16 rounded-3xl border p-5 md:gap-6 md:p-8">
                <aside className="col-span-12 flex flex-col justify-between space-y-5 pt-14 md:col-span-6">
                  <blockquote className="space-y-2">
                    <h3 className="text-heading-5 md:text-heading-4 line-clamp-2">ClaimVerse</h3>
                    <p className="text-tagline-1 text-secondary/60 line-clamp-4">Claims management solution designed to automate claim processing and tracking. It improves efficiency, reduces manual effort, and enhances claim settlement workflows.</p>
                  </blockquote>
                  <Link
                    href={`/services/${services[4].slug}`}
                    className="hover:bg-primary-500 group bg-secondary relative flex h-10 w-18 items-center justify-center space-y-5 overflow-hidden rounded-[40px] p-4 ring-8 ring-white transition-all duration-500 ease-in-out md:h-13 md:w-22 md:p-5">
                    <figure className="relative size-6 items-center justify-center overflow-hidden">
                      <Image
                        src={newArrowWhite}
                        alt="new-arrow"
                        className="absolute inset-0 size-full -translate-x-6 object-cover transition-transform duration-400 ease-in-out group-hover:translate-x-1"
                      />
                      <Image
                        src={newArrowWhite}
                        alt="new-arrow"
                        className="size-full object-cover transition-transform duration-400 ease-in-out group-hover:translate-x-6"
                      />
                    </figure>
                  </Link>
                </aside>
                <figure className="col-span-12 mx-auto h-[360px] w-full max-w-[905px] overflow-hidden rounded-lg transition-transform duration-500 ease-in-out group-hover/card-img:scale-105 md:col-span-6 md:h-full md:rounded-[20px]">
                  <Image
                    src={services[4]?.image}
                    width={292}
                    height={412}
                    alt="services"
                    className="h-full w-full object-cover"
                  />
                </figure>
              </div>
            </div>
          </RevealAnimation>
          {/* service card 06 */}
          <RevealAnimation delay={0.1} direction="left">
            <div className="group/card-img col-span-12 lg:col-span-6">
              <div className="bg-background-12 border-background-12 grid h-full grid-cols-12 gap-y-16 rounded-3xl border p-5 md:gap-6 md:p-8">
                <aside className="col-span-12 flex flex-col justify-between space-y-5 pt-14 md:col-span-6">
                  <blockquote className="space-y-2">
                    <h3 className="text-heading-5 md:text-heading-4 line-clamp-2">ReportVerse</h3>
                    <p className="text-tagline-1 text-secondary/60 line-clamp-4">Analytics and reporting solution that provides insights into operational and business performance. It helps organizations monitor key metrics and make data-driven decisions.</p>
                  </blockquote>
                  <Link
                    href={`/services/${services[1].slug}`}
                    className="hover:bg-primary-500 group bg-secondary relative flex h-10 w-18 items-center justify-center space-y-5 overflow-hidden rounded-[40px] p-4 ring-8 ring-white transition-all duration-500 ease-in-out md:h-13 md:w-22 md:p-5">
                    <figure className="relative size-6 items-center justify-center overflow-hidden">
                      <Image
                        src={newArrowWhite}
                        alt="new-arrow"
                        className="absolute inset-0 size-full -translate-x-6 object-cover transition-transform duration-400 ease-in-out group-hover:translate-x-1"
                      />
                      <Image
                        src={newArrowWhite}
                        alt="new-arrow"
                        className="size-full object-cover transition-transform duration-400 ease-in-out group-hover:translate-x-6"
                      />
                    </figure>
                  </Link>
                </aside>
                <figure className="col-span-12 mx-auto h-[360px] w-full max-w-[905px] overflow-hidden rounded-lg transition-transform duration-500 ease-in-out group-hover/card-img:scale-105 md:col-span-6 md:h-full md:rounded-[20px]">
                  <Image
                    src={services[1]?.image}
                    width={292}
                    height={412}
                    alt="services"
                    className="h-full w-full object-cover"
                  />
                </figure>
              </div>
            </div>
          </RevealAnimation>
          {/* service card 07 */}
          <RevealAnimation delay={0.2} direction="right">
            <div className="group/card-img col-span-12 lg:col-span-6">
              <div className="bg-background-12 border-background-12 grid h-full grid-cols-12 gap-y-16 rounded-3xl border p-5 md:gap-6 md:p-8">
                <aside className="col-span-12 flex flex-col justify-between space-y-5 pt-14 md:col-span-6">
                  <blockquote className="space-y-2">
                    <h3 className="text-heading-5 md:text-heading-4 line-clamp-2">ReconVerse</h3>
                    <p className="text-tagline-1 text-secondary/60 line-clamp-4">Financial reconciliation solution that simplifies transaction matching and data validation. It helps ensure financial accuracy while reducing reconciliation time and operational complexity.</p>
                  </blockquote>
                  <Link
                    href={`/services/${services[3].slug}`}
                    className="hover:bg-primary-500 group bg-secondary relative flex h-10 w-18 items-center justify-center space-y-5 overflow-hidden rounded-[40px] p-4 ring-8 ring-white transition-all duration-500 ease-in-out md:h-13 md:w-22 md:p-5">
                    <figure className="relative size-6 items-center justify-center overflow-hidden">
                      <Image
                        src={newArrowWhite}
                        alt="new-arrow"
                        className="absolute inset-0 size-full -translate-x-6 object-cover transition-transform duration-400 ease-in-out group-hover:translate-x-1"
                      />
                      <Image
                        src={newArrowWhite}
                        alt="new-arrow"
                        className="size-full object-cover transition-transform duration-400 ease-in-out group-hover:translate-x-6"
                      />
                    </figure>
                  </Link>
                </aside>
                <figure className="col-span-12 mx-auto h-[360px] w-full max-w-[905px] overflow-hidden rounded-lg transition-transform duration-500 ease-in-out group-hover/card-img:scale-105 md:col-span-6 md:h-full md:rounded-[20px]">
                  <Image
                    src={services[3]?.image}
                    width={292}
                    height={412}
                    alt="services"
                    className="h-full w-full object-cover"
                  />
                </figure>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Services.displayName = 'Services';
export default Services;
