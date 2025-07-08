// src/data/ranking.tsx

export interface UserDistance {
    id: number;
    name: string;
    distance: number; // em quilômetros
    avatar: string; // URL da imagem do usuário
  }
  
  export interface UserPace {
    id: number;
    name: string;
    pace: string; // formato "min/km"
    avatar: string;
  }
  
  export interface UserScore {
    id: number;
    name: string;
    score: number;
    avatar: string;
  }
  
  export const distanceRanking: UserDistance[] = [
    { id: 1, name: 'Carlos Silva', distance: 120, avatar: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Mariana Souza', distance: 110, avatar: 'https://via.placeholder.com/50' },
    { id: 3, name: 'João Pereira', distance: 105, avatar: 'https://via.placeholder.com/50' },
    // Adicione mais usuários conforme necessário
  ];
  
  export const paceRanking3km: UserPace[] = [
    { id: 1, name: 'Ana Clara', pace: '4:30', avatar: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Pedro Henrique', pace: '4:45', avatar: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Luiza Martins', pace: '5:00', avatar: 'https://via.placeholder.com/50' },
    // Adicione mais usuários conforme necessário
  ];
  
  export const paceRanking5km: UserPace[] = [
    { id: 1, name: 'Gustavo Lima', pace: '4:20', avatar: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Fernanda Alves', pace: '4:35', avatar: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Rafael Gomes', pace: '4:50', avatar: 'https://via.placeholder.com/50' },
    // Adicione mais usuários conforme necessário
  ];
  
  export const paceRanking10km: UserPace[] = [
    { id: 1, name: 'Sofia Ribeiro', pace: '4:10', avatar: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Leonardo Costa', pace: '4:25', avatar: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Beatriz Dias', pace: '4:40', avatar: 'https://via.placeholder.com/50' },
    // Adicione mais usuários conforme necessário
  ];
  
  export const scoreRanking: UserScore[] = [
    { id: 1, name: 'Miguel Rocha', score: 95, avatar: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Isabela Ferreira', score: 90, avatar: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Daniela Barbosa', score: 88, avatar: 'https://via.placeholder.com/50' },
    // Adicione mais usuários conforme necessário
  ];
  