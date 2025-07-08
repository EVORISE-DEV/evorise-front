import axios from 'axios';

const baseURL = 'http://localhost:3333';

// Interface para definir o formato do endereço
export interface IAddress {
  id?: string;
  address_name: string;
  country: string;
  state: string;
  city: string;
  cep: string;
}

// Se sua aplicação requer autenticação, pode ser útil incluir os headers com o token.
// Exemplo:
// const getAuthHeaders = () => {
//   const token = localStorage.getItem('token');
//   return { headers: { Authorization: `Bearer ${token}` } };
// };

// Função para pegar o token armazenado
const getAuthHeaders = () => {
  const token = localStorage.getItem('token'); 
  return { headers: { Authorization: `Bearer ${token}` } };
};

// 1) Listar todos os endereços
export async function getAddresses(): Promise<IAddress[]> {
  try {
    // Caso precise de autenticação, passe getAuthHeaders() como segundo parâmetro
    const response = await axios.get<IAddress[]>(`${baseURL}/addresses`, getAuthHeaders());
    return response.data;
  } catch (error: any) {
    console.error('Erro ao buscar endereços:', error.response?.data?.error || error);
    throw error;
  }
}

// 2) Criar um novo endereço
export async function createAddress(addressData: IAddress): Promise<IAddress> {
  try {
    const response = await axios.post<IAddress>(`${baseURL}/addresses`, addressData, getAuthHeaders());
    return response.data;
  } catch (error: any) {
    console.error('Erro ao criar endereço:', error.response?.data?.error || error);
    throw error;
  }
}

// 3) Atualizar um endereço existente
export async function updateAddress(id: string, addressData: Partial<IAddress>): Promise<IAddress> {
  try {
    // Caso precise de autenticação, passe getAuthHeaders() como terceiro parâmetro
    const response = await axios.put<IAddress>(`${baseURL}/addresses/${id}`, addressData, getAuthHeaders());
    return response.data;
  } catch (error: any) {
    console.error('Erro ao atualizar endereço:', error.response?.data?.error || error);
    throw error;
  }
}

// 4) Deletar um endereço
export async function deleteAddress(id: string): Promise<{ message: string }> {
  try {
    // Caso precise de autenticação, passe getAuthHeaders() como segundo parâmetro
    const response = await axios.delete<{ message: string }>(`${baseURL}/addresses/${id}`, getAuthHeaders());
    return response.data;
  } catch (error: any) {
    console.error('Erro ao deletar endereço:', error.response?.data?.error || error);
    throw error;
  }
}
