import { NextPageContext } from 'next';
import axios from 'axios';

import Layout from '@/components/Layout';
import Calendar from '@/containers/Calendar';

import { CalendarProps } from '@/config/types';

interface PageProps {
  calendar: CalendarProps;
}

export default function CalendarPage({ calendar }: PageProps) {
  return (
    <Layout>
      <Calendar
        name={calendar.name}
        title={calendar.title}
        description={calendar.description}
        calendarId={calendar.calendarId}
      />
    </Layout>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const { name } = context.query;
  const response = await axios.get<CalendarProps>(`https://api.calguksu.com/calendars/${name}`);

  return {
    props: {
      calendar: response.data,
    },
  };
}
