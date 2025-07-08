import axios from 'axios';
import { IAddress } from '../address/AddressService';
import { IContact } from './../contact/ContactService';
import { IProfile } from '../profile/ProfileService';
import { ISignature } from './../signature/SignatureService';

const baseURL = 'http://localhost:3333';

// Definimos a interface de usuário
export interface IUser {
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

// Função para pegar o token armazenado
const getAuthHeaders = () => {
  const token = localStorage.getItem('token'); 
  return { headers: { Authorization: `Bearer ${token}` } };
};

// 1) Listar todos os usuários
export async function getUsers(): Promise<IUser[]> {
  try {
    const response = await axios.get<IUser[]>(`${baseURL}/users`, getAuthHeaders());
    return response.data;
  } catch (error: any) {
    console.error('Erro ao buscar usuários:', error.response?.data?.error || error);
    throw error;
  }
}

// 2) Buscar um usuário pelo ID
export async function getUserById(id?: string): Promise<IUser> {
  try {
    const response = await axios.get<IUser>(`${baseURL}/users/${id}`, getAuthHeaders());
    return response.data;
  } catch (error: any) {
    console.error('Erro ao buscar usuário:', error.response?.data?.error || error);
    throw error;
  }
}

// 3) Criar um novo usuário
export async function createUser(userData: IUser): Promise<IUser> {
  try {
    const response = await axios.post<IUser>(`${baseURL}/users`, userData, getAuthHeaders());
    return response.data;
  } catch (error: any) {
    console.error('Erro ao criar usuário:', error.response?.data?.error || error);
    throw error;
  }
}

// 4) Atualizar um usuário
export async function updateUser(id: string, userData: Partial<IUser>): Promise<IUser> {
  try {
    const response = await axios.put<IUser>(`${baseURL}/users/${id}`, userData, getAuthHeaders());
    return response.data;
  } catch (error: any) {
    console.error('Erro ao atualizar usuário:', error.response?.data?.error || error);
    throw error;
  }
}

// 5) Deletar um usuário
export async function deleteUser(id: string): Promise<void> {
  try {
    await axios.delete(`${baseURL}/users/${id}`, getAuthHeaders());
  } catch (error: any) {
    console.error('Erro ao deletar usuário:', error.response?.data?.error || error);
    throw error;
  }
}
