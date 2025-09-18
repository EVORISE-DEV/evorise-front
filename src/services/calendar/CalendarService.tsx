import axios from 'axios';
import { EventCalendar, EventFilters, EventsPage } from 'src/pages/interfaces/event';
import api from '../api/api';

const baseURL = 'http://localhost:3333';


export async function getEvents(
  page = 1, 
  limit = 10,
  filters: EventFilters = {}
): Promise<EventsPage<EventCalendar>> {
  try {

    const params = new URLSearchParams();

    params.append('page', String(page));
    params.append('limit', String(limit));

    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });

    const response = await api.get<EventsPage<EventCalendar>>(`/events?${params.toString()}`
    );
    return response.data;
  } catch (error: any) {
    console.error('Erro ao buscar eventos:', error.response?.data?.error || error);
    throw error;
  }
}