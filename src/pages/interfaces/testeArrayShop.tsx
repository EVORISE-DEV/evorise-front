// src/pages/shopPage/testeArrayShop.tsx

// Interface para Usuários
export interface User {
    id: number;
    name: string;
    email: string;
  }
  
  // Interface para Reviews
  export interface Review {
    id: number;
    userId: number; // Referência ao usuário que fez a review
    productId: number; // Referência ao produto que está sendo revisado
    rating: number; // Avaliação de 1 a 5
    comment: string;
  }
  
  // Array de 5 usuários fictícios
  export const users: User[] = [
    {
      id: 1,
      name: 'Carlos Silva',
      email: 'carlos.silva@example.com',
    },
    {
      id: 2,
      name: 'Ana Souza',
      email: 'ana.souza@example.com',
    },
    {
      id: 3,
      name: 'Pedro Oliveira',
      email: 'pedro.oliveira@example.com',
    },
    {
      id: 4,
      name: 'Mariana Costa',
      email: 'mariana.costa@example.com',
    },
    {
      id: 5,
      name: 'Luiz Fernandes',
      email: 'luiz.fernandes@example.com',
    },
  ];
  
  // Array de 10 Reviews fictícias
  export const reviews: Review[] = [
    {
      id: 1,
      userId: 1,
      productId: 1,
      rating: 5,
      comment: 'Tênis excelente! Muito confortável e leve.',
    },
    {
      id: 2,
      userId: 2,
      productId: 2,
      rating: 4,
      comment: 'Relógio muito funcional, mas o design poderia ser melhor.',
    },
    {
      id: 3,
      userId: 3,
      productId: 3,
      rating: 4.5,
      comment: 'Roupas técnicas de alta qualidade, recomendo.',
    },
    {
      id: 4,
      userId: 4,
      productId: 4,
      rating: 3.5,
      comment: 'Meias boas, porém poderiam ter mais cores.',
    },
    {
      id: 5,
      userId: 5,
      productId: 5,
      rating: 4,
      comment: 'Cinto de hidratação eficiente, muito útil durante as corridas.',
    },
    {
      id: 6,
      userId: 1,
      productId: 6,
      rating: 4.2,
      comment: 'Bonés estilosos e confortáveis.',
    },
    {
      id: 7,
      userId: 2,
      productId: 7,
      rating: 5,
      comment: 'Luvas perfeitas para corridas frias!',
    },
    {
      id: 8,
      userId: 3,
      productId: 8,
      rating: 3.8,
      comment: 'Capa de chuva atende o básico, mas poderia ser mais resistente.',
    },
    {
      id: 9,
      userId: 4,
      productId: 9,
      rating: 4.7,
      comment: 'Fones de ouvido ótimos, excelente qualidade de som.',
    },
    {
      id: 10,
      userId: 5,
      productId: 10,
      rating: 4.3,
      comment: 'Pulseira reflexiva aumenta a segurança nas corridas noturnas.',
    },
  ];
  