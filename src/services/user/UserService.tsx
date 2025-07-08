// src/services/user.tsx
import axios from 'axios';
import React from 'react'; 
// (Nota: importar React aqui não é comum para um service, mas
//  como pedimos .tsx, adicionamos a import do React para evitar warnings)

export interface User {
  id: number;
  name: string;
  email: string;
  profile: {
    name: string;
    id: number;
  },
  createdAt?: string;
  updatedAt?: string;
}

// Exemplo de base URLs
const baseUrl = 'http://localhost:3333/users';

const Url = 'http://localhost:3333/';

/**
 * Listar todos os usuários
 */
export async function listUsers(): Promise<User[]> {
  const response = await axios.get<User[]>(`${baseUrl}`);
  return response.data;
}

/**
 * Criar um novo usuário
 */
export async function createUser(user: User): Promise<User> {
  const response = await axios.post<User>(`${baseUrl}`, user);
  return response.data;
}

/**
 * Obter usuário por ID
 */
export async function getUserById(id: number): Promise<User> {
  const response = await axios.get<User>(`${baseUrl}/${id}`);
  return response.data;
}

/**
 * Buscar usuários por critérios (ex.: {id, name, email, profile_id})
 */
export async function getUserBy(
  criteria: { id?: number; name?: string; email?: string; profile_id?: number; }
): Promise<User[] | { error: string }> {
  const response = await axios.post<User[] | { error: string }>(
    `${Url}usersBy`,
    criteria
  );
  return response.data;
}

/**
 * Atualizar um usuário
 */
export async function updateUser(id: number, user: User): Promise<User> {
  const response = await axios.put<User>(`${baseUrl}/${id}`, user);
  return response.data;
}

/**
 * Deletar um usuário
 */
export async function deleteUser(id: number): Promise<void> {
  await axios.delete<void>(`${baseUrl}/${id}`);
}
