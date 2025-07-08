// src/pages/shopPage/shopPage.tsx
import React, { useState, useEffect, useRef  } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown, faAngleLeft, faAngleRight, 
  faMapMarkerAlt, faHeadphones, faAngleDown, 
  faAnglesRight, faAnglesLeft, faSpinner, faStar as faStarSolid, 
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faArrowUp} from '@fortawesome/free-solid-svg-icons';
import Animated, {
  SlideInDown,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

import { reviews   } from '../interfaces/review_content.tsx'; // Importando arrays de usuários e reviews
import { User, users } from '../interfaces/user.tsx';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { categories, products } from '../interfaces/Product.tsx';
import { Link } from 'react-router-dom';
import './contentPage.css';
import '../interfaces/contents.tsx';
import { contents, Content } from '../interfaces/contents.tsx';
import { FaArrowUpWideShort, FaSliders } from 'react-icons/fa6';
import { Category } from './Category.tsx';



export function ContentPage() {
  const [loading, setLoading] = useState(true);
  const [selectedContent, setSelectedContent] = useState<Content | null>(null);
  const [currentReviewPage, setCurrentReviewPage] = useState(1);
  const reviewsPerPage = 6;
  const totalReviewPages = Math.ceil(reviews.length / reviewsPerPage);

  // Referência ao contêiner de botões para controle de rolagem
  const buttonsContainerRef = useRef<HTMLDivElement>(null);
  const categoryContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulação de carregamento

    return () => clearTimeout(timer);
  }, []);

  const scrollButtons = (direction: 'left' | 'right') => {
    const container = buttonsContainerRef.current;
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

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

    // Função para rolar até uma seção de categoria
    const scrollToCategory = (categoryName: string) => {
      const el = document.getElementById(categoryName);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };

  // Funções para navegação entre páginas de avaliações
  const goToPreviousReviewPage = () => {
    setCurrentReviewPage(prev => (prev > 1 ? prev - 1 : prev));
  };

  const goToNextReviewPage = () => {
    setCurrentReviewPage(prev => (prev < totalReviewPages ? prev + 1 : prev));
  };

  // Calculando as avaliações a serem exibidas na página atual
  const indexOfLastReview = currentReviewPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  // Função para obter o usuário por ID
  const getUserById = (userId: number): User | undefined => {
    return users.find(user => user.id === userId);
  };

    // Função para agrupar conteúdos por categoria
    const groupByCategory = (items: Content[]) => {
      return items.reduce((groups: { [key: string]: Content[] }, item) => {
        const category = item.categoria;
        console.log(category);
        if (!groups[category]) {
          groups[category] = [];
        }
        groups[category].push(item);
        return groups;
      }, {});
    };
  
    const categorizedContents = groupByCategory(contents);

  return (
    <div className="A-contents-page">

      {/* SECTION 1 */}
      <section id="section1" className="A-contents-section1">
      <h1 className="A-contents-title">Evolua com a Evorise</h1> 

        {/* Header da Section 1  */}
        <div className="A-contents-section1-header">
          {loading ? (
            <div className="A-loading">
              <p><FontAwesomeIcon icon={faSpinner} spin size="2x" /></p>
            </div>
          ) : (
            <>
              {/* Conteúdo da Seção 1 */}


              <div className="A-contents-grid">
                <div className="A-contents-page">
                  <h1 className="A-contents-page-title">Conheça Nossos Cursos</h1> 
                </div>
                <div className="A-back-to-top">
                  <button className="A-arrow-button" onClick={() => scrollToSection('section1')}>
                    <FontAwesomeIcon icon={faArrowUp} size="lg" color='red' />
                  </button>
                </div>
                <div className="A-contents-buttons-wrapper">
                  {/* Botão de seta para a esquerda */}
                  <button 
                    className="A-scroll-button left" 
                    onClick={() => scrollButtons('left')}
                    aria-label="Rolagem para a esquerda"
                  >
                    <FontAwesomeIcon icon={faAngleLeft} size="lg" />
                  </button>

                  {/* Contêiner de botões roláveis */}
                  <div className="B-contents-buttons" ref={buttonsContainerRef}>
                    {Object.keys(categorizedContents).map(categoryName => (
                      <button 
                        key={categoryName} 
                        className="A-content-button"
                        onClick={() => scrollToCategory(categoryName)}
                        aria-label={`Abrir categoria: ${categoryName}`}
                      >
                        {categoryName}
                      </button>
                    ))}
                </div>

                  {/* Botão de seta para a direita */}
                  <button 
                    className="A-scroll-button right" 
                    onClick={() => scrollButtons('right')}
                    aria-label="Rolagem para a direita"
                  >
                    <FontAwesomeIcon icon={faAngleRight} size="lg" />
                  </button>
                </div>

                {/* Renderização das Categorias */}
                  {Object.keys(categorizedContents).map(categoryName => (
                    <div className="A-contents-category" key={categoryName} id={categoryName}>
                      <Category 
                        categoryName={categoryName}
                        contents={categorizedContents[categoryName]}
                      />

                    </div>
                  ))}

              </div>
            </>
          )}
        </div>


        
        <button className="A-arrow-button" onClick={() => scrollToSection('section2')}>
          <FontAwesomeIcon icon={faAngleDown} size="2x" color='#0D99FF' />
        </button>
      </section>

      {/* SECTION 2 */}
      <section id="section2" className="A-contents-section2">
        <h1 className="A-contents-title">Seção 2</h1> 
        
        {/* Header da Section 2  */}
        <div className="A-contents-section2-header">
          {loading ? (
            <div className="A-loading">
              <p>Carregando conteúdos... <FontAwesomeIcon icon={faSpinner} spin size="2x" /></p>
            </div>
          ) : (
            <>
              {/* Conteúdo da Seção 2 */}
            </>
          )}
        </div>
        
        <button className="A-arrow-button" onClick={() => scrollToSection('section4')}>
          <FontAwesomeIcon icon={faAngleDown} size="2x" color='#0D99FF' />
        </button>
      </section>

      {/* SECTION 3 */}
      <section id="section3" className="A-contents-section3">
        <h1 className="A-contents-title">Seção 3</h1> 
        
        {/* Header da Section 3  */}
        <div className="A-contents-section3-header">
          {loading ? (
            <div className="A-loading">
              <p>Carregando conteúdos... <FontAwesomeIcon icon={faSpinner} spin size="2x" /></p>
            </div>
          ) : (
            <>
              {/* Conteúdo da Seção 3 */}
            </>
          )}
        </div>
        
        <button className="A-arrow-button" onClick={() => scrollToSection('section4')}>
          <FontAwesomeIcon icon={faAngleDown} size="2x" color='#0D99FF' />
        </button>
      </section>
      
      {/* SECTION 4 */}
      <section id="section4" className="A-contents-section4">
        <h1 className="A-contents-title">Seção 4</h1> 
        
        {/* Conteúdo da Section 4 */}
        <div className="A-contents-section4-content">
          {loading ? (
            <div className="A-loading">
              <p>Carregando conteúdos... <FontAwesomeIcon icon={faSpinner} spin size="2x" /></p>
            </div>
          ) : (
            <>
              {/* Conteúdo da Seção 4 */}
            </>
          )}
        </div>
        
        {/* Botão opcional */}
        <button className="arrow-button" onClick={() => scrollToSection('section1')}>
          Voltar ao topo ↑
        </button>
      </section>
      
    </div>
  );
}
