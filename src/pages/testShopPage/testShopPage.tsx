// src/pages/testShopPage.tsx
import React, { useState, useEffect } from 'react';
import { getCart, addItem, CartItem } from '../../services/test/Cart.tsx';

const TestShopPage: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [productId, setProductId] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [error, setError] = useState<string>('');

  const fetchCart = async () => {
    try {
      setLoading(true);
      const items = await getCart();
      setCart(items);
    } catch (err) {
      setError('Erro ao buscar carrinho');
    } finally {
      setLoading(false);
    }
  };

  const handleAddItem = async () => {
    try {
      await addItem(productId, quantity);
      fetchCart();
    } catch (err) {
      setError('Erro ao adicionar item');
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div>
      <h1>Test Shop Page</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <input 
          type="number" 
          placeholder="ID do Produto" 
          value={productId} 
          onChange={e => setProductId(Number(e.target.value))}
        />
        <input 
          type="number" 
          placeholder="Quantidade" 
          value={quantity} 
          onChange={e => setQuantity(Number(e.target.value))}
        />
        <button onClick={handleAddItem}>Adicionar Item</button>
      </div>
      <h2>Carrinho</h2>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.productId}>
              Produto {item.productId}: {item.quantity} unidade(s)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TestShopPage;
