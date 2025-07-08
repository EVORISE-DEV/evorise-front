import axios from 'axios';

const baseURL = 'http://localhost:3333';

// Interface para representar um item no carrinho
export interface IProductCart {
  id?: string;
  user_id: string; // UUID do usuário
  product_id: number;
  product_qtt: number;
}

// 1️⃣ Buscar todos os itens do carrinho (GET /product-carts)
export async function getProductCartItems(): Promise<IProductCart[]> {
  try {
    const response = await axios.get<IProductCart[]>(`${baseURL}/product-carts`);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao buscar itens do carrinho:', error);
    throw error;
  }
}

// 2️⃣ Adicionar um produto ao carrinho (POST /product-carts)
export async function addProductToCart(cartData: IProductCart): Promise<IProductCart> {
  try {
    const response = await axios.post<IProductCart>(`${baseURL}/product-carts`, cartData);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao adicionar produto ao carrinho:', error);
    throw error;
  }
}

// 3️⃣ Atualizar a quantidade de um item no carrinho (PUT /product-carts/:id)
export async function updateProductCartItem(id: string, cartData: Partial<IProductCart>): Promise<IProductCart> {
  try {
    const response = await axios.put<IProductCart>(`${baseURL}/product-carts/${id}`, cartData);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao atualizar item do carrinho:', error);
    throw error;
  }
}

// 4️⃣ Remover um item do carrinho (DELETE /product-carts/:id)
export async function removeProductFromCart(id: string): Promise<void> {
  try {
    await axios.delete(`${baseURL}/product-carts/${id}`);
  } catch (error: any) {
    console.error('Erro ao remover item do carrinho:', error);
    throw error;
  }
}
