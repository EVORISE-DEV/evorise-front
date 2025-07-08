import axios from 'axios';

const baseURL = 'http://localhost:3333';

// Interface do Interesse em Conteúdo
export interface IContentInterest {
  id?: string;
  user_id: string;
  content_id: number;
}

// 1️⃣ Buscar todos os interesses em conteúdos (GET /content-interests)
export async function getContentInterests(): Promise<IContentInterest[]> {
  try {
    const response = await axios.get<IContentInterest[]>(`${baseURL}/content-interests`);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao buscar interesses em conteúdos:', error);
    throw error;
  }
}

// 2️⃣ Criar um novo interesse em conteúdo (POST /content-interests)
export async function createContentInterest(interestData: IContentInterest): Promise<IContentInterest> {
  try {
    const response = await axios.post<IContentInterest>(`${baseURL}/content-interests`, interestData);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao registrar interesse em conteúdo:', error);
    throw error;
  }
}

// 3️⃣ Atualizar interesse em conteúdo (PUT /content-interests/:id)
export async function updateContentInterest(id: string, interestData: Partial<IContentInterest>): Promise<IContentInterest> {
  try {
    const response = await axios.put<IContentInterest>(`${baseURL}/content-interests/${id}`, interestData);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao atualizar interesse em conteúdo:', error);
    throw error;
  }
}

// 4️⃣ Remover interesse em conteúdo (DELETE /content-interests/:id)
export async function deleteContentInterest(id: string): Promise<void> {
  try {
    await axios.delete(`${baseURL}/content-interests/${id}`);
  } catch (error: any) {
    console.error('Erro ao remover interesse em conteúdo:', error);
    throw error;
  }
}
