import RevealAnimation from '../animation/RevealAnimation';
import Marquee from 'react-fast-marquee';

const servicesData = [
  {
    id: 1,
    title: 'Design',
    description: 'User experience and product design services focused on creating intuitive and scalable digital solutions.',
    icon: 'ns-shape-1',
  },
  {
    id: 2,
    title: 'AI & ML Solution',
    description: 'AI and machine learning services designed to automate processes, generate insights, and enable intelligent decision-making.',
    icon: 'ns-shape-2',
  },
  {
    id: 3,
    title: 'Data Analysis',
    description: 'Advanced data analytics services that help organizations transform raw data into meaningful insights for better decision-making.',
    icon: 'ns-shape-3',
  },
  {
    id: 4,
    title: 'Agile DevOps',
    description: 'DevOps and agile development practices that improve development speed, collaboration, and continuous delivery.',
    icon: 'ns-shape-4',
  },
  {
    id: 5,
    title: 'API & Microservices',
    description: 'Design and implementation of scalable APIs and microservices architecture for seamless system integration.',
    icon: 'ns-shape-5',
  },
  {
    id: 6,
    title: 'Oracle COE',
    description: 'Oracle Center of Excellence services focused on optimizing Oracle applications, databases, and enterprise systems.',
    icon: 'ns-shape-6',
  },
  {
    id: 7,
    title: 'App Dev & Support',
    description: 'End-to-end application development, maintenance, and support services for scalable enterprise applications.',
    icon: 'ns-shape-7',
  },
  {
    id: 8,
    title: 'Digital Consulting',
    description: 'Strategic consulting services that help organizations plan and implement digital transformation initiatives.',
    icon: 'ns-shape-8',
  },
  {
    id: 9,
    title: 'Talent Services',
    description: 'Technology talent and staffing services that provide skilled professionals to support business and technology projects.',
    icon: 'ns-shape-3',
  },
  {
    id: 10,
    title: 'Cyber Security',
    description: 'Security solutions designed to protect digital systems, data, and applications from modern cyber threats.',
    icon: 'ns-shape-2',
  },
  {
    id: 11,
    title: 'Quality Analysis',
    description: 'Software testing and quality assurance services that ensure reliable, secure, and high-performance applications.',
    icon: 'ns-shape-1',
  },
];

const Expertise = () => {
  return (
    <section className="bg-background-3 dark:bg-background-8 space-y-[70px] pt-[100px] pb-[100px] lg:pb-[200px]">
      <div className="main-container">
        <div className="mx-auto max-w-[804px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge !badge-cyan">Our Services</span>
          </RevealAnimation>

          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>Technology Services for Digital Transformation</h2>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p>
                Comprehensive technology services designed to help organizations modernize systems, build intelligent solutions, and accelerate digital innovation through advanced engineering, AI, and cloud technologies.
              </p>
            </RevealAnimation>
          </div>
        </div>
      </div>

      <RevealAnimation delay={0.4}>
        <div className="relative">
          <div className="from-background-3 dark:from-background-7 absolute top-0 left-0 z-40 h-full w-[10%] bg-gradient-to-r to-transparent" />
          <div className="from-background-3 dark:from-background-7 absolute top-0 right-0 z-40 h-full w-[10%] bg-gradient-to-l to-transparent" />

          <Marquee autoFill pauseOnHover speed={30}>
            <div className="flex items-center gap-8">
              {servicesData.map((service) => (
                <div
                  key={service.id}
                  className="bg-background-1/90 dark:bg-background-5 dark:hover:bg-background-8 hover:shadow-1 w-full max-w-[358px] min-w-[358px] shrink-0 rounded-[20px] p-8 transition-colors duration-300 ease-linear first:ml-8 hover:bg-white">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <div className="flex size-12 items-center justify-center rounded-full bg-linear-[156deg,#83E7EE_2.92%,#C6F56F_91%]">
                        <span className={`${service.icon} text-secondary text-2xl`}></span>
                      </div>
                      <h3 className="text-tagline-1 text-secondary dark:text-accent font-medium">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-secondary/80 dark:text-accent/80 text-tagline-2 font-normal line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Expertise;
