import axios from 'axios';

import { SubscribeType } from '@/types/calendar-types';

export async function requestEmailSubscription(
  email: string,
  calendarName: string,
  subscribeNewsletter: boolean,
): Promise<SubscribeType> {
  const axiosResponse = await axios.post<SubscribeType>('https://api.calguksu.com/subscribe', {
    email,
    calendarName,
    subscribeNewsletter,
  });
  return axiosResponse.data;
}
