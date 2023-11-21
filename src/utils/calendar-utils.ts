import axios from 'axios';

export async function requestEmailSubscription(email: string, calendarName: string): Promise<SubscribeType> {
  const axiosResponse = await axios.post<SubscribeType>('https://api.calguksu.com/subscribe', { email, calendarName });
  return axiosResponse.data;
}