'use client';
import { cn } from '@/utils/cn';
import {
  FeatureIcon,
  IntegrationIcon,
  ProcessICon,
  PressIcon,
  AnalyticsIcon,
  SecurityIcon,
  WhitePaperIcon,
  BrandKitIcon,
  DownloadIcon,
  UseCaseIcon,
  CaseStudyICon,
  TestimonialIcon,
  AboutIcon,
  TeamIcon
} from '@/icons/menu-icon';
import PlatformMenuItemLink from './PlatformMenuItemLink';
import MenuCategoryHeader from './MenuCategoryHeader';

export const productsData = {
  frontendFabrics: [
    { href: '/sales-verse', title: 'Sales Verse', description: 'Empower your sales team', Icon: FeatureIcon },
    { href: '/broker-verse', title: 'Broker Verse', description: 'Streamline broker operations', Icon: IntegrationIcon },
    { href: '/customer-verse', title: 'Customer Verse', description: 'Engage your customers', Icon: ProcessICon },
    { href: '/merchant-verse', title: 'Merchant Verse', description: 'Simplify merchant payments', Icon: PressIcon },
    { href: '/claim-verse', title: 'Claim Verse', description: 'Automate claim processing', Icon: AnalyticsIcon },
    { href: '/report-verse', title: 'ReportVerse', description: 'Advanced reporting tools', Icon: SecurityIcon },
    { href: '/recon-verse', title: 'Recon Verse', description: 'Precise reconciliation', Icon: WhitePaperIcon },
  ],
  aiProducts: [
    { href: '/dex', title: 'DEX', description: 'Data exchange platform', Icon: BrandKitIcon },
    { href: '/digital-one', title: 'Digital one', description: 'Unified digital experience', Icon: DownloadIcon },
    { href: '/dashes', title: 'Dashes', description: 'Interactive dash components', Icon: UseCaseIcon },
  ],
  platforms: [
    { href: '/insure-prime', title: 'Insure Prime', description: 'Core insurance engine', Icon: CaseStudyICon },
    { href: '/fin-prime', title: 'FinPrime', description: 'Financial management suite', Icon: TestimonialIcon },
  ],
  universe: [
    { href: '/project-pulse', title: 'Project Pulse', description: 'Project tracking system', Icon: AboutIcon },
    { href: '/time-travel', title: 'Time travel', description: 'Historical data analysis', Icon: TeamIcon },
    { href: '/claim-it', title: 'Claim IT', description: 'End-to-end claim management', Icon: FeatureIcon },
    { href: '/growth-track', title: 'GrowthTrack', description: 'Performance analytics', Icon: IntegrationIcon },
    { href: '/dollor-tree', title: 'DollorTree', description: 'Investment management', Icon: ProcessICon },
    { href: '/support-desk', title: 'Support Desk', description: 'Customer support center', Icon: PressIcon },
    { href: '/money-root', title: 'Moneyroot', description: 'Capital management', Icon: AnalyticsIcon },
    { href: '/my-sales-diary', title: 'MySalesDiary', description: 'Sales CRM tool', Icon: SecurityIcon },
    { href: '/hrms', title: 'HRMS', description: 'Human resource management', Icon: WhitePaperIcon },
  ]
};

const ProductsMenu = ({
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
          'fixed top-full left-1/2 z-40 h-3 w-full -translate-x-1/2 bg-transparent lg:w-[1100px]',
          menuDropdownId === 'products-mega-menu' ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="products-mega-menu"
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        className={cn(
          'dark:bg-background-6 border-stroke-1 fixed top-full left-1/2 z-50 mt-2 hidden w-full -translate-x-1/2 rounded-[20px] border bg-white p-6 transition-all duration-300 lg:w-[900px] xl:block dark:border-white/10 max-h-[85vh] overflow-y-auto overscroll-contain custom-scrollbar touch-pan-y',
          menuDropdownId === 'products-mega-menu'
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        <div className="space-y-10">
          <div>
            <MenuCategoryHeader title="Gen-AI Front end Fabrics" />
            <div className="grid grid-cols-3 gap-x-4 gap-y-1 mt-2">
              {productsData.frontendFabrics.map((item) => (
                <PlatformMenuItemLink key={item.href} {...item} setMenuDropdownId={setMenuDropdownId} />
              ))}
            </div>
          </div>

          <div>
            <MenuCategoryHeader title="AI products" />
            <div className="grid grid-cols-3 gap-x-4 gap-y-1 mt-2">
              {productsData.aiProducts.map((item) => (
                <PlatformMenuItemLink key={item.href} {...item} setMenuDropdownId={setMenuDropdownId} />
              ))}
            </div>
          </div>

          <div>
            <MenuCategoryHeader title="Platform" />
            <div className="grid grid-cols-3 gap-x-4 gap-y-1 mt-2">
              {productsData.platforms.map((item) => (
                <PlatformMenuItemLink key={item.href} {...item} setMenuDropdownId={setMenuDropdownId} />
              ))}
            </div>
          </div>

          <div>
            <MenuCategoryHeader title="iNXT Universe" />
            <div className="grid grid-cols-3 gap-x-4 gap-y-1 mt-2">
              {productsData.universe.map((item) => (
                <PlatformMenuItemLink key={item.href} {...item} setMenuDropdownId={setMenuDropdownId} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductsMenu.displayName = 'ProductsMenu';
export default ProductsMenu;
