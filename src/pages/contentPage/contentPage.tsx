import React, { useState } from "react";
import banner1 from '../../assets/images/banner3.webp';
import styles from './ContentPage.module.css';


export function ContentPage() {

  const [loading, setLoading] = useState<boolean>(true);


  return(
    <div className={styles.page}>
      <div className={styles.banner}>
        <img src={banner1} alt="banner1" loading="lazy"/>

      </div>
      <div className={styles.content}>
        <div>
          <h3>Recomendados para você</h3>
        </div>
        <div>
          <h3>Acompanhe seu rendimento</h3>
        </div>
        <div>
          <h3>Aulas</h3>
          <p>Aulas teóricas e práticas para todos os níveis de atleta.</p>
        </div>
        <div>
          <h3>Trilha de conhecimento</h3>
          <p>Encontre os melhores conteúdos de acordo com o seu nível de investidor.</p>
        </div>
        <div>
          <h3>EVOREADS</h3>
          <p>Entre numa imersão de conhecimento sobre os melhores livros para a sua performance.</p>
        </div>
      </div>
    </div>
  );
}