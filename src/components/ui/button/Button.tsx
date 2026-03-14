import { cn } from '@/utils/cn';
import Link from 'next/link';

interface ButtonProps {
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  btnClass?: string;
  btnStyle?: React.CSSProperties;
  children: React.ReactNode;
  ariaLabel?: string;
}

const ButtonContent = ({ children }: { children: React.ReactNode }) => (
  <>
    <span className="inline-block transition-transform duration-300 ease-in-out capitalize">
      {children}
    </span>
    <div className="relative size-6 overflow-hidden shrink-0">
      {/* one  */}
      <span className="btn-v2-icon fill-current absolute inset-0 size-6 -translate-x-6 transition-all duration-300 ease-in-out group-hover/btn-v2:translate-x-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M11 5H13V7H11V5Z" />
          <path d="M5 5H7V7H5V5Z" />
          <path d="M14 8H16V10H14V8Z" />
          <path d="M8 8H10V10H8V8Z" />
          <path d="M17 11H19V13H17V11Z" />
          <path d="M11 11H13V13H11V11Z" />
          <path d="M14 14H16V16H14V14Z" />
          <path d="M8 14H10V16H8V14Z" />
          <path d="M11 17H13V19H11V17Z" />
          <path d="M5 17H7V19H5V17Z" />
        </svg>
      </span>
      {/* two  */}
      <span className="btn-v2-icon fill-current absolute size-6 -translate-x-2 transition-all duration-300 ease-in-out group-hover/btn-v2:translate-x-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M11 5H13V7H11V5Z" />
          <path d="M5 5H7V7H5V5Z" />
          <path d="M14 8H16V10H14V8Z" />
          <path d="M8 8H10V10H8V8Z" />
          <path d="M17 11H19V13H17V11Z" />
          <path d="M11 11H13V13H11V11Z" />
          <path d="M14 14H16V16H14V14Z" />
          <path d="M8 14H10V16H8V14Z" />
          <path d="M11 17H13V19H11V17Z" />
          <path d="M5 17H7V19H5V17Z" />
        </svg>
      </span>
    </div>
  </>
);

export const LinkButton = ({ className, href = '#', btnClass, btnStyle, children, ariaLabel }: ButtonProps) => {
  return (
    <div
      className={cn(
        'group/btn-v2 mx-auto inline-block w-[85%] rounded-full transition-transform duration-500 ease-in-out md:mx-0 md:w-auto',
        className,
      )}>
      <Link
        href={href}
        aria-label={ariaLabel}
        style={btnStyle}
        className={cn(
          'mx-auto inline-flex h-12 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full text-center font-medium text-nowrap capitalize transition-all duration-500 ease-in-out md:mx-0 md:w-auto',
          btnClass,
        )}>
        <ButtonContent>{children}</ButtonContent>
      </Link>
    </div>
  );
};

export const Button = ({ className, onClick, type = 'button', disabled, btnClass, btnStyle, children, ariaLabel }: ButtonProps) => {
  return (
    <div
      className={cn(
        'group/btn-v2 mx-auto inline-block w-[85%] rounded-full transition-transform duration-500 ease-in-out md:mx-0 md:w-auto',
        className,
      )}>
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        aria-label={ariaLabel}
        style={btnStyle}
        className={cn(
          'mx-auto inline-flex h-12 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full text-center font-medium text-nowrap capitalize transition-all duration-500 ease-in-out md:mx-0 md:w-auto disabled:opacity-50 disabled:cursor-not-allowed',
          btnClass,
        )}>
        <ButtonContent>{children}</ButtonContent>
      </button>
    </div>
  );
};

export default LinkButton;
