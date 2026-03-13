import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import RevealAnimation from '../animation/RevealAnimation';
import Link from 'next/link';

interface HeroProps {
  badgeText: string;
  content: string;
  title: string;
}

const Hero = ({ badgeText, content, title }: HeroProps) => {
  return (
    <section className="pt-[100px] pb-16 lg:pt-[140px] lg:pb-20 xl:pt-[170px] xl:pb-28">
      <div className="main-container">
        <RevealAnimation delay={0.05}>
          <nav className="flex items-center gap-2 text-tagline-2 text-secondary/60 mb-8 sm:mb-12">
            <Link href="/" className="hover:text-primary-500 transition-colors duration-300">Home</Link>
            <span className="text-[10px]">●</span>
            <Link href="/whitepaper" className="hover:text-primary-500 transition-colors duration-300">Whitepaper</Link>
            <span className="text-[10px]">●</span>
            <span className="text-secondary font-medium truncate max-w-[200px] md:max-w-none">
              {title}
            </span>
          </nav>
        </RevealAnimation>
        <div className="space-y-5">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green-v2">{badgeText}</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <div className="whitepaper-details-content space-y-4">
              <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{content}</ReactMarkdown>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
