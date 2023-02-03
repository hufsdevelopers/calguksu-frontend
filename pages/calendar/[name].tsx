import { NextPageContext } from 'next';
import axios from 'axios';

import Layout from '@/components/Layout';
import Calendar from '@/containers/Calendar';

import { CalendarType } from '@/config/types';

interface PageProps {
  calendar: CalendarType;
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
  const response = await axios.get<CalendarType>(`https://api.hufsdevelopers.org/calguksu/calendars/${name}`);

  return {
    props: {
      calendar: response.data,
    },
  };
}
