import axios from 'axios';

const baseURL = 'http://localhost:3333';

// Interface do Produto
export interface IProduct {
  id?: string;
  name: string;
  description: string;
  price: number;
  discount?: number;
}

// 1️⃣ Buscar todos os produtos (GET /products)
export async function getProducts(): Promise<IProduct[]> {
  try {
    const response = await axios.get<IProduct[]>(`${baseURL}/products`);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao buscar produtos:', error);
    throw error;
  }
}

// 2️⃣ Criar um novo produto (POST /products)
export async function createProduct(productData: IProduct): Promise<IProduct> {
  try {
    const response = await axios.post<IProduct>(`${baseURL}/products`, productData);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao criar produto:', error);
    throw error;
  }
}

// 3️⃣ Atualizar um produto existente (PUT /products/:id)
export async function updateProduct(id: string, productData: Partial<IProduct>): Promise<IProduct> {
  try {
    const response = await axios.put<IProduct>(`${baseURL}/products/${id}`, productData);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao atualizar produto:', error);
    throw error;
  }
}

// 4️⃣ Deletar um produto (DELETE /products/:id)
export async function deleteProduct(id: string): Promise<void> {
  try {
    await axios.delete(`${baseURL}/products/${id}`);
  } catch (error: any) {
    console.error('Erro ao deletar produto:', error);
    throw error;
  }
}
