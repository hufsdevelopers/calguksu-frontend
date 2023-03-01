export interface CalendarResultType {
  name: string;
  title: string;
  description: string;
  calendarId: number;
}

export interface CalendarListType {
  successful: boolean;
  result: CalendarResultType[];
}

export interface CalendarDetailType {
  successful: boolean;
  result: CalendarResultType;
}

export interface EventResultType {
  calendarName: string;
  start: string;
  end: string;
  allDay: boolean;
  description: string;
}

export interface EventListType {
  successful: boolean;
  result: EventResultType[];
}
