import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import '../../../global.d.tsx';
import logo from '../../../assets/images/group-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { isAuthenticated } from '../../../services/session/SessionService.tsx';
import LoginPopup from './../../../components/loginPopUp/loginPopUp.tsx';
import RegisterPopup from '../../../components/registerPopUp/registerPopUp.tsx';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = isAuthenticated(); // Chamando a função corretamente
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);  

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
    <header className="main-header">
      {/* Logo à esquerda */}
      <Link to="/" className="logo-link">
        <img src={logo} alt="Logo Evorise" className="logo" />
      </Link>

      {/* Links no centro (ocultos em telas menores) */}
      <nav className="middle-menu">
        <Link to="/calendario">Calendário</Link>
        <Link to="/assinatura">Assinatura</Link>
        <Link to="/conteudo">Conteúdo</Link>
        <Link to="/ranking">Ranking</Link>
        <Link to="/loja">Loja</Link>
      </nav>

      {/* Botões à direita (condicional para usuários autenticados) 
            <Link to="/login" className="button" onClick={openLoginPopup}>Login</Link>
            <Link to="/register" className="button2" onClick={openRegisterPopup}>Comece Agora</Link>
      */}
      <div className="nav-buttons">
        {!isLoggedIn ? (
          <>
                    <button className="button" onClick={openLoginPopup}>Sou Aluno</button>
                    <button className="button2" onClick={openRegisterPopup}>Comece Agora</button>
          </>
        ) : (
          <>
            <Link to="/personalPage" className="button">Área do Usuário</Link>
            <button onClick={() => { localStorage.clear(); window.location.reload(); }}  id="sair">Sair</button>
          </>
        )}
      </div>

      {/* Ícone do menu hambúrguer para telas pequenas */}
      <button className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
      </button>

      {/* Menu lateral responsivo */}
      <div className={`sidebar-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/calendario" onClick={toggleMenu}>Calendário</Link>
        <Link to="/assinatura" onClick={toggleMenu}>Assinatura</Link>
        <Link to="/conteudo" onClick={toggleMenu}>Conteúdo</Link>
        <Link to="/ranking" onClick={toggleMenu}>Ranking</Link>
        <Link to="/loja" onClick={toggleMenu}>Loja</Link>

        {!isLoggedIn ? (
          <>
            <button className="button" onClick={openLoginPopup}>Sou Aluno</button>
            <button className="button2" onClick={openRegisterPopup}>Comece Agora</button>
          </>
        ) : (
          <>
            <Link to="/personalPage" onClick={toggleMenu} className="button">Área do Usuário</Link>
            <button onClick={() => { localStorage.clear(); window.location.reload(); }} className="button2">Sair da conta</button>
          </>
        )}
      </div>

      <LoginPopup isOpen={isLoginOpen} closePopup={closeLoginPopup} openRegister={openRegisterPopup} />
      <RegisterPopup isOpen={isRegisterOpen} closePopup={closeRegisterPopup} openLogin={openLoginPopup} />
     

      
    </header>
  );
}
