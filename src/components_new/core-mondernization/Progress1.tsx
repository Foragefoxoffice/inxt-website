'use client';

import { useProgressAnimation } from '@/hooks/useProgressAnimation';

const data = [
  {
    id: 1,
    title: 'Revenue Growth',
    text: 'Increase in revenue through improved customer retention and faster product innovation.',
    value: 55.6,
    value2:'+$1.2M'
  },
  {
    id: 2,
    title: 'Maintenance Cost Reduction',
    text: 'Lower infrastructure and system maintenance costs after modernization.',
    value: 16.7,
    value2:'$360K'
  },
  {
    id: 3,
    title: 'Operational Savings',
    text:'Reduced operational expenses through automation and improved claims processing.',
    value: 27.8,
    value2:'$600K'
  },
  {
    id: 4,
    title: 'Total Annual Business Value',
    text:'Combined financial impact from improved efficiency and revenue growth.',
    value: 100,
    value2:'$2.16M'
  },
];

// Individual progress item component
const ProgressItem = ({ item, index }: { item: (typeof data)[0]; index: number }) => {
  const { value, ref } = useProgressAnimation(item.value, {
    duration: 2,
    delay: index * 0.2, // Stagger animation
    triggerOnScroll: true,
  });

  return (
    <div ref={ref} className="space-y-1">
      <p className="font-medium text-secondary dark:text-accent">{item.title}</p>
      <p className="text-[16px]">{item.text}</p>
      <div className="flex items-center gap-3">
        <div className="h-2.5 bg-secondary dark:bg-accent rounded-full flex-1 relative overflow-hidden">
          <div
            className={`absolute top-0 bottom-0 left-0 h-full overflow-hidden rounded-full transition-all duration-300 ease-out ${index === data.length - 1 ? 'bg-ns-green' : 'bg-[#1C6DB0]'}`}
            style={{ width: `${value}%` }}
          />
        </div>
        <div>
          <p className="text-tagline-3 w-6 text-secondary/60 dark:text-accent/60">{item.value2}</p>
        </div>
      </div>
    </div>
  );
};

const Progress = () => {
  return (
    <>
      {data.map((item, index) => (
        <ProgressItem key={item.id} item={item} index={index} />
      ))}
    </>
  );
};

export default Progress;
