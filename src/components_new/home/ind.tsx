import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const servicesData = [
  {
    slug: 'Project Pulse',
    icon: 'ns-shape-3',
    title: 'Project Pulse',
    description: 'Project planning and tracking solution designed to manage tasks, monitor progress, and improve team collaboration.'
  },
  {
    slug: 'TimeTravel',
    icon: 'ns-shape-2',
    title: 'TimeTravel',
    description: 'Employee travel planning and expense management solution for handling travel requests, approvals, bookings, and expense tracking.',
  },
  {
    slug: 'ClaimIT',
    icon: 'ns-shape-8',
    title: 'ClaimIT',
    description: 'Digital claims management solution designed to streamline claim submission, processing, verification, and settlement workflows.',
  },
  {
    slug: 'GrowthTrack',
    icon: 'ns-shape-8',
    title: 'ClaimIT',
    description: 'Employee performance tracking and development solution designed to monitor productivity, goals, and performance insights.',
  },
  {
    slug: 'DollorTree',
    icon: 'ns-shape-8',
    title: 'DollorTree',
    description: 'Comprehensive incentive and rewards management solution designed to track performance-based incentives and employee rewards.',
  },
  {
    slug: 'Support Desk',
    icon: 'ns-shape-1',
    title: 'Support Desk',
    description: 'Advanced helpdesk and support ticket management solution designed to manage customer queries, service requests, and issue resolution.',
  },
  {
    slug: 'Moneyroot',
    icon: 'ns-shape-6',
    title: 'Moneyroot',
    description: 'Complete financial management and accounting solution designed to track transactions, manage finances, and monitor financial performance.',
  },
  {
    slug: 'MySalesDiary',
    icon: 'ns-shape-4',
    title: 'MySalesDiary',
    description: 'Customer relationship management solution designed for sales teams to track leads, manage interactions, and monitor sales performance.',
  },
  {
    slug: 'HRMS',
    icon: 'ns-shape-2',
    title: 'HRMS',
    description: 'Human resource management system designed to manage employee records, attendance, timesheets, payroll, and leave management.',
  },
];

const Ind = () => {
  return (
    <section className="dark:bg-background-6 bg-white pt-[50px] pb-[100px] md:pt-[85px] xl:pt-[100px] xl:pb-[200px]">
      <div className="main-container">
        <div className="space-y-[40px] md:space-y-[50px] lg:space-y-[60px] xl:space-y-[70px]">
          {/* service section heading  */}
          <div className="mx-auto max-w-[810px] space-y-5 text-center lg:w-full">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-3 md:mb-4 lg:mb-5 capitalize">Our Products</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>Digital Solutions for Business Operations</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mx-auto max-w-[582px] sm:w-full">
                  A suite of digital solutions designed to streamline business processes, improve productivity, and support efficient management across projects, finance, sales, customer service, and workforce operations.
                </p>
              </RevealAnimation>
            </div>
          </div>
          {/* service cards  */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {servicesData.map((service, idx) => (
              <RevealAnimation key={service.slug} delay={0.4 + idx * 0.1}>
                <article>
                  <div className="bg-background-2 dark:bg-background-5 flex w-full max-w-[403px] flex-col items-center gap-6 rounded-[20px] px-6 py-8 transition-transform duration-500 ease-in-out hover:translate-y-[-10px]">
                    {/* logo  */}
                    <span className={`${service.icon} text-secondary dark:text-accent text-[54px]`}> </span>
                    {/* heading  */}
                    <div className="space-y-2 text-center">
                      <h3 className="text-heading-5">{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                    {/* btn  */}
                    <div>
                      <LinkButton
                        href={`/our-services/${service.slug}`}
                        className="btn btn-md btn-white-v2 hover:btn-secondary dark:btn-transparent dark:hover:btn-accent"
                        rel="noopener noreferrer">
                        View Services
                      </LinkButton>
                    </div>
                  </div>
                </article>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ind;
