// crypto marketing company menu
'use client';
import {
  AboutIcon,
  CareerIcon,
  CaseStudyICon,
  CustomersIcon,
  ManifestoIcon,
  ServiceIcon,
  TeamIcon,
  TestimonialIcon,
  UseCaseIcon,
  WhyChooseUsIcon,
} from '@/icons/menu-icon';
import { cn } from '@/utils/cn';
import nsImg420 from '@public/images/ns-img-420.jpg';
import Image from 'next/image';
import CompanyMenuItemLink from './CompanyMenuItemLink';
import MenuCategoryHeader from './MenuCategoryHeader';

interface MenuItemProps {
  id: string;
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const companyMenuItems: MenuItemProps[] = [
  {
    id: 'about-us',
    href: '/about',
    title: 'About US',
    description: 'Learn more about our vision and mission',
    icon: <AboutIcon className="size-5" />,
  },
  {
    id: 'our-team',
    href: '/team',
    title: 'Management Team',
    description: 'Meet our professional leadership team',
    icon: <TeamIcon className="size-5" />,
  },
];

const CompanyMenu = ({
  menuDropdownId,
  setMenuDropdownId,
}: {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}) => {
  return (
    <div>
      <div
        className={cn(
          'ease absolute top-full left-1/2 z-40 h-3 w-full min-w-[400px] -translate-x-1/2 bg-transparent transition-opacity duration-300',
          menuDropdownId === 'company-mega-menu' ? 'pointer-events-auto! opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="company-mega-menu"
        className={cn(
          'dark:bg-background-6 border-stroke-1 ease absolute top-full left-1/2 z-50 mt-2 hidden w-full -translate-x-1/2 items-start gap-y-6 rounded-[20px] border bg-white p-4 transition-all duration-300 md:w-[400px] md:gap-x-6 xl:flex dark:border-white/10',
          // when hover show the menu
          menuDropdownId === 'company-mega-menu'
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        {/* Single column menu items */}
        <div className="flex-1">
          <MenuCategoryHeader title="Company" />
          <ul id="product-dropdown-menu" className="space-y-1">
            {companyMenuItems.map((item, index) => (
              <CompanyMenuItemLink
                setMenuDropdownId={setMenuDropdownId}
                key={item.id}
                href={item.href}
                title={item.title}
                description={item.description}
                icon={item.icon}
                showDivider={index !== companyMenuItems.length - 1}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

CompanyMenu.displayName = 'CompanyMenu';
export default CompanyMenu;
