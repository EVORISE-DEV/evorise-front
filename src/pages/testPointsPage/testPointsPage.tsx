// src/pages/TestPointsPage.tsx
import React, { useState, useEffect } from 'react';
import { addPoints, getRanking } from '../../services/test/Points.tsx';
import { RankingItem } from '../../services/test/Points.tsx';


const TestPointsPage: React.FC = () => {
    const [pointsToAdd, setPointsToAdd] = useState<number>(0);
    const [ranking, setRanking] = useState<RankingItem[]>([]);
    const [error, setError] = useState('');
  
    // Busca o ranking ao montar o componente
    useEffect(() => {
      fetchRanking();
    }, []);
  
    async function fetchRanking() {
      try {
        const rankingData = await getRanking();
        setRanking(rankingData);
      } catch (err) {
        console.error(err);
        setError('Erro ao buscar ranking.');
      }
    }
  
    async function handleAddPoints() {
      try {
        await addPoints(pointsToAdd);
        fetchRanking();
      } catch (err) {
        console.error(err);
        setError('Erro ao adicionar pontos.');
      }
    }
  
    return (
      <div>
        <h1>Test Points Page</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
        <div>
          <label htmlFor="points">Quantidade de Pontos:</label>
          <input
            id="points"
            type="number"
            value={pointsToAdd}
            onChange={(e) => setPointsToAdd(Number(e.target.value))}
          />
          <button onClick={handleAddPoints}>Adicionar Pontos</button>
        </div>
        
        <h2>Ranking de Usuários</h2>
        <ul>
          {ranking.map((item, index) => (
            <li key={index}>
              Usuário: {item.member} - Pontos: {item.score}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TestPointsPage;