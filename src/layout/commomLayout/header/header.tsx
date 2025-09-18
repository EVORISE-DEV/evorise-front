import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import '../../../global.d.tsx';
import logo from '../../../assets/images/group-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import LoginPopup from './../../../components/loginPopUp/loginPopUp.tsx';
import RegisterPopup from '../../../components/registerPopUp/registerPopUp.tsx';
import { useAuth } from 'src/context/AuthContext.tsx';
import styles from './header.module.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);  
  const { user, loading, logout } = useAuth(); // Importando o hook useAuth

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

      <Link to="/" className={styles.logo_link}>
        <img src={logo} alt="Logo Evorise" className="logo" />
      </Link>

      
      <nav className={styles.middle_menu}>
        <Link to="/calendar">Calendário</Link>
        <Link to="/signature">Assinatura</Link>
        <Link to="/content">Conteúdo</Link>
        <Link to="/ranking">Ranking</Link>
        <Link to="/shop">Loja</Link>
      </nav>

      <div className="nav-buttons">
        {!user ? (
          <>
                    <button className="button" onClick={openLoginPopup}>Sou Aluno</button>
                    <button className="button2" onClick={openRegisterPopup}>Comece Agora</button>
          </>
        ) : (
          <>
            <Link to="/personalPage" className="button">Área do Usuário</Link>
            <button onClick={logout }  id="sair">Sair</button>
          </>
        )}
      </div>

      {/* Ícone do menu hambúrguer para telas pequenas */}
      <button className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
      </button>

      {/* Menu lateral responsivo */}
      <div className={`sidebar-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Início</Link>
        <Link to="/calendar" onClick={toggleMenu}>Calendário</Link>
        <Link to="/signature" onClick={toggleMenu}>Assinatura</Link>
        <Link to="/content" onClick={toggleMenu}>Conteúdo</Link>
        <Link to="/ranking" onClick={toggleMenu}>Ranking</Link>
        <Link to="/shop" onClick={toggleMenu}>Loja</Link>

        {!user ? (
          <>
            <button className="button" onClick={openLoginPopup}>Sou Aluno</button>
            <button className="button2" onClick={openRegisterPopup}>Comece Agora</button>
          </>
        ) : (
          <>
            <Link to="/personalPage" onClick={toggleMenu} className="button">Área do Usuário</Link>
            <button onClick={logout} className="button2">Sair da conta</button>
          </>
        )}
      </div>

      <LoginPopup isOpen={isLoginOpen} closePopup={closeLoginPopup} openRegister={openRegisterPopup} />
      <RegisterPopup isOpen={isRegisterOpen} closePopup={closeRegisterPopup} openLogin={openLoginPopup} />
     

      
    </header>
  );
}