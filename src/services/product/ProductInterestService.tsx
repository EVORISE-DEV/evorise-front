import axios from 'axios';

const baseURL = 'http://localhost:3333';

// Interface para representar um interesse em produto
export interface IProductInterest {
  id?: string;
  user_id: string; // UUID do usuário
  product_id: number;
}

// 1️⃣ Buscar todos os interesses de produtos (GET /product-interests)
export async function getProductInterests(): Promise<IProductInterest[]> {
  try {
    const response = await axios.get<IProductInterest[]>(`${baseURL}/product-interests`);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao buscar interesses de produtos:', error);
    throw error;
  }
}

// 2️⃣ Adicionar interesse em um produto (POST /product-interests)
export async function addProductInterest(interestData: IProductInterest): Promise<IProductInterest> {
  try {
    const response = await axios.post<IProductInterest>(`${baseURL}/product-interests`, interestData);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao adicionar interesse no produto:', error);
    throw error;
  }
}

// 3️⃣ Atualizar um interesse de produto (PUT /product-interests/:id)
export async function updateProductInterest(id: string, interestData: Partial<IProductInterest>): Promise<IProductInterest> {
  try {
    const response = await axios.put<IProductInterest>(`${baseURL}/product-interests/${id}`, interestData);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao atualizar interesse no produto:', error);
    throw error;
  }
}

// 4️⃣ Remover um interesse de produto (DELETE /product-interests/:id)
export async function removeProductInterest(id: string): Promise<void> {
  try {
    await axios.delete(`${baseURL}/product-interests/${id}`);
  } catch (error: any) {
    console.error('Erro ao remover interesse no produto:', error);
    throw error;
  }
}
