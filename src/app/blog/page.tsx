import BlogShowcase from '@/components/blog/BlogShowcase';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getBlogs } from '@/utils/api';
import { Metadata } from 'next';
import CTA from '@/components_new/blog/Cta';


export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Blog - AI Voice Generator || NextSaaS',
};

const page = async () => {
  const response = await getBlogs('en');
  const blogs = response.data || [];

  return (
    <main className="bg-white">
      <BlogShowcase blogs={blogs} />
      <CTA />
    </main>
  );
};

export default page;
