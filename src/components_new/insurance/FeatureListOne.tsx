import { CheckIcon } from '@/icons';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

// Feature list data
const featureListData = [
  {
    id: 1,

    text: 'Faster claims settlement and reduced processing times.',
  },
  {
    id: 2,

    text: 'Improved operational efficiency across insurance operations.',
  },
  {
    id: 3,

    text: 'Enhanced digital customer experiences.',
  },
  {
    id: 4,

    text: 'Reduced operational and infrastructure costs.',
  },
  {
    id: 5,

    text: 'Scalable platforms supporting future growth.',
  },
];

const FeatureListOne = () => {
  return (
    <div className="w-full lg:w-2/5">
      <div className="mb-8 space-y-5 text-center max-[426px]:mb-5 max-[426px]:text-left sm:text-left">
        <RevealAnimation delay={0.1}>
          <span className="badge badge-yellow">Business Value</span>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <h2>
            Key Benefits for Insurance Organizations
          </h2>
        </RevealAnimation>
      </div>

      <ul className="mb-14 list-none space-y-4 max-[426px]:mb-10">
        {featureListData.map((feature, index) => (
          <RevealAnimation key={feature.id} delay={0.3 + index * 0.1}>
            <li className="flex items-center gap-2">
              <span className="bg-secondary dark:bg-accent size-[18px] rounded-full">
                <CheckIcon />
              </span>
              <span className="text-secondary dark:text-accent">{feature.text}</span>
            </li>
          </RevealAnimation>
        ))}
      </ul>

    </div>
  );
};

FeatureListOne.displayName = 'FeatureListOne';
export default FeatureListOne;
