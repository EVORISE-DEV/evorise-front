import React, { useState } from 'react';
import './userHeader.css';
import '../../../global.d.tsx';
import logo from '../../../assets/images/group-2.png';
//import logo2 from '../../assets/images/evorise-1.png';
//import logo3 from '../../assets/images/evorise-2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

export function UserHeader() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="main-header">
      {/* Logo à esquerda */}
      <a href="/" className="logo-link">
        <img src={logo} alt="Logo3" className="logo" />
      </a>

      {/* Links no centro (ocultos em telas menores) */}
      <nav className="middle-menu">
      <a href="/assinatura">Calendário</a>
        <a href="/assinatura">Assinatura</a>
        <a href="/conteudo">Conteúdo</a>
        <a href="/ranking">Ranking</a>
        <a href="/loja">Loja</a>
      </nav>

      {/* Botões à direita */}
      <div className="nav-buttons">
        <a href="/login" className="button">Login</a>
        <a href="/register" className="button2">Comece Agora</a>
      </div>

      {/* Ícone do menu hambúrguer para telas pequenas */}
      <button className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
      </button>

      {/* Menu lateral */}
      <div className={`sidebar-menu ${isMenuOpen ? 'open' : ''}`}>
        <a href="/assinatura" onClick={toggleMenu}>Assinatura</a>
        <a href="/conteudo" onClick={toggleMenu}>Conteúdo</a>
        <a href="/ranking" onClick={toggleMenu}>Ranking</a>
        <a href="/loja" onClick={toggleMenu}>Loja</a>
        <a href="/login" onClick={toggleMenu}>Sou Aluno</a>
        <a href="/register" onClick={toggleMenu} className="button2">Comece Agora</a>
      </div>
    </header>
  );
}
