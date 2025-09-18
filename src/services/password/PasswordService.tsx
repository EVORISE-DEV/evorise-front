import axios from 'axios';
import { EventCalendar, EventFilters, EventsPage } from 'src/pages/interfaces/event';
import api from '../api/api';

const baseURL = 'http://localhost:3333';

export async function requestPasswordReset(email: string) {
    try {
        const response = await api.post(`/forgot-password`, { email });
        return response.data;
    } catch (error: any) {
        console.error('Erro ao solicitar redefinição de senha:', error.response?.data?.error || error);
        return error.response?.data?.error || error;
    }
}

export async function passwordReset(token: string, password: string) {
    try {
        const response = await api.post(`/reset-password/${token}`, { password });
        return response.data;
    } catch (error: any) {
        console.error('Erro ao solicitar redefinição de senha:', error.response?.data?.error || error);
        throw error;
    }
}

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