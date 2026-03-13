import RevealAnimation from '../animation/RevealAnimation';

interface CommunityFeature {
  icon: string;
  title: string;
  description: string;
}

const communityFeatures: CommunityFeature[] = [
  {
    icon: 'ns-shape-9',
    title: 'Client-Centricity',
    description: 'We measure our success by the success of our clients. Every product, every interaction, every outcome is built with their goals at heart',
  },
  {
    icon: 'ns-shape-3',
    title: 'Innovation with Purpose',
    description: 'We don\'t just innovate for the sake of change we build smart, scalable solutions that solve real problems and create lasting value',
  },
  {
    icon: 'ns-shape-12',
    title: 'Integrity Always',
    description: 'Trust is earned through transparency and accountability. We uphold the highest ethical standards in every action and decision',
  },
  {
    icon: 'ns-shape-12',
    title: 'Speed & Agility',
    description: 'In a fast-changing world, we move with urgency and precision delivering outcomes quickly while adapting to evolving needs',
  },
  {
    icon: 'ns-shape-12',
    title: 'People-Powered Culture',
    description: 'Our people are our greatest strength. We foster an inclusive, collaborative environment where every voice is heard and every idea can make an impact',
  },
  {
    icon: 'ns-shape-12',
    title: 'Global Mindset',
    description: 'We build with a global vision and local insight delivering adaptable platforms that scale across regions and meet diverse market needs',
  },
];

const Community = () => {
  return (
    <section className="bg-background-3 dark:bg-background-5 md:py-[100px] py-[50px]">
      <div className="main-container">
        <div className="text-center space-y-3 mb-[70px]">
          <RevealAnimation delay={0.1}>
            <h4 className="text-secondary">Empowering insurers worldwide with trusted, scalable and innovative tech.</h4>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>Our Core Values</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p>At Iorta TechNXT, our values are the foundation of how we work, innovate, and deliver impact. They guide every decision we make, every solution we build, and every relationship we nurture. Rooted in integrity, collaboration, and customer-centricity, our values empower us to stay curious, embrace change, and continuously strive for excellence. They're not just principles we live them every day to drive meaningful outcomes for our clients, our people, and the industries we serve.</p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 md:gap-8 gap-y-8">
          {communityFeatures.map((feature, index) => (
            <RevealAnimation key={feature.title} delay={0.3 + index * 0.1}>
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="space-y-6 text-center bg-background-1 rounded-[20px] sm:p-11 p-7 dark:bg-background-6">
                  <div className="mx-auto">
                    <span className={`${feature.icon} text-[52px] text-secondary dark:text-accent`}> </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
