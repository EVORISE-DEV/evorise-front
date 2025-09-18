import axios from 'axios';
import { IUser } from '../user/UserService.tsx'
import { IAddress } from '../address/AddressService.tsx';
import { IContact } from '../contact/ContactService.tsx';
import { IProfile } from '../profile/ProfileService.tsx';
import { ISignature } from '../signature/SignatureService.tsx';
import api from '../api/api.ts';

const baseURL = 'http://localhost:3333';


// Interface de resposta da API de login
export interface IAuthResponse {
  user: IUser;
}

export interface IUserResponse {
  id: string;              
  name: string;
  surname: string;
  email: string;
  password?: string;        
  confirmPassword?: string;
  oldPassword?: string;     
  profile?: IProfile; 
  contact?: IContact;   
  address?: IAddress; 
  signature?:ISignature; 
}

export async function login(email: string, password: string): Promise<IAuthResponse> {
  try {
    const response = await api.post(`${baseURL}/sessions`, { email, password });

    return response.data;
  } catch (error: any) {
    console.error('Erro ao fazer login:', error.response?.data || error);
    throw error;
  }
}

export async function register(
  name: string,
  email: string, 
  password: string,
  confirmPassword: string
): Promise<IAuthResponse> {
  try {
    const response = await api.post(`${baseURL}/register`, { name, email, password, confirmPassword });

    return response.data;
  } catch (error: any) {
    console.error('Erro ao fazer login:', error.response?.data || error);
    throw error;
  }
}

export async function getMe(): Promise<IUser> {
  const res = await api.get<IUser>('/me', { withCredentials: true });
  return res.data;
}

export async function indexGoogle(): Promise<any> {
  const res = await api.get<any>('/auth/google/callback', { withCredentials: true });
  return res.data;
}

export async function logout(): Promise<void> {
  await api.post('/logout', {}, { withCredentials: true });
}



// Função para fazer login
export async function login1(email: string, password: string): Promise<IAuthResponse> {
  try {
    const response = await axios.post<IAuthResponse>(`${baseURL}/sessions`, { email, password });


    return response.data;
  } catch (error: any) {
    console.error('Erro ao fazer login:', error.response?.data || error);
    throw error;
  }
}

export async function getMe1(): Promise<IUserResponse>{
  try {
    const response = await axios.get<IUserResponse>(`${baseURL}/me`, {withCredentials: true});

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
export function logout1(): void {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}
