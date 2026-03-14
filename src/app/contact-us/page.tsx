import ContactClients from '@/components_new/contact-us/ContactClients';
import ContactSalesTeam from '@/components_new/contact-us/ContactSalesTeam';
import ContactMap from '@/components_new/contact-us/ContactMap';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import ContactHero from '@/components_new/contact-us/ContactHero';
import ContactInfo from '@/components_new/contact-us/ContactInfo';
import ContactWhereWe from '@/components_new/contact-us/contact-where-we';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Contact Us - AI Voice Generator || NextSaaS',
};

const ContactUs = () => {
  return (
    <main className="bg-background-3">
      <ContactHero />
      <ContactInfo />
      <ContactMap />
      <ContactSalesTeam />
      <ContactWhereWe />
      <ContactClients />
    </main>
  );
};

export default ContactUs;
