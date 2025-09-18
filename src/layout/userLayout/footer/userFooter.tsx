// src/components/footer/footer.tsx
import React from 'react';
import styles from './userFooter.module.css'; 
import logo from '../../../assets/images/evorise-1.png';
import insta from '../../../assets/svg/basil_instagram-outline.svg';
import linkedin from '../../../assets/svg/mdi_linkedin.svg';
import X from '../../../assets/svg/prime_twitter.svg';
import youtube from '../../../assets/svg/icomoon-free_youtube.svg';

export function UserFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.evorise}>
        <div className={styles.img_container}>
          <img src={logo} alt="logo" width={180}/>
          <div className={styles.socials}>
            <a href="#">
              <img src={insta} alt="logo" width={25}/>
            </a>
            <a href="#">
              <img src={linkedin} alt="logo" width={25}/>
            </a>
            <a href="#">
              <img src={X} alt="logo" width={25}/>
            </a>
            <a href="#">
              <img src={youtube} alt="logo" width={25}/>
            </a>
          </div>
        </div>
        <div className={styles.link_help}>
          <a href="#">Central de ajuda</a>
        </div>
      </div>
      <hr />
      <div className={styles.copy}>
        <p>&copy; {new Date().getFullYear()} Evorise | Todos os direitos reservados.</p>
        <div className={styles.link}>
          <a href="#">Termos de Uso</a>
          <a href="#">Políticas de Privacidade</a>
        </div>
      </div>
    </footer>
  );
}
