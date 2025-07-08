import axios from 'axios';
import { IUser } from '../user/UserTestService.tsx'

const baseURL = 'http://localhost:3333';

// Interface do usuário autenticado


// Interface de resposta da API de login
export interface IAuthResponse {
  user: IUser;
  token: string;
}

// Função para fazer login
export async function login(email: string, password: string): Promise<IAuthResponse> {
  try {
    const response = await axios.post<IAuthResponse>(`${baseURL}/sessions`, { email, password });

    // Armazena o token e as informações do usuário no localStorage
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));

    return response.data;
  } catch (error: any) {
    console.error('Erro ao fazer login:', error.response?.data || error);
    throw error;
  }
}

// Função para verificar se o usuário está autenticado
export function isAuthenticated(): boolean {
  const token = localStorage.getItem('token');
  return !!token;
}

// Função para obter o usuário autenticado
export function getUser(): IUser | null {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
}

// Função para fazer logout
export function logout(): void {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}
