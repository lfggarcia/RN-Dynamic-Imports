export interface Destination {
  name: string;
  description: string;
  location: string;
  image: string;
}

export interface Attendee {
  id: string;
  name: string;
  image: string;
  status: string;
}

export interface Friends {
  id: string;
  name: string;
  image: string;
}

export interface Expense {
  id: string;
  destinationID: string;
  attendeeId: string;
  item: string;
  price: number;
  description: string;
  paidBy: string;
  status: string;
}

export interface Outing {
  creatorId: string;
  title: string;
  description: string;
  date: number;
  time: string;
  destinations: string[];
  attendees: string[];
  status: string;
}
