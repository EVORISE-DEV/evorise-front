import React, { useState } from 'react';
import styles from './userHeader.module.css';
import '../../../global.d.tsx';
import logo from '../../../assets/images/evorise-1.png';
import shield from '../../../assets/svg/shield.svg';
import sheet from '../../../assets/svg/sheet.svg';
import book from '../../../assets/svg/book.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from 'src/context/AuthContext.tsx';
import person from '../../../assets/svg/Group79.svg';
import LoginPopup from 'src/components/loginPopUp/loginPopUp.tsx';
import RegisterPopup from 'src/components/registerPopUp/registerPopUp.tsx';

export function UserHeader() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);  
  const { user , logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const openLoginPopup = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  };
  const closeLoginPopup = () => setIsLoginOpen(false);
  const openRegisterPopup = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
  };
  const closeRegisterPopup = () => setIsRegisterOpen(false);

  return (
    <header className={styles.main_header}>

      <nav className={styles.middle_menu}>
      <a href="/" className={styles.logo_link}>
        <img src={logo} alt="Logo3"  />
      </a>
      <a href="/content" className={styles.link}>
        <img src={book} alt="iconPeson" width={30}/>
        Aprenda
      </a>
      <a href="/spreadsheet" className={styles.link}>
        <img src={sheet} alt="iconPeson" width={30}/>
        Planilha
      </a>
        <a href="/leagues" className={styles.link}>
          <img src={shield} alt="iconPeson" width={30}/>
          Ligas
        </a>
      </nav>

      
      <div className="nav-buttons">
        {!user ? 
        (
          <div className={styles.btn}>
            <button className={styles.btn_login} onClick={openLoginPopup}>Sou Aluno</button>
            <button className={styles.btn_register} onClick={openRegisterPopup}>Comece Agora</button>
          </div>
        ) : 
        (
          <div>
            <a href="/personalPage" className={styles.link}>
              <img src={person} alt="iconPeson" width={30}/>
              {user?.name}
            </a>
          </div>
        )}
        <LoginPopup isOpen={isLoginOpen} closePopup={closeLoginPopup} openRegister={openRegisterPopup} />
        <RegisterPopup isOpen={isRegisterOpen} closePopup={closeRegisterPopup} openLogin={openLoginPopup} />
      </div>

     
      <button className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
      </button>

      
      <div className={`sidebar-menu ${isMenuOpen ? 'open' : ''}`}>
        <a href="/content" onClick={toggleMenu}>Aprenda</a>
        <a href="/spreadsheet" onClick={toggleMenu}>Planilhas</a>
        <a href="/leagues" onClick={toggleMenu}>Ligas</a>
        {!user ? 
        (
          <div className={styles.btn}>
            <button className={styles.btn_login} onClick={openLoginPopup}>Sou Aluno</button>
            <button className={styles.btn_register} onClick={openRegisterPopup}>Comece Agora</button>
            <LoginPopup isOpen={isLoginOpen} closePopup={closeLoginPopup} openRegister={openRegisterPopup} />
            <RegisterPopup isOpen={isRegisterOpen} closePopup={closeRegisterPopup} openLogin={openLoginPopup} />
          </div>
        ) : 
        (
          <div>
            <a href="/personalPage" className={styles.link}>
            Área do Usuário
            </a>
            <br />
            <a  onClick={logout}>Sair</a>
          </div>
        )}
      </div>
    </header>
  );
}
