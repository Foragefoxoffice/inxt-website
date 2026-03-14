import { BlogIcon, FaqIcon, GlossaryIcon, SuccessStoriesIcon, SupportIcon, TutorialIcon } from '@/icons/menu-icon';
import { cn } from '@/utils/cn';
import { ReactNode } from 'react';
import CompanyMenuItemLink from './CompanyMenuItemLink';
import MenuCategoryHeader from './MenuCategoryHeader';

type ResourcesMenuItem = {
  href: string;
  title: string;
  description: string;
  icon: ReactNode;
};

export const resourcesMenuItems: ResourcesMenuItem[] = [
  {
    href: '/news',
    title: 'News and Events',
    description: 'Latest news, events and updates',
    icon: <SuccessStoriesIcon />,
  },
  {
    href: '/newsletter',
    title: 'News letter',
    description: 'Our regular updates delivered to you',
    icon: <BlogIcon />,
  },
];

export const secondaryResources: ResourcesMenuItem[] = [
  {
    href: '/contact-us',
    title: 'Contact us',
    description: 'Get in touch with our team',
    icon: <SupportIcon />,
  },
];

const ResourcesMenu = ({
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
          'absolute top-full left-1/2 z-40 h-3 w-full min-w-[360px] -translate-x-1/2 bg-transparent',
          menuDropdownId === 'resources-dropdown-menu'
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="resources-dropdown-menu"
        className={cn(
          'dark:bg-background-6 shadow-14 border-stroke-1 absolute top-full left-1/2 z-50 mt-2 w-[360px] -translate-x-1/2 rounded-3xl border bg-white p-4 transition-all duration-300 dark:border-white/10',
          // when hover show the menu
          menuDropdownId === 'resources-dropdown-menu'
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        <div className="space-y-6">
          <div>
            <MenuCategoryHeader title="Discover" />
            <ul className="space-y-1">
              {resourcesMenuItems.map((item, index) => (
                <CompanyMenuItemLink
                  key={item.href}
                  {...item}
                  showDivider={index < resourcesMenuItems.length - 1}
                  setMenuDropdownId={setMenuDropdownId}
                />
              ))}
            </ul>
          </div>
          <div>
            <MenuCategoryHeader title="Connect" />
            <ul className="space-y-1">
              {secondaryResources.map((item, index) => (
                <CompanyMenuItemLink
                  key={item.href}
                  {...item}
                  showDivider={index < secondaryResources.length - 1}
                  setMenuDropdownId={setMenuDropdownId}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

ResourcesMenu.displayName = 'ResourcesMenu';
export default ResourcesMenu;
