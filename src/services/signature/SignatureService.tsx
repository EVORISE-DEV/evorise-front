import axios from 'axios';

const baseURL = 'http://localhost:3333';

// Definimos a interface para a assinatura
export interface ISignature {
  id?: string;
  name: string;
  price: number;
  discount?: number;
}

// Se sua aplicação utilizar autenticação, você pode criar uma função para obter os headers, por exemplo:
// const getAuthHeaders = () => {
//   const token = localStorage.getItem('token');
//   return { headers: { Authorization: `Bearer ${token}` } };
// };

// 1) Listar todas as assinaturas
export async function getSignatures(): Promise<ISignature[]> {
  try {
    const response = await axios.get<ISignature[]>(`${baseURL}/signatures`);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao buscar assinaturas:', error.response?.data?.error || error);
    throw error;
  }
}

// 2) Criar uma nova assinatura
export async function createSignature(signatureData: ISignature): Promise<ISignature> {
  try {
    const response = await axios.post<ISignature>(`${baseURL}/signatures`, signatureData);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao criar assinatura:', error.response?.data?.error || error);
    throw error;
  }
}

// 3) Atualizar uma assinatura existente
export async function updateSignature(id: string, signatureData: Partial<ISignature>): Promise<ISignature> {
  try {
    const response = await axios.put<ISignature>(`${baseURL}/signatures/${id}`, signatureData);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao atualizar assinatura:', error.response?.data?.error || error);
    throw error;
  }
}

// 4) Deletar uma assinatura
export async function deleteSignature(id: string): Promise<{ message: string }> {
  try {
    const response = await axios.delete<{ message: string }>(`${baseURL}/signatures/${id}`);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao deletar assinatura:', error.response?.data?.error || error);
    throw error;
  }
}
