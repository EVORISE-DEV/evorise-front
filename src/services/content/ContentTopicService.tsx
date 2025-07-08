import axios from 'axios';

const baseURL = 'http://localhost:3333';

// Interface do Tópico de Conteúdo
export interface IContentTopic {
  id?: string;
  name: string;
  description: string;
  img?: string;
  files?: string;
  content_id?: string; // ID do conteúdo relacionado
}

// 1️⃣ Buscar todos os tópicos (GET /content-topics)
export async function getContentTopics(): Promise<IContentTopic[]> {
  try {
    const response = await axios.get<IContentTopic[]>(`${baseURL}/content-topics`);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao buscar tópicos de conteúdo:', error);
    throw error;
  }
}

// 2️⃣ Criar um novo tópico de conteúdo (POST /content-topics)
export async function createContentTopic(topicData: IContentTopic): Promise<IContentTopic> {
  try {
    const response = await axios.post<IContentTopic>(`${baseURL}/content-topics`, topicData);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao criar tópico de conteúdo:', error);
    throw error;
  }
}

// 3️⃣ Atualizar um tópico de conteúdo existente (PUT /content-topics/:id)
export async function updateContentTopic(id: string, topicData: Partial<IContentTopic>): Promise<IContentTopic> {
  try {
    const response = await axios.put<IContentTopic>(`${baseURL}/content-topics/${id}`, topicData);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao atualizar tópico de conteúdo:', error);
    throw error;
  }
}

// 4️⃣ Buscar tópicos por conteúdo (GET /content-topics/by-content/:contentId)
export async function getContentTopicsByContent(contentId: string): Promise<IContentTopic[]> {
  try {
    const response = await axios.get<IContentTopic[]>(`${baseURL}/content-topics/by-content/${contentId}`);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao buscar tópicos do conteúdo:', error);
    throw error;
  }
}

// 5️⃣ Excluir um tópico de conteúdo (DELETE /content-topics/:id)
export async function deleteContentTopic(id: string): Promise<void> {
  try {
    await axios.delete(`${baseURL}/content-topics/${id}`);
  } catch (error: any) {
    console.error('Erro ao deletar tópico de conteúdo:', error);
    throw error;
  }
}
