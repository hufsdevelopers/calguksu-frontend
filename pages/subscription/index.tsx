import Layout from '@/components/Layout';
import Subscription from '@/containers/Subscription';

interface PageProps {
  userAgent: string;
}

export default function SubscriptionPage({ userAgent }: PageProps) {
  return (
    <Layout>
      <Subscription userAgent={userAgent}  />
    </Layout>
  );
}

export const getServerSideProps = ({ req }: any) => {
  const userAgent = req.headers['user-agent'];
  return { props: { userAgent } };
};
