import { FooterOneData } from '@/interface';
import { MobileMenuItem } from '../mobile-menu/MobileMenu';

export interface MobileMenuGroup {
  id: string;
  title: string;
  submenu: MobileMenuItem[];
}

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'products',
    title: 'Products',
    submenu: [
      { id: 'sales-verse', label: 'Sales Verse', href: '/sales-verse' },
      { id: 'broker-verse', label: 'Broker Verse', href: '/broker-verse' },
      { id: 'customer-verse', label: 'Customer Verse', href: '/customer-verse' },
      { id: 'merchant-verse', label: 'Merchant Verse', href: '/merchant-verse' },
      { id: 'claim-verse', label: 'Claim Verse', href: '/claim-verse' },
      { id: 'report-verse', label: 'ReportVerse', href: '/report-verse' },
      { id: 'recon-verse', label: 'Recon Verse', href: '/recon-verse' },
      { id: 'dex', label: 'DEX', href: '/dex' },
      { id: 'digital-one', label: 'Digital one', href: '/digital-one' },
      { id: 'dashes', label: 'Dashes', href: '/dashes' },
      { id: 'insure-prime', label: 'Insure Prime', href: '/insure-prime' },
      { id: 'fin-prime', label: 'FinPrime', href: '/fin-prime' },
      { id: 'project-pulse', label: 'Project Pulse', href: '/project-pulse' },
      { id: 'time-travel', label: 'Time travel', href: '/time-travel' },
      { id: 'claim-it', label: 'Claim IT', href: '/claim-it' },
      { id: 'growth-track', label: 'GrowthTrack', href: '/growth-track' },
      { id: 'dollor-tree', label: 'DollorTree', href: '/dollor-tree' },
      { id: 'support-desk', label: 'Support Desk', href: '/support-desk' },
      { id: 'money-root', label: 'Moneyroot', href: '/money-root' },
      { id: 'my-sales-diary', label: 'MySalesDiary', href: '/my-sales-diary' },
      { id: 'hrms', label: 'HRMS', href: '/hrms' },
    ],
  },
  {
    id: 'solutions',
    title: 'Solutions',
    submenu: [
      { id: 'core-moderations', label: 'Core Moderations', href: '/core-moderations' },
      { id: 'insurance', label: 'Insurance', href: '/insurance' },
      { id: 'bancassurance', label: 'Bancassurance', href: '/bancassurance' },
      { id: 'insurance-brokers-agencies', label: 'Insurance Brokers & Agencies', href: '/insurance-brokers-agencies' },
      { id: 'fintech-insurtech-platforms', label: 'Fintech & Insurtech Platforms', href: '/fintech-insurtech-platforms' },
      { id: 'travel-ecommerce-platforms', label: 'Travel & E-commerce Platforms', href: '/travel-ecommerce-platforms' },
      { id: 'healthcare-hospitals', label: 'Healthcare & Hospitals', href: '/healthcare-hospitals' },
      { id: 'ui-ux-design', label: 'UI/UX Design', href: '/ui-ux-design' },
      { id: 'ai-ml-solution', label: 'AI & ML Solution', href: '/ai-ml-solution' },
      { id: 'data-analysis', label: 'Data analysis', href: '/data-analysis' },
      { id: 'agile-devops', label: 'Agile DevOPS', href: '/agile-devops' },
      { id: 'api-microservices', label: 'API & Microservices', href: '/api-microservices' },
      { id: 'oracle-coe', label: 'Oracle COE', href: '/oracle-coe' },
      { id: 'app-dev-support', label: 'App dev & Support', href: '/app-dev-support' },
      { id: 'digital-consulting', label: 'Digital Consulting', href: '/digital-consulting' },
      { id: 'talent-services', label: 'Talent Services', href: '/talent-services' },
      { id: 'cyber-security', label: 'Cyber security', href: '/cyber-security' },
      { id: 'quality-analysis', label: 'Quality Analysis', href: '/quality-analysis' },
    ],
  },
  {
    id: 'resources-news',
    title: 'Resources',
    submenu: [
      { id: 'news', label: 'News and Events', href: '/news' },
      { id: 'newsletter', label: 'News letter', href: '/newsletter' },
      { id: 'contact-us', label: 'Contact us', href: '/contact-us' },
    ],
  },
  {
    id: 'company',
    title: 'Company',
    submenu: [
      { id: 'about-us', label: 'About Us', href: '/about' },
      { id: 'services', label: 'Services', href: '/services' },
      { id: 'team', label: 'Management Team', href: '/team' },
      { id: 'management', label: 'Management', href: '/management' },
      { id: 'career', label: 'Career', href: '/career' },
      { id: 'our-manifesto', label: 'Our Manifesto', href: '/our-manifesto' },
      { id: 'why-choose-us', label: 'Why Choose Us', href: '/why-choose-us' },
      { id: 'customers', label: 'Customers', href: '/customer' },
      { id: 'use-cases', label: 'Use Cases', href: '/use-case' },
      { id: 'case-studies', label: 'Case Studies', href: '/case-study' },
      { id: 'testimonials', label: 'Testimonials', href: '/testimonial' },
    ],
  },

  {
    id: 'platform',
    title: 'Platform',
    submenu: [
      { id: 'features', label: 'Features', href: '/features' },
      { id: 'integrations', label: 'Integrations', href: '/integration' },
      { id: 'process', label: 'Process', href: '/process' },
      { id: 'analytics', label: 'Analytics', href: '/analytics' },
      { id: 'security', label: 'Security', href: '/security' },
      { id: 'whitepaper', label: 'Whitepaper', href: '/whitepaper' },
      { id: 'build-overview', label: 'Build overview', href: '/signup' },
      { id: 'brandkit', label: 'Brandkit', href: '/brandkit' },
      { id: 'download', label: 'Download', href: '/download' },
    ],
  },

  {
    id: 'resources',
    title: 'Resources',
    submenu: [
      { id: 'blog', label: 'Blog', href: '/blog' },
      { id: 'tutorial', label: 'Tutorial', href: '/tutorial' },
      { id: 'faq', label: 'FAQ', href: '/faq' },
      { id: 'glossary', label: 'Glossary', href: '/glossary' },
    ],
  },

  {
    id: 'plans-support',
    title: 'Plans & Support',
    submenu: [
      { id: 'pricing', label: 'Pricing', href: '/pricing' },
      { id: 'login', label: 'Login', href: '/login' },
      { id: 'create-account', label: 'Create Account', href: '/signup' },
      { id: 'referral-program', label: 'Referral Program', href: '/referral-program' },
      { id: 'affiliate', label: 'Affiliate', href: '/affiliates' },
      { id: 'affiliate-policy', label: 'Affiliate Policy', href: '/affiliate-policy' },
      { id: 'terms-conditions', label: 'Terms & Conditions', href: '/terms-conditions' },
      { id: 'privacy-policy', label: 'Privacy Policy', href: '/privacy-policy' },
      { id: 'refund-policy', label: 'Refund Policy', href: '/refund-policy' },
      { id: 'gdpr', label: 'GDPR', href: '/gdpr' },
      { id: 'legal', label: 'Legal', href: '/legal' },
    ],
  },
];

export const footerData: FooterOneData[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Career', href: '/career' },
      { label: 'Management', href: '/management' },
      { label: 'Case Studies', href: '/case-study' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Support', href: '/support' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Documentation', href: '/documentation' },
      { label: 'Tutorial', href: '/tutorial' },
    ],
  },
  {
    title: 'Legal Policies',
    links: [
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Refund Policy', href: '/refund-policy' },
      { label: 'GDPR Compliance', href: '/gdpr' },
      { label: 'Affiliate Policy', href: '/affiliate-policy' },
    ],
  },
];
