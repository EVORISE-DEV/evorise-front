import React from "react";
import styles from "./section4.module.css";

export const Section4: React.FC = () => {
    return (
      <section id={styles.section5} >
          <div id={styles.guarantee}>
            <h2 className={styles.h2_7}>7</h2>
            <h2  className={styles.h2_guarantee}> dias de garantia</h2>
          </div>
          <div className={styles.section5_guarantee}>
            <div>
              <p>Entre, acesse o conteúdo e se não gostar, não se adaptar ou 
                entender que não é o momento certo para você, não se preocupe. 
                Você pode solicitar o reembolso dentro do prazo de
                 7 dias após a confirmação da sua compra e nós devolveremos 
                 integralmente o valor investido. Simples assim.</p>
            </div>
            <button>ASSINE AGORA</button>
          </div>

      </section>
    );
};