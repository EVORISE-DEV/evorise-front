import axios from 'axios';

const baseURL = 'http://localhost:3333';

// Interface da Avaliação de Conteúdo
export interface IContentReview {
  id?: string;
  user_id: string;
  content_id: number;
  rating: number;
  description: string;
}

// 1️⃣ Buscar todas as avaliações de conteúdos (GET /content-reviews)
export async function getContentReviews(): Promise<IContentReview[]> {
  try {
    const response = await axios.get<IContentReview[]>(`${baseURL}/content-reviews`);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao buscar avaliações de conteúdo:', error);
    throw error;
  }
}

// 2️⃣ Criar uma nova avaliação de conteúdo (POST /content-reviews)
export async function createContentReview(reviewData: IContentReview): Promise<IContentReview> {
  try {
    const response = await axios.post<IContentReview>(`${baseURL}/content-reviews`, reviewData);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao criar avaliação de conteúdo:', error);
    throw error;
  }
}

// 3️⃣ Atualizar uma avaliação de conteúdo (PUT /content-reviews/:id)
export async function updateContentReview(id: string, reviewData: Partial<IContentReview>): Promise<IContentReview> {
  try {
    const response = await axios.put<IContentReview>(`${baseURL}/content-reviews/${id}`, reviewData);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao atualizar avaliação de conteúdo:', error);
    throw error;
  }
}

// 4️⃣ Excluir uma avaliação de conteúdo (DELETE /content-reviews/:id)
export async function deleteContentReview(id: string): Promise<void> {
  try {
    await axios.delete(`${baseURL}/content-reviews/${id}`);
  } catch (error: any) {
    console.error('Erro ao deletar avaliação de conteúdo:', error);
    throw error;
  }
}
