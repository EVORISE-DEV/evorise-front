import axios from 'axios';

// Exemplo de interface do request
interface LoginRequest {
  email: string;
  password: string;
}

// Exemplo de retorno (ajuste conforme seu backend)
interface LoginResponse {
  token: string;
  user: any; // Pode detalhar melhor a interface
}

export async function login(data: LoginRequest): Promise<LoginResponse> {
  // Ajuste a URL para seu endpoint de login
  const response = await axios.post<LoginResponse>('http://localhost:3333/api/login', data);
  return response.data;
}

const API_URL = 'http://localhost:3333'; // Ajustar para sua API real

export async function loginUser(username: string, password: string) {
  const response = await axios.post(`${API_URL}/api/login`, { username, password });
  return response.data;
}

export async function registerUser(userData: { username: string, password: string }) {
  const response = await axios.post(`${API_URL}/api/register`, userData);
  return response.data;
}
