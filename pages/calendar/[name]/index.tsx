import { NextPageContext } from 'next';
import axios from 'axios';

import Layout from '@/components/Layout';
import Calendar from '@/containers/Calendar';

import { CalendarDetailType } from '@/config/types';

interface PageProps {
  calendar: CalendarDetailType;
}

export default function CalendarPage({ calendar }: PageProps) {
  return (
    <Layout>
      <Calendar calendar={calendar} />
    </Layout>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const { name } = context.query;
  try {
    const response = await axios.get<CalendarDetailType>(`https://api.calguksu.com/calendars/${name}`);
    return {
      props: {
        calendar: response.data,
      },
    };
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: '/404',
      },
    };
  }
}
