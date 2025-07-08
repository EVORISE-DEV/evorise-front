import axios from 'axios';

const baseURL = 'http://localhost:3333';

// Definimos a interface de contato
export interface IContact {
  id?: string;
  telephone?: string | null;
  smartphone: string;
}

// Se precisar adicionar autenticação, pode criar uma função semelhante ao getAuthHeaders do UserService.
// Por exemplo:
 const getAuthHeaders = () => {
   const token = localStorage.getItem('token');
   return { headers: { Authorization: `Bearer ${token}` } };
 };

// 1) Listar todos os contatos
export async function getContacts(): Promise<IContact[]> {
  try {
    const response = await axios.get<IContact[]>(`${baseURL}/contacts` , getAuthHeaders());
    return response.data;
  } catch (error: any) {
    console.error('Erro ao buscar contatos:', error.response?.data?.error || error);
    throw error;
  }
}

// 2) Criar um novo contato
export async function createContact(contactData: IContact): Promise<IContact> {
  try {
    const response = await axios.post<IContact>(`${baseURL}/contacts`, contactData, getAuthHeaders());
    return response.data;
  } catch (error: any) {
    console.error('Erro ao criar contato:', error.response?.data?.error || error);
    throw error;
  }
}

// 3) Atualizar um contato
export async function updateContact(id: string, contactData: Partial<IContact>): Promise<IContact> {
  try {
    const response = await axios.put<IContact>(`${baseURL}/contacts/${id}`, contactData, getAuthHeaders());
    return response.data;
  } catch (error: any) {
    console.error('Erro ao atualizar contato:', error.response?.data?.error || error);
    throw error;
  }
}

// 4) Deletar um contato
export async function deleteContact(id: string): Promise<{ message: string }> {
  try {
    const response = await axios.delete<{ message: string }>(`${baseURL}/contacts/${id}`, getAuthHeaders());
    return response.data;
  } catch (error: any) {
    console.error('Erro ao deletar contato:', error.response?.data?.error || error);
    throw error;
  }
}
