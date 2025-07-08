// src/pages/RankingPage.tsx

import React, { useState } from 'react';
import { 
  distanceRanking, 
  paceRanking3km, 
  paceRanking5km, 
  paceRanking10km, 
  scoreRanking 
} from '../interfaces/ranking.tsx';
import './rankingPage.css';

export const RankingPage: React.FC = () => {
  const [selectedPace, setSelectedPace] = useState<string>('3km');

  const handlePaceClick = (pace: string) => {
    setSelectedPace(pace);
  };

  // Seleciona o ranking de pace conforme a seleção do usuário
  const getSelectedPaceRanking = () => {
    switch(selectedPace) {
      case '3km':
        return paceRanking3km;
      case '5km':
        return paceRanking5km;
      case '10km':
        return paceRanking10km;
      default:
        return paceRanking3km;
    }
  };

  return (
    <div className="A-ranking-page">
    </div>
  );
};
