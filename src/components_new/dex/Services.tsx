import feature1 from '@public/images/ns-img-237.png';
import feature2 from '@public/images/ns-img-238.png';
import feature3 from '@public/images/ns-img-239.png';
import featureDark1 from '@public/images/ns-img-dark-158.png';
import featureDark2 from '@public/images/ns-img-dark-159.png';
import featureDark3 from '@public/images/ns-img-dark-160.png';
import Image, { StaticImageData } from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

interface Feature {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  imageDark: StaticImageData;
}

const featuresData: Feature[] = [
  {
    id: '1',
    title: 'Real-Time Decision Intelligence',
    description: 'DEX analyzes live operational data and provides intelligent decision nudges, helping teams respond quickly to business events and operational changes.',
    image: feature1,
    imageDark: featureDark1,
  },
  {
    id: '2',
    title: 'Predictive Insights & AI Analytics',
    description: 'AI models identify patterns, forecast outcomes, and uncover hidden insights across enterprise data to support proactive and data-driven decision-making.',
    image: feature2,
    imageDark: featureDark2,
  },
  {
    id: '3',
    title: 'Operational Monitoring & Smart Alerts',
    description: 'Monitor key performance indicators and receive automated alerts when critical events, risks, or anomalies require immediate attention.',
    image: feature3,
    imageDark: featureDark3,
  },
];

const Features = () => {
  return (
    <section className="bg-background-1 dark:bg-background-5 py-[50px] lg:py-[100px]">
      <div className="main-container">
        <div className="mb-10 space-y-5 text-center md:mb-14">
          <RevealAnimation delay={0.1}>
            <span className="badge bg-[#E9F3FC]">AI Capabilities</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>Advanced AI Features for <br className="hidden md:block" /> Intelligent Decision-Making</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[578px]">
                DEX combines real-time analytics, predictive intelligence, and automated alerts to help organizations monitor operations, detect patterns, and make faster, data-driven decisions.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-12 items-start gap-y-8 md:gap-8 lg:gap-10 xl:gap-14">
          {featuresData.map((feature, index) => (
            <RevealAnimation key={feature.id} delay={0.4 + index * 0.1}>
              <div className="col-span-12 md:col-span-4">
                <div className="space-y-6 md:space-y-8 xl:space-y-11">
                  <figure className="mx-auto w-full md:mx-0 md:max-w-[393px]">
                    <Image className="size-full object-cover dark:hidden" src={feature.image} alt="features" />
                    <Image
                      className="hidden size-full object-cover dark:block"
                      src={feature.imageDark}
                      alt="features"
                    />
                  </figure>
                  <div className="space-y-2 text-left">
                    <h3 className="xl:text-heading-5 text-heading-6">{feature.title}</h3>
                    <p className="lg:text-tagline-1 text-tagline-2 mx-auto max-w-[340px] md:mx-0 md:max-w-full">
                      {feature.description}
                    </p>
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

export default Features;
