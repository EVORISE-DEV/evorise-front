import axios from 'axios';

const baseURL = 'http://localhost:3333';

// Interface para representar uma avaliação de produto
export interface IProductReview {
  id?: string;
  user_id: string; // UUID do usuário
  product_id: number;
  rating: number; // Avaliação de 1 a 5
  description: string;
}

// 1️⃣ Buscar todas as avaliações de produtos (GET /product-reviews)
export async function getProductReviews(): Promise<IProductReview[]> {
  try {
    const response = await axios.get<IProductReview[]>(`${baseURL}/product-reviews`);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao buscar avaliações de produtos:', error);
    throw error;
  }
}

// 2️⃣ Criar uma nova avaliação de produto (POST /product-reviews)
export async function addProductReview(reviewData: IProductReview): Promise<IProductReview> {
  try {
    const response = await axios.post<IProductReview>(`${baseURL}/product-reviews`, reviewData);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao adicionar avaliação de produto:', error);
    throw error;
  }
}

// 3️⃣ Atualizar uma avaliação de produto (PUT /product-reviews/:id)
export async function updateProductReview(id: string, reviewData: Partial<IProductReview>): Promise<IProductReview> {
  try {
    const response = await axios.put<IProductReview>(`${baseURL}/product-reviews/${id}`, reviewData);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao atualizar avaliação de produto:', error);
    throw error;
  }
}

// 4️⃣ Remover uma avaliação de produto (DELETE /product-reviews/:id)
export async function removeProductReview(id: string): Promise<void> {
  try {
    await axios.delete(`${baseURL}/product-reviews/${id}`);
  } catch (error: any) {
    console.error('Erro ao remover avaliação de produto:', error);
    throw error;
  }
}
