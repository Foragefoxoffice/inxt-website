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

export const solutionsData = {
  expertise: [
    { href: '/core-mondernization', title: 'Core Moderations', description: 'Advanced moderation experts', Icon: FeatureIcon },
  ],
  industry: [
    { href: '/insurance', title: 'Insurance', description: 'Tailored insurance solutions', Icon: IntegrationIcon },
    { href: '/bancassurance', title: 'Bancassurance', description: 'Banking and insurance synergy', Icon: ProcessICon },
    { href: '/insurance-brokers-agencies', title: 'Insurance Brokers & Agencies', description: 'Support for agencies', Icon: PressIcon },
    { href: '/fintech-insurtech-platforms', title: 'Fintech & Insurtech Platforms', description: 'Next-gen fintech tech', Icon: AnalyticsIcon },
    { href: '/travel-ecommerce-platforms', title: 'Travel & E-commerce Platforms', description: 'Solutions for travel & e-com', Icon: SecurityIcon },
    { href: '/healthcare-hospitals', title: 'Healthcare & Hospitals', description: 'Medical industry solutions', Icon: WhitePaperIcon },
  ],
  services: [
    { href: '/ui-ux-design', title: 'UI/UX Design', description: 'User-centric designs', Icon: BrandKitIcon },
    { href: '/ai-ml-solution', title: 'AI & ML Solution', description: 'Artificial intelligence power', Icon: DownloadIcon },
    { href: '/data-analysis', title: 'Data analysis', description: 'Data-driven insights', Icon: UseCaseIcon },
    { href: '/agile-devops', title: 'Agile DevOPS', description: 'Streamlined development', Icon: CaseStudyICon },
    { href: '/api-microservices', title: 'API & Microservices', description: 'Robust backend architecture', Icon: TestimonialIcon },
    { href: '/oracle-coe', title: 'Oracle COE', description: 'Oracle excellence center', Icon: AboutIcon },
    { href: '/app-dev-support', title: 'App dev & Support', description: 'Full cycle support', Icon: TeamIcon },
    { href: '/digital-consulting', title: 'Digital Consulting', description: 'Expert digital advice', Icon: FeatureIcon },
    { href: '/talent-services', title: 'Talent Services', description: 'Resource management', Icon: IntegrationIcon },
    { href: '/cyber-security', title: 'Cyber security', description: 'Secure your assets', Icon: ProcessICon },
    { href: '/quality-analysis', title: 'Quality Analysis', description: 'Standard quality checks', Icon: PressIcon },
  ]
};

const SolutionsMenu = ({
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
          'fixed top-full left-1/2 z-40 h-3 w-full -translate-x-1/2 bg-transparent lg:w-[1000px]',
          menuDropdownId === 'solutions-mega-menu' ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="solutions-mega-menu"
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        className={cn(
          'dark:bg-background-6 border-stroke-1 fixed top-full left-1/2 z-50 mt-2 hidden w-full -translate-x-1/2 rounded-[20px] border bg-white p-6 transition-all duration-300 lg:w-[900px] xl:block dark:border-white/10 max-h-[85vh] overflow-y-auto overscroll-contain custom-scrollbar touch-pan-y',
          menuDropdownId === 'solutions-mega-menu'
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        <div className="space-y-10">
          <div>
            <MenuCategoryHeader title="Expertise" />
            <div className="grid grid-cols-3 gap-x-4 gap-y-1 mt-2">
              {solutionsData.expertise.map((item) => (
                <PlatformMenuItemLink key={item.href} {...item} setMenuDropdownId={setMenuDropdownId} />
              ))}
            </div>
          </div>

          <div>
            <MenuCategoryHeader title="Industry" />
            <div className="grid grid-cols-3 gap-x-4 gap-y-1 mt-2">
              {solutionsData.industry.map((item) => (
                <PlatformMenuItemLink key={item.href} {...item} setMenuDropdownId={setMenuDropdownId} />
              ))}
            </div>
          </div>

          <div>
            <MenuCategoryHeader title="Services" />
            <div className="grid grid-cols-3 gap-x-4 gap-y-1 mt-2">
              {solutionsData.services.map((item) => (
                <PlatformMenuItemLink key={item.href} {...item} setMenuDropdownId={setMenuDropdownId} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SolutionsMenu.displayName = 'SolutionsMenu';
export default SolutionsMenu;
