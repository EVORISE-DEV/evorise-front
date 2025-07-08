// src/data/users.tsx

export interface User {
    id: number;
    name: string;
    email: string;
  }
  
  export const users: User[] = [
    {
      id: 1,
      name: 'João Silva',
      email: 'joao.silva@example.com',
    },
    {
      id: 2,
      name: 'Maria Souza',
      email: 'maria.souza@example.com',
    },
    {
      id: 3,
      name: 'Carlos Pereira',
      email: 'carlos.pereira@example.com',
    },
    {
      id: 4,
      name: 'Ana Oliveira',
      email: 'ana.oliveira@example.com',
    },
    {
      id: 5,
      name: 'Pedro Santos',
      email: 'pedro.santos@example.com',
    },
    // Adicione mais usuários conforme necessário
  ];
  