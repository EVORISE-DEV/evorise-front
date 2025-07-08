import React, { useState } from 'react';
import styles from './signDoubt.module.css';

const doubts = [
  {
    question: "Como funcionam as trilhas de treinos da EVORISE?",
    answer: "Nossas trilhas são estruturadas por fases, permitindo evolução progressiva. Cada fase libera novos desafios conforme seu desempenho."
  },
  {
    question: "Os treinos são para todos os níveis de corredores?",
    answer: "Sim! As trilhas são adaptadas para todos os níveis, desde iniciantes até avançados."
  },
  {
    question: "Como funcionam os desafios e o ranking?",
    answer: "Os desafios são lançados periodicamente, e o ranking é atualizado automaticamente conforme os resultados dos participantes."
  },
  {
    question: "A EVORISE tem treinos presenciais?",
    answer: "Sim! Além dos treinos online, promovemos eventos e treinos presenciais em várias cidades."
  },
  {
    question: "Preciso de um relógio GPS ou app específico para participar?",
    answer: "Não é obrigatório, mas recomendamos o uso de um app ou relógio para acompanhar seu progresso com maior precisão."
  },
  {
    question: "A EVORISE oferece suporte técnico e orientação?",
    answer: "Sim, você conta com uma equipe especializada pronta para tirar dúvidas e dar orientações sempre que precisar."
  }
];

export const SignDoubt: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    return (
        <div className={styles.sign_doubt}>
          <ul className={styles.sign_doubt_list}>
            {doubts.map((item, idx) => (
              <li key={idx} className={styles.sign_doubt_item}>
                <button
                  className={styles.sign_doubt_question}
                  onClick={() => setSelectedIndex(idx === selectedIndex ? null : idx)}
                  aria-expanded={selectedIndex === idx}
                >
                  {item.question}
                </button>
                {selectedIndex === idx && (
                  <div className={styles.sign_doubt_answer}>
                    {item.answer}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
    );
};
