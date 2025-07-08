// src/pages/SignPage.tsx

import React, { useState } from 'react';
import styles from './signPage.module.css'; // Arquivo de estilos específico para a página SignPage
import SignImage from '../../assets/svg/imageSign.svg'
import img1 from '../../assets/svg/ix_route-target.svg'
import img2 from '../../assets/svg/material-symbols_monitoring-rounded.svg'
import img3 from '../../assets/svg/heroicons_trophy-16-solid.svg'
import img4 from '../../assets/svg/Group 53.svg'
import { SignDoubt } from './components/signDoubt';

export const SignPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('Free');

  const handlePlanClick = (plan: string) => {
    setSelectedPlan(plan);
  };

  return (
    <div className={styles.sign_page}>
      <section>
        <div className={styles.sign_page_start}>
          <div className={styles.sign_page_start_left}>
              <p>
            ENTRE PARA A EVORISE – <span className={styles.sign_page_colored}>DE R$69/MÊS POR R$49/MÊS</span>  E GANHE 
              O GUIA DEFINITIVO PARA EVOLUIR NA CORRIDA EM 2025!
              </p>
            <div>
              <a href="/pagamento"><button>Quero aproveitar o desconto</button></a>
              
            </div>
          </div>
          <div className={styles.sign_page_start_right}>
            <div>
              <img src={SignImage} alt="signImage" />
            </div>
          </div>
        </div>
        <div className={styles.sign_page_trail}>
          <div className={styles.sign_page_trail_container}>
            <div className={styles.sign_page_trail_container_info}>
              <div><img src={img1} alt="img1" /></div>
              <div><h5>Trilha de Treinos</h5></div>
              <div><p>Nossa metodologia transforma sua jornada na corrida em um caminho progressivo</p></div>
            </div>
            <div className={styles.sign_page_trail_container_info} >
              <div><img src={img2} alt="img2" /></div>
              <div><h5>Monitoramento de Desempenho</h5></div>
              <div><p>Nossa metodologia transforma sua jornada na corrida em um caminho progressivo</p></div>
            </div>
            <div className={styles.sign_page_trail_container_info} >
              <div><img src={img3} alt="img3" /></div>
              <div><h5>Desafios e Gamificação</h5></div>
              <div><p>Nossa metodologia transforma sua jornada na corrida em um caminho progressivo</p></div>
            </div>
            <div className={styles.sign_page_trail_container_info} >
              <div><img src={img4} alt="img4" /></div>
              <div><h5>Acesso a Eventos e Treinos Presenciais</h5></div>
              <div><p>Nossa metodologia transforma sua jornada na corrida em um caminho progressivo</p></div>
            </div>
          </div>
        </div>

        <div className={styles.sign_page_for_who}>
          <div className={styles.sign_page_for_who_title}>
            <h3>Pra quem é a Evorise</h3>
          </div>
          <div className={styles.sign_page_for_who_card}>
            <div className={styles.sign_page_for_who_card_1}>
              <h5>Saúde e Qualidade de Vida</h5>
              <p>Para aqueles que querem transformar a corrida em um estilo de vida.
                 Nossa metodologia promove bem-estar físico e mental,
                 combinando treinos personalizados, orientação nutricional e suporte para uma rotina equilibrada.</p>
            </div>
            <div className={styles.sign_page_for_who_card_2}>
              <h5>Evolução Pessoal e Superação</h5>
              <p>Para aqueles que têm o desejo incessante de se desafiar, superar seus limites e 
                alcançar um nível superior na corrida, a EVORISE é a parceira ideal. 
                Com treinos cuidadosamente estruturados e um acompanhamento especializado, 
                a EVORISE oferece o suporte necessário para você conquistar novos patamares de desempenho, 
                resistência e mentalidade. Cada passo é um avanço rumo à sua evolução contínua, 
                e nossa missão é garantir que você ultrapasse suas próprias expectativas, 
                conquistando resultados extraordinários. Seja qual for o seu objetivo, 
                estamos aqui para guiar sua jornada rumo ao sucesso.</p>
            </div>
            <div className={styles.sign_page_for_who_card_3}>
              <h5>Performance e Competição</h5>
              <p>Se você deseja melhorar seus tempos, se preparar para provas e competir com outros corredores,
                 a EVORISE oferece desafios, rankings e estratégias avançadas para você atingir sua melhor marca 
                 e se destacar no esporte.</p>
            </div>
          </div>
        </div>

        <div className={styles.sign_page_for_only}>
          <div className={styles.sign_page_for_only_title}><h3>TUDO ISSO POR APENAS</h3></div>
          <div className={styles.sign_page_for_only_price}>
            <div className={styles.sign_page_for_only_price_text}>
              <div className={styles.simbol}>
                <p>R$</p>
              </div>
              <div className={styles.number}>
                <p>49</p>
              </div>
              <div className={styles.number_text}>
                <span>/ mês</span>
                <p>plano anual</p>
              </div>
            </div>
          </div>
          <a href="/pagamento"><button className={styles.sign_page_for_only_button}>Quero me inscrever</button></a>
          
        </div>

        <div className={styles.sign_page_doubt}>
          <div className={styles.sign_page_for_only_doubt}><h4>TIRE SUAS DÚVIDAS </h4></div>

          <SignDoubt></SignDoubt>
        </div>

      </section>
    </div>
  );
};
