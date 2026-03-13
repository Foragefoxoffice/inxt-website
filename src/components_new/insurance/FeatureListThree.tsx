import { CheckIcon } from '@/icons';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

// Feature list data
const featureListData = [
  {
    id: 1,

    text: 'Digital policy administration.',
  },
  {
    id: 2,

    text: 'Claims automation.',
  },
  {
    id: 3,

    text: 'Agent network management.',
  },
  {
    id: 4,

    text: 'Customer self-service portals.',
  },
];

const FeatureListOne = () => {
  return (
    <div className="w-full lg:w-2/5">
      <div className="mb-8 space-y-5 text-center max-[426px]:mb-5 max-[426px]:text-left sm:text-left">
        <RevealAnimation delay={0.1}>
          <span className="badge badge-yellow">ndustry Applications</span>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <h2>
            Insurance Use Cases
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
