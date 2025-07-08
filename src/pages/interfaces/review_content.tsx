// src/data/review_content.tsx

export interface Review {
    id: number;
    titulo: string; // Título da avaliação
    contentId: number; // ID do conteúdo ao qual a avaliação está associada
    userId: number; // ID do usuário que fez a avaliação
    descricao: string; // Comentário ou descrição da avaliação
    avaliacao: number; // Avaliação de 1 a 5
  }
  
  export const reviews: Review[] = [
    {
      id: 1,
      titulo: 'Excelente Conteúdo!',
      contentId: 1,
      userId: 2,
      descricao: 'O curso de Introdução ao React foi muito esclarecedor e bem estruturado. Recomendo a todos que estão começando.',
      avaliacao: 5,
    },
    {
      id: 2,
      titulo: 'Bom Material',
      contentId: 2,
      userId: 1,
      descricao: 'O conteúdo sobre TypeScript foi útil, mas poderia incluir mais exemplos práticos.',
      avaliacao: 4,
    },
    {
      id: 3,
      titulo: 'Muito Informativo',
      contentId: 3,
      userId: 3,
      descricao: 'Aprendi bastante sobre desenvolvimento Full-Stack com Node.js. Ótima abordagem!',
      avaliacao: 4.5,
    },
    {
      id: 4,
      titulo: 'Design Responsivo Simplificado',
      contentId: 4,
      userId: 4,
      descricao: 'As aulas sobre CSS Flexbox foram fáceis de entender e aplicar nos meus projetos.',
      avaliacao: 4.2,
    },
    {
      id: 5,
      titulo: 'GraphQL Transformador',
      contentId: 5,
      userId: 2,
      descricao: 'Implementar GraphQL melhorou a performance das minhas APIs. Conteúdo bem explicado.',
      avaliacao: 4.7,
    },
    {
      id: 6,
      titulo: 'Conteúdo Avançado',
      contentId: 1,
      userId: 5,
      descricao: 'Gostaria de ver mais tópicos avançados no curso de React. Ótimo começo!',
      avaliacao: 4.3,
    },
    {
      id: 7,
      titulo: 'Ótima Didática',
      contentId: 2,
      userId: 3,
      descricao: 'A didática do curso de TypeScript facilita o entendimento mesmo para iniciantes.',
      avaliacao: 4.6,
    },
    {
      id: 8,
      titulo: 'Aplicações Práticas',
      contentId: 3,
      userId: 1,
      descricao: 'As aplicações práticas no curso de Node.js ajudaram muito no meu aprendizado.',
      avaliacao: 4.8,
    },
    {
      id: 9,
      titulo: 'Material Completo',
      contentId: 4,
      userId: 4,
      descricao: 'O material sobre Flexbox cobre todos os aspectos necessários para design responsivo.',
      avaliacao: 4.4,
    },
    {
      id: 10,
      titulo: 'Recomendo a Todos',
      contentId: 5,
      userId: 5,
      descricao: 'Se você quer aprender GraphQL, este curso é o caminho certo. Muito bem estruturado!',
      avaliacao: 5,
    },
    // Adicione mais avaliações conforme necessário
  ];
  