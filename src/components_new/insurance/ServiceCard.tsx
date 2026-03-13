import { cn } from '@/utils/cn';
import { ServiceData } from './Services';

interface ServiceCardProps {
  service: ServiceData;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <div
      className={cn(
        'border-stroke-1 flex w-full items-center gap-[22px] rounded-[20px] border px-6 py-8 h-full',
      )}>
      <span className="bg-ns-green flex size-14 shrink-0 items-center justify-center rounded-full p-2.5" aria-hidden="true">
        {service.icon}
      </span>
      <h3
        className="text-heading-6 flex-1 text-center leading-[150%] font-normal text-[#12161F] md:text-left"
        itemProp="name">
        {service.title}
      </h3>
    </div>
  );
};

ServiceCard.displayName = 'ServiceCard';
export default ServiceCard;
