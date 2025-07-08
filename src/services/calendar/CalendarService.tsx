import axios from 'axios';
import { EventCalendar } from 'src/pages/interfaces/event';

const baseURL = 'http://localhost:3333';

const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return { headers: { Authorization: `Bearer ${token}` } };
};

export async function getEvents(): Promise<EventCalendar[]> {
    try {
        const response = await axios.get<EventCalendar[]>(`${baseURL}/events`, getAuthHeaders());
        return response.data;
    } catch (error: any) {
        console.error('Erro ao buscar eventos:', error.response?.data?.error || error);
        throw error;
    }
}