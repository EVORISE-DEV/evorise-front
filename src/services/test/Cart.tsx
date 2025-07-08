// src/services/Cart.tsx
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3333';

export interface CartItem {
  productId: number;
  quantity: number;
}

// Função para pegar o token armazenado
const getAuthHeaders = () => {
    const token = localStorage.getItem('token'); 
    return { headers: { Authorization: `Bearer ${token}` } };
};

// Recupera o carrinho do usuário e converte o objeto em array
export const getCart = async (): Promise<CartItem[]> => {
    const response = await axios.get(`${API_BASE_URL}/cart`, getAuthHeaders());
    const cartObject = response.data.cart;
    const cartArray: CartItem[] = Object.keys(cartObject).map(productId => ({
      productId: Number(productId),
      quantity: Number(cartObject[productId]),
    }));
    return cartArray;
  };

// Adiciona um item ao carrinho
export const addItem = async (productId: number, quantity: number): Promise<void> => {
  await axios.post(`${API_BASE_URL}/cart/add`, { productId, quantity }, getAuthHeaders());
};
