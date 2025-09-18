export interface Event {
    id: number;
    name: string;
    date: string;
    local: string;
    time: string;
    distance_km?: number | null;
    type: string;
}

//--------------------------------------//

export interface EventsPage<T> {
  total: number;
  limit: number;
  page: number;
  totalPages: number;
  events: T[];
}

export interface EventFilters {
  title?: string;
  description?: string;
  local?: string;
  date?: string; // Ex: '2024-09-20'
  time?: string; // Ex: '07:30:00'
}
export interface EventCalendar {
    id: number;
    title: string;
    description: string;
    date: string;
    time: string;
    local: string;
    distances: { id: number; distance: number }[];
    photos: { id: number; path: string; caption: string; cover_url: string }[];
}

export interface EventDistance {
    id?: number;
    distance: number; //integer em metros
    event_id?: number;
}

export interface EventPhoto {
    id: number;
    path: string; 
    caption?: string;
}