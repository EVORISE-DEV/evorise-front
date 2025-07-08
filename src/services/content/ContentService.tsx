import axios from 'axios';

const baseURL = 'http://localhost:3333';

// Definição da interface para um conteúdo
export interface IContent {
  id?: string;
  title: string;
  description: string;
  price: number;
  discount?: number;
  user_id: string;
  topics?: number[]; // IDs dos tópicos relacionados
}

// 1️⃣ Listar todos os conteúdos (GET /contents)
export async function getContents(): Promise<IContent[]> {
  try {
    const response = await axios.get<IContent[]>(`${baseURL}/contents`);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao buscar conteúdos:', error);
    throw error;
  }
}

// 2️⃣ Criar um novo conteúdo (POST /contents)
export async function createContent(contentData: IContent): Promise<IContent> {
  try {
    const response = await axios.post<IContent>(`${baseURL}/contents`, contentData);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao criar conteúdo:', error);
    throw error;
  }
}

// 3️⃣ Atualizar um conteúdo existente (PUT /contents/:id)
export async function updateContent(id: string, contentData: Partial<IContent>): Promise<IContent> {
  try {
    const response = await axios.put<IContent>(`${baseURL}/contents/${id}`, contentData);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao atualizar conteúdo:', error);
    throw error;
  }
}

// 4️⃣ Deletar um conteúdo (DELETE /contents/:id)
export async function deleteContent(id: string): Promise<void> {
  try {
    await axios.delete(`${baseURL}/contents/${id}`);
  } catch (error: any) {
    console.error('Erro ao deletar conteúdo:', error);
    throw error;
  }
}
