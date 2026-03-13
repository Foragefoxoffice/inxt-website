import { cn } from '@/utils/cn';

interface MenuCategoryHeaderProps {
  title: string;
  className?: string;
}

const MenuCategoryHeader = ({ title, className }: MenuCategoryHeaderProps) => (
  <h4 className={cn("text-[13px] font-semibold uppercase tracking-wider text-secondary/40 mb-4 px-3", className)}>
    {title}
  </h4>
);

export default MenuCategoryHeader;
