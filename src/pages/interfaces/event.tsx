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

export interface EventCalendar {
    id: number;
    title: string;
    description: string;
    date: string;
    time: string;
    local: string;
    distances: { id: number; distance: number }[];
    photos: { id: number; path: string; caption: string }[];
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