// src/services/Points.tsx
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3333';

// Estrutura de um item de ranking retornado pelo backend
// Exemplo de resposta do backend: { ranking: [ { member: '1', score: 30 }, { member: '2', score: 20 }, ... ] }
export interface RankingItem {
  member: string; // Pode ser o userId retornado pelo Redis
  score: number;  // Pontos do usuário
}

// Função para pegar o token armazenado
const getAuthHeaders = () => {
    const token = localStorage.getItem('token'); 
    return { headers: { Authorization: `Bearer ${token}` } };
};

/**
 * Adiciona pontos ao usuário atual (identificado no backend via req.userId)
 * @param points Quantidade de pontos a adicionar
 */
export async function addPoints(points: number): Promise<void> {
  await axios.post(`${API_BASE_URL}/points/add`, { points }, getAuthHeaders());
}

/**
 * Busca o ranking de todos os usuários, ordenado por maior pontuação
 * @returns RankingItem[] contendo { member, score }
 */


export async function getRanking(): Promise<RankingItem[]> {
    const response = await axios.get(`${API_BASE_URL}/points/ranking`, getAuthHeaders());
    // Assumindo que o backend retorne um objeto do tipo { ranking: RankingItem[] }
    return response.data.ranking;
  }