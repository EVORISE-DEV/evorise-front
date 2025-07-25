// src/data/contents.tsx

export interface Content {
  id: number;
  titulo: string;
  assuntos: string[];
  descricao: string;
  avaliacao: number; // Avaliação de 1 a 5
  image?: string; // URL da imagem do curso (opcional)
  categoria: string; // Nova propriedade para categoria
}

export const contents: Content[] = [
  {
    id: 1,
    titulo: 'Corrida para Iniciantes',
    assuntos: ['Técnicas de Corrida', 'Equipamentos Básicos', 'Planejamento de Treinos'],
    descricao: 'Este curso é perfeito para quem está começando no mundo da corrida. Aprenda as técnicas básicas, escolha os equipamentos certos e planeje seus treinos de forma eficiente.',
    avaliacao: 4.5,
    image: 'https://via.placeholder.com/300x200.png?text=Corrida+para+Iniciantes',
    categoria: 'Técnicas de Corrida',
  },
  {
    id: 2,
    titulo: 'Nutrição para Corredores',
    assuntos: ['Dieta Balanceada', 'Suplementação', 'Hidratação'],
    descricao: 'Descubra como uma alimentação adequada pode melhorar seu desempenho na corrida. Abordaremos dietas balanceadas, a importância da suplementação e estratégias de hidratação.',
    avaliacao: 4.7,
    image: 'https://via.placeholder.com/300x200.png?text=Nutri%C3%A7%C3%A3o+para+Corredores',
    categoria: 'Nutrição e Saúde',
  },
  {
    id: 3,
    titulo: 'Treinamento de Velocidade',
    assuntos: ['Sprints', 'Interval Training', 'Aprimoramento da Velocidade'],
    descricao: 'Aprimore sua velocidade com técnicas de treinamento específicas. Este curso cobre sprints, interval training e outras estratégias para aumentar sua rapidez nas corridas.',
    avaliacao: 4.6,
    image: 'https://via.placeholder.com/300x200.png?text=Treinamento+de+Velocidade',
    categoria: 'Treinamento Avançado',
  },
  {
    id: 4,
    titulo: 'Prevenção de Lesões na Corrida',
    assuntos: ['Alongamentos', 'Fortalecimento Muscular', 'Técnicas de Recuperação'],
    descricao: 'Aprenda a prevenir lesões comuns na corrida através de alongamentos adequados, fortalecimento muscular e técnicas eficazes de recuperação.',
    avaliacao: 4.8,
    image: 'https://via.placeholder.com/300x200.png?text=Preven%C3%A7%C3%A3o+de+Les%C3%B5es',
    categoria: 'Prevenção de Lesões',
  },
  {
    id: 5,
    titulo: 'Corrida de Endurance',
    assuntos: ['Treinamento Longo', 'Resistência Mental', 'Gestão de Energia'],
    descricao: 'Desenvolva sua resistência física e mental para corridas de longa distância. Este curso aborda estratégias de treinamento longo, gestão de energia e fortalecimento da mente.',
    avaliacao: 4.4,
    image: 'https://via.placeholder.com/300x200.png?text=Corrida+de+Endurance',
    categoria: 'Treinamento Avançado',
  },
  {
    id: 6,
    titulo: 'Técnicas de Respiração para Corredores',
    assuntos: ['Controle da Respiração', 'Oxigenação', 'Redução da Fadiga'],
    descricao: 'Melhore sua eficiência respiratória durante a corrida. Aprenda técnicas de controle da respiração, otimização da oxigenação e redução da fadiga.',
    avaliacao: 4.5,
    image: 'https://via.placeholder.com/300x200.png?text=T%C3%A9cnicas+de+Respira%C3%A7%C3%A3o',
    categoria: 'Técnicas de Corrida',
  },
  {
    id: 7,
    titulo: 'Planejamento de Treino para Maratonas',
    assuntos: ['Calendário de Treinos', 'Ajustes de Intensidade', 'Recuperação'],
    descricao: 'Prepare-se para uma maratona com um planejamento de treino detalhado. Este curso inclui a criação de um calendário de treinos, ajustes de intensidade e estratégias de recuperação.',
    avaliacao: 4.9,
    image: 'https://via.placeholder.com/300x200.png?text=Planejamento+para+Maratonas',
    categoria: 'Treinamento Avançado',
  },
  {
    id: 8,
    titulo: 'Tecnologia na Corrida',
    assuntos: ['Wearables', 'Aplicativos de Treino', 'Análise de Desempenho'],
    descricao: 'Explore como a tecnologia pode aprimorar sua experiência de corrida. Aprenda sobre wearables, aplicativos de treino e ferramentas de análise de desempenho.',
    avaliacao: 4.3,
    image: 'https://via.placeholder.com/300x200.png?text=Tecnologia+na+Corrida',
    categoria: 'Tecnologia na Corrida',
  },
  {
    id: 9,
    titulo: 'Mentalidade de Corredor',
    assuntos: ['Motivação', 'Foco', 'Superação de Desafios'],
    descricao: 'Desenvolva uma mentalidade forte para enfrentar os desafios da corrida. Este curso cobre técnicas de motivação, foco e superação de obstáculos.',
    avaliacao: 4.7,
    image: 'https://via.placeholder.com/300x200.png?text=Mentalidade+de+Corredor',
    categoria: 'Mentalidade e Motivação',
  },
  {
    id: 10,
    titulo: 'Corrida em Terrenos Variados',
    assuntos: ['Trail Running', 'Corrida em Subidas', 'Corrida em Descidas'],
    descricao: 'Aprenda a adaptar sua corrida a diferentes terrenos. Este curso inclui técnicas para trail running, corridas em subidas e descidas.',
    avaliacao: 4.6,
    image: 'https://via.placeholder.com/300x200.png?text=Corrida+em+Terrenos+Variados',
    categoria: 'Técnicas de Corrida',
  },
  {
    id: 11,
    titulo: 'Biomecânica da Corrida',
    assuntos: ['Postura', 'Movimento dos Pés', 'Impacto no Corpo'],
    descricao: 'Entenda a biomecânica por trás da corrida para melhorar sua técnica e prevenir lesões. Estude postura, movimento dos pés e impacto no corpo.',
    avaliacao: 4.8,
    image: 'https://via.placeholder.com/300x200.png?text=Biomec%C3%A2nica+da+Corrida',
    categoria: 'Biomecânica',
  },
  {
    id: 12,
    titulo: 'Corrida Intervalada',
    assuntos: ['HIIT', 'Sprints', 'Recuperação Ativa'],
    descricao: 'Maximize seu desempenho com treinos intervalados. Este curso aborda High-Intensity Interval Training (HIIT), sprints e técnicas de recuperação ativa.',
    avaliacao: 4.5,
    image: 'https://via.placeholder.com/300x200.png?text=Corrida+Intervalada',
    categoria: 'Treinamento Avançado',
  },
  {
    id: 13,
    titulo: 'Corrida para Perda de Peso',
    assuntos: ['Calorias', 'Metabolismo', 'Combinação com Dieta'],
    descricao: 'Utilize a corrida como ferramenta para perda de peso. Aprenda sobre queima de calorias, aumento do metabolismo e como combinar com uma dieta balanceada.',
    avaliacao: 4.4,
    image: 'https://via.placeholder.com/300x200.png?text=Corrida+para+Perda+de+Peso',
    categoria: 'Nutrição e Saúde',
  },
  {
    id: 14,
    titulo: 'Corrida Noturna',
    assuntos: ['Segurança', 'Equipamentos Adequados', 'Técnicas de Iluminação'],
    descricao: 'Descubra como correr à noite de forma segura e eficaz. Este curso cobre equipamentos adequados, técnicas de iluminação e estratégias de segurança.',
    avaliacao: 4.3,
    image: 'https://via.placeholder.com/300x200.png?text=Corrida+Noturna',
    categoria: 'Segurança',
  },
  {
    id: 15,
    titulo: 'Alongamentos para Corredores',
    assuntos: ['Flexibilidade', 'Prevenção de Lesões', 'Rotinas de Alongamento'],
    descricao: 'Melhore sua flexibilidade e previna lesões com rotinas de alongamento específicas para corredores. Aprenda os melhores exercícios de alongamento para antes e depois das corridas.',
    avaliacao: 4.6,
    image: 'https://via.placeholder.com/300x200.png?text=Alongamentos+para+Corredores',
    categoria: 'Prevenção de Lesões',
  },
  {
    id: 16,
    titulo: 'Corrida em Altitude',
    assuntos: ['Adaptação', 'Oxigenação', 'Técnicas Especiais'],
    descricao: 'Prepare-se para correr em altitudes elevadas. Este curso aborda a adaptação do corpo, técnicas de oxigenação e estratégias especiais para corridas em altitude.',
    avaliacao: 4.5,
    image: 'https://via.placeholder.com/300x200.png?text=Corrida+em+Altitude',
    categoria: 'Técnicas de Corrida',
  },
  {
    id: 17,
    titulo: 'Equipamentos Essenciais para Corredores',
    assuntos: ['Tênis de Corrida', 'Roupas Técnicas', 'Acessórios'],
    descricao: 'Conheça os equipamentos essenciais para uma corrida confortável e eficiente. Este curso cobre a escolha de tênis de corrida, roupas técnicas e acessórios úteis.',
    avaliacao: 4.7,
    image: 'https://via.placeholder.com/300x200.png?text=Equipamentos+Essenciais',
    categoria: 'Equipamentos',
  },
  {
    id: 18,
    titulo: 'Análise de Desempenho na Corrida',
    assuntos: ['Monitoramento', 'Dados de Corrida', 'Ajustes de Treino'],
    descricao: 'Aprenda a analisar seu desempenho na corrida através do monitoramento e interpretação de dados. Use essas informações para fazer ajustes eficazes em seu treino.',
    avaliacao: 4.4,
    image: 'https://via.placeholder.com/300x200.png?text=An%C3%A1lise+de+Desempenho',
    categoria: 'Tecnologia na Corrida',
  },
  {
    id: 19,
    titulo: 'Corrida e Saúde Mental',
    assuntos: ['Redução do Estresse', 'Bem-Estar', 'Mindfulness'],
    descricao: 'Descubra como a corrida pode beneficiar sua saúde mental. Este curso explora a redução do estresse, o aumento do bem-estar e a prática de mindfulness através da corrida.',
    avaliacao: 4.8,
    image: 'https://via.placeholder.com/300x200.png?text=Corrida+e+Sa%C3%BAde+Mental',
    categoria: 'Mentalidade e Motivação',
  },
  {
    id: 20,
    titulo: 'Planejamento de Corridas de Obstáculos',
    assuntos: ['Treinamento Funcional', 'Técnicas de Superação', 'Estratégias de Corrida'],
    descricao: 'Prepare-se para corridas de obstáculos com um planejamento de treino específico. Aprenda técnicas de superação, treinamento funcional e estratégias para enfrentar os obstáculos com confiança.',
    avaliacao: 4.6,
    image: 'https://via.placeholder.com/300x200.png?text=Corrida+de+Obst%C3%A1culos',
    categoria: 'Treinamento Avançado',
  },
];
