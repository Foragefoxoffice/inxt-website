'use client';
import { useMobileMenuContext } from '@/context/MobileMenuContext';
import { cn } from '@/utils/cn';
import mainLogo from '@public/technext-img/h-logo-mob.png';
import Image from 'next/image';
import Link from 'next/link';
import MenuCloseButton from './MenuCloseButton';
import MobileMenuItem from './MobileMenuItem';

// Import all desktop mega menu data
import { productsData } from '../navbar/ProductsMenu';
import { solutionsData } from '../navbar/SolutionsMenu';
import { resourcesMenuItems, secondaryResources } from '../navbar/ResourcesMenu';
import { companyMenuItems } from '../navbar/CompanyMenu';

const unifiedMenuData = [
  {
    id: 'products',
    title: 'Products',
    sections: [
      { title: 'Gen-AI Front end Fabrics', items: productsData.frontendFabrics },
      { title: 'AI products', items: productsData.aiProducts },
      { title: 'Platform', items: productsData.platforms },
      { title: 'iNXT Universe', items: productsData.universe }
    ]
  },
  {
    id: 'solutions',
    title: 'Solutions',
    sections: [
      { title: 'Expertise', items: solutionsData.expertise },
      { title: 'Industry', items: solutionsData.industry },
      { title: 'Services', items: solutionsData.services }
    ]
  },
  {
    id: 'resources',
    title: 'Resources',
    sections: [
      { title: 'Discover', items: resourcesMenuItems },
      { title: 'Connect', items: secondaryResources }
    ]
  },
  {
    id: 'company',
    title: 'Company',
    sections: [
      { title: 'Company', items: companyMenuItems }
    ]
  }
];

const MobileMenu = () => {
  const { isOpen } = useMobileMenuContext();
  return (
    <aside
      className={cn(
        'dark:bg-background-8 scroll-bar fixed top-0 right-0 z-[9999] h-screen w-full translate-x-full bg-white transition-all duration-300 sm:w-1/2 sm:rounded-l-3xl xl:hidden',
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0',
      )}>
      <div className="space-y-4 p-5 sm:p-8 lg:p-9">
        <div className="flex items-center justify-between">
          <Link href="/">
            <span className="sr-only">Home</span>
            <figure className="max-w-[44px]">
              <Image src={mainLogo} alt="NextSaaS" className="block w-full" priority />
            </figure>
          </Link>
          {/* close btn  */}
          <MenuCloseButton />
        </div>

        {/* menu items list  */}
        <div className="scroll-bar mt-6 h-[85vh] w-full overflow-x-hidden pb-10">
          <p className="text-secondary dark:text-accent text-tagline-1 before:bg-stroke-4 dark:before:bg-stroke-6 relative mb-4 block font-normal before:absolute before:top-1/2 before:-right-16 before:h-px before:w-full before:-translate-y-1/2 before:content-['']">
            Menu
          </p>
          <ul className="space-y-3">
            {unifiedMenuData.map((menu) => (
              <MobileMenuItem key={menu.id} id={menu.id} title={menu.title} hasSubmenu={true}>
                <div className="flex flex-col gap-6 ml-2 py-4">
                  {menu.sections.map((section, idx) => (
                    <div key={idx}>
                      <h4 className="text-secondary font-semibold text-sm mb-3 dark:text-accent">{section.title}</h4>
                      <ul className="flex flex-col gap-4">
                        {section.items.map((item: any) => (
                          <li key={item.href}>
                            <Link href={item.href} className="flex gap-4 items-center group">
                              {(item.Icon || item.icon) && (
                                <div className="border-stroke-1 dark:border-background-7 dark:bg-background-6 shadow-14 group-hover:bg-primary-500 relative flex size-10 shrink-0 items-center justify-center rounded-lg border bg-white p-2 transition-all duration-300">
                                  {item.Icon ? (
                                    <item.Icon className="dark:group-hover:stroke-accent group-hover:stroke-white transition-all duration-300 ease-in-out" />
                                  ) : (
                                    <div className="dark:group-hover:stroke-accent group-hover:stroke-white transition-all duration-300 ease-in-out [&>svg]:!transition-colors [&>svg]:!duration-300 group-hover:[&>svg]:!stroke-white group-hover:dark:[&>svg]:!stroke-accent [&_*]:!transition-colors [&_*]:!duration-300 group-hover:[&_*]:!stroke-white group-hover:dark:[&_*]:!stroke-accent">
                                      {item.icon}
                                    </div>
                                  )}
                                </div>
                              )}
                              <div className="flex flex-col">
                                <span className="text-tagline-1 text-secondary dark:text-accent font-medium group-hover:text-primary-50 transition-colors">{item.title}</span>
                                {item.description && <span className="text-[12px] leading-tight text-secondary/60 dark:text-accent/60 mt-0.5">{item.description}</span>}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </MobileMenuItem>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

MobileMenu.displayName = 'MobileMenu';
export default MobileMenu;
