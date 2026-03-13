import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';

interface CtaInputFormProps {
  btnClass?: string;
  ctaBtnText?: string;
  inputFieldClass?: string;
}

const CtaInputForm = ({ btnClass, ctaBtnText = 'Get Started', inputFieldClass }: CtaInputFormProps) => {
  return (
    <RevealAnimation delay={0.4}>
      <form
        action="#"
        method="post"
        className="flex flex-col items-center justify-center gap-3 md:flex-row"
        aria-label="cta-form">
        
        <button
          type="submit"
          className={cn(
            'btn btn-md btn-primary hover:btn-secondary dark:hover:btn-accent h-12 w-[85%] md:w-auto',
            btnClass,
          )}
          aria-label="cta-button">
          <span>{ctaBtnText}</span>
        </button>
      </form>
    </RevealAnimation>
  );
};
CtaInputForm.displayName = 'CtaInputForm';

export default CtaInputForm;
