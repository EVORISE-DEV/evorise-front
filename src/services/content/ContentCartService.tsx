import axios from 'axios';

const baseURL = 'http://localhost:3333';

// Interface do Carrinho de Conteúdos
export interface IContentCart {
  id?: string;
  user_id: string;
  content_id: number;
  content_qtt: number;
}

// 1️⃣ Buscar todos os itens do carrinho de conteúdos (GET /content-carts)
export async function getContentCarts(): Promise<IContentCart[]> {
  try {
    const response = await axios.get<IContentCart[]>(`${baseURL}/content-carts`);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao buscar carrinho de conteúdos:', error);
    throw error;
  }
}

// 2️⃣ Adicionar um conteúdo ao carrinho (POST /content-carts)
export async function addToContentCart(cartData: IContentCart): Promise<IContentCart> {
  try {
    const response = await axios.post<IContentCart>(`${baseURL}/content-carts`, cartData);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao adicionar conteúdo ao carrinho:', error);
    throw error;
  }
}

// 3️⃣ Atualizar a quantidade de um item no carrinho (PUT /content-carts/:id)
export async function updateContentCart(id: string, cartData: Partial<IContentCart>): Promise<IContentCart> {
  try {
    const response = await axios.put<IContentCart>(`${baseURL}/content-carts/${id}`, cartData);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao atualizar item do carrinho:', error);
    throw error;
  }
}

// 4️⃣ Remover um item do carrinho (DELETE /content-carts/:id)
export async function removeFromContentCart(id: string): Promise<void> {
  try {
    await axios.delete(`${baseURL}/content-carts/${id}`);
  } catch (error: any) {
    console.error('Erro ao remover item do carrinho:', error);
    throw error;
  }
}
