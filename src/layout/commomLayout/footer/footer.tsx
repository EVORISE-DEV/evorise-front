// src/components/footer/footer.tsx
import React from 'react';
import './footer.css'; // Se você tiver estilos específicos para o Footer
import logoEvo from '../../../assets/images/group-1.png';

export function Footer() {
  return (
    <footer className="footer">
            <div className="page-bottom">
              <img src={logoEvo} alt="Logo Evorise" className="logo" />
              <div className="page-bottom-ul">
                <ul>
                  <li><strong>Institucional</strong></li>
                  <li><a href="">Quem somos</a></li>
                  <li><a href="">Trabalhe conosco </a></li>
                  <li><a href="">Contato</a></li>
                  <li><a href="">Suporte</a></li>
                </ul>
                <ul>
                  <li><strong>Redes sociais</strong></li>
                  <li><a href="">Instagram</a></li>
                  <li><a href="">Whatsapp</a></li>
                  <li><a href="">TikTok</a></li>
                  <li><a href="">LinkedIn </a></li>
                </ul>
                <ul>
                  <li><strong>Download</strong></li>
                  <li><a href="">App Store</a></li>
                  <li><a href="">Google play</a></li>
                </ul>
              </div>
          </div>
          <div className="footer-container">
            {/* <p id="first">&copy; {new Date().getFullYear()} 2025 Evorise | Todos os Direitos Reservados</p> */}
            <p id="first">&copy; {new Date().getFullYear()} Evorise | Todos os Direitos Reservados</p>
            <a href="">
            <p id="terms">Termos de Uso</p></a>
            <a href="">
            <p id="police">Políticas de Privacidade</p></a>
            {/* Você pode adicionar mais conteúdo aqui, como links de redes sociais */}
          </div>
    </footer>
  );
}
