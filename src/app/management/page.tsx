import ManagementTeam from '@/components_new/management/ManagementTeam';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Management Team - Iorta TechNXT',
  description: 'Meet the visionary leaders at Iorta TechNXT who are driving the future of insurance technology.',
};

const ManagementPage = () => {
  return (
    <main>
      <ManagementTeam />
    </main>
  );
};

export default ManagementPage;
