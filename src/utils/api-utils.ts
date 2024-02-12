import axios from 'axios';
import { SubscribeType } from '@/types/calendar-types';

const apiClient = axios.create({
  baseURL: 'https://api.calguksu.com/',
});

export const subscribeByEmail = async (email: string, calendarName: string): Promise<SubscribeType> => {
  const response = await apiClient.post<SubscribeType>('subscribe', { email, calendarName });
  return response.data;
};

export const submitFeedback = async (replyEmail: string, content: string): Promise<void> => {
  const response = await apiClient.post('feedback', { replyEmail, content });
  return response.data;
};
