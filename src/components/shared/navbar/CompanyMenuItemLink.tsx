import Link from 'next/link';
import HoverBgTransform from '../hover-bg-transform';

interface CompanyMenuItemLinkProps {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  showDivider: boolean;
  setMenuDropdownId: (id: string | null) => void;
}

const CompanyMenuItemLink = ({
  href,
  title,
  description,
  icon,
  showDivider,
  setMenuDropdownId,
}: CompanyMenuItemLinkProps) => (
  <>
    <li className="group/item">
      <Link
        href={href}
        onClick={() => setMenuDropdownId(null)}
        className="relative flex items-center gap-3 rounded-2xl p-3 transition-all duration-300">
        <HoverBgTransform className="group-hover/item:opacity-100" />
        <div className="dark:bg-background-6 shadow-14 border-stroke-1 dark:border-background-7 relative z-10 flex size-11 items-center justify-center rounded-[10px] border bg-white p-3">
          {icon}
        </div>
        <div className="relative z-10 flex flex-col justify-center">
          <div className="flex items-center justify-between gap-2">
            <p className="text-tagline-1 text-secondary dark:text-accent font-normal">{title}</p>
            {/* hover arrow icon  */}
            <div className="-translate-x-2 opacity-0 transition-all delay-200 duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 24 24" fill="none">
                <path d="M8 5H10V7H8V5Z" className="fill-primary-500" />
                <path d="M11 8H13V10H11V8Z" className="fill-primary-500" />
                <path d="M14 11H16V13H14V11Z" className="fill-primary-500" />
                <path d="M11 14H13V16H11V14Z" className="fill-primary-500" />
                <path d="M8 17H10V19H8V17Z" className="fill-primary-500" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </li>
    {showDivider && (
      <li>
        <div className="bg-stroke-4 dark:bg-background-7 mx-auto h-px w-[calc(100%-16px)]" />
      </li>
    )}
  </>
);
CompanyMenuItemLink.displayName = 'CompanyMenuItemLink';
export default CompanyMenuItemLink;
