'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';
import { subscribeNewsletter } from '@/utils/api';
import { useState } from 'react';

interface CtaInputFormProps {
  btnClass?: string;
  ctaBtnText?: string;
  inputFieldClass?: string;
}

const CtaInputForm = ({ btnClass, ctaBtnText = 'Get Started', inputFieldClass }: CtaInputFormProps) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await subscribeNewsletter('en', { email });
      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error: any) {
      setStatus('error');
      setMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <RevealAnimation delay={0.4}>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-start gap-3 md:flex-row"
          aria-label="cta-form">
          <div className="relative w-[85%] md:w-auto">
            <input
              type="email"
              name="email"
              id="userEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={status === 'loading'}
              className={cn(
                'placeholder:text-secondary/50 border-stroke-1 dark:border-stroke-7 dark:placeholder:text-accent/60 text-secondary dark:text-accent focus-visible:outline-stroke-7 focus:border-primary-600 dark:focus:border-primary-400 h-12 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none focus-visible:outline-1 md:w-[430px] lg:w-[340px]',
                inputFieldClass,
              )}
              aria-label="cta-input"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className={cn(
              'btn btn-md btn-primary hover:btn-secondary dark:hover:btn-accent h-12 w-[85%] md:w-auto',
              btnClass,
              status === 'loading' && 'opacity-50 cursor-not-allowed',
            )}
            aria-label="cta-button">
            <span>{status === 'loading' ? 'Subscribing...' : ctaBtnText}</span>
          </button>
        </form>
        {message && (
          <p
            className={cn(
              'mt-2 text-center text-sm md:text-left',
              status === 'success' ? 'text-green-500' : 'text-red-500',
            )}>
            {message}
          </p>
        )}
      </div>
    </RevealAnimation>
  );
};
CtaInputForm.displayName = 'CtaInputForm';

export default CtaInputForm;
