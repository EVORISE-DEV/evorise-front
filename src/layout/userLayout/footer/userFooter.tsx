// src/components/footer/footer.tsx
import React from 'react';
import './userFooter.css'; // Se você tiver estilos específicos para o Footer

export function UserFooter() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} EvriseShop. Todos os direitos reservados.</p>
      {/* Você pode adicionar mais conteúdo aqui, como links de redes sociais */}
    </footer>
  );
}
