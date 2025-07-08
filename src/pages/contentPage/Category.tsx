// src/components/Category.tsx

import React, {useRef} from 'react';
import { Content } from '../interfaces/contents.tsx';
import './Category.css';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CategoryProps {
  categoryName: string;
  contents: Content[];
}

export const Category: React.FC<CategoryProps> = ({ categoryName, contents }) => {

  const categoryContainerRef = useRef<HTMLDivElement>(null);

  const scrollButtons = (direction: 'left' | 'right') => {
    const container = categoryContainerRef.current;
    if (container) {
      const scrollAmount = 1000; // Quantidade de pixels para rolar

      if (direction === 'left') {
        container.scrollBy({
          top: 0,
          left: -scrollAmount,
          behavior: 'smooth'
        });
      } else {
        container.scrollBy({
          top: 0,
          left: scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className="A-category">
      <h2 className="A-category-title">{categoryName}</h2>

      <div className="category-contents-buttons-wrapper">
                {/* Botão de seta para a esquerda */}
      <button 
      className="B-scroll-button left" 
      onClick={() => scrollButtons('left')}
      aria-label="Rolagem para a esquerda"
      >
      <FontAwesomeIcon icon={faAngleLeft} size="lg" />
      </button>
      
      <div className="A-category-contents" ref={categoryContainerRef}>


        {contents.map(content => (
          <div key={content.id} className="A-content-card">
            <div className="A-content-image">
                <img src={content.image} alt={content.titulo}  />
            </div>
            
            <div className="A-content-card-description">
                <h3 className="A-content-title">{content.titulo}</h3>
                <p className="A-content-description">{content.descricao}</p>
                    <div className="A-content-footer">
                    <span className="A-content-rating">⭐ {content.avaliacao}</span>
                    <button className="A-content-button" onClick={() => alert(`Inscrito no curso: ${content.titulo}`)}>
                        Inscrever-se
                    </button>
                </div>
            </div>

          </div>
        ))}

      </div>
      {/* Botão de seta para a direita */}
        <button 
        className="B-scroll-button right" 
        onClick={() => scrollButtons('right')}
        aria-label="Rolagem para a direita"
        >
        <FontAwesomeIcon icon={faAngleRight} size="lg" />
        </button>
      </div>

    </div>
  );
};
