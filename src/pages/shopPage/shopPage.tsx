// src/pages/shopPage/shopPage.tsx
import React, { useState, useEffect, useRef  } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faAngleDown, 
  faAnglesRight, faAnglesLeft, faSpinner, faStar as faStarSolid, 
  faCartShopping} from '@fortawesome/free-solid-svg-icons';

import { users, reviews, Review, User,   } from './testeArrayShop.tsx'; // Importando arrays de usuários e reviews
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { categories, products } from '../interfaces/Product.tsx';
import { Link } from 'react-router-dom';
import './shopPage.css';
import { useCart } from './cartContext/cartContext.tsx';


export function ShopPage() {

  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const totalPages = Math.ceil(products.length / rowsPerPage);

  
    // Estado para a página atual das avaliações
    const [currentReviewPage, setCurrentReviewPage] = useState(1);
    const reviewsPerPage = 6;
    const totalReviewPages = Math.ceil(reviews.length / reviewsPerPage);
  
    // Referência para o container de avaliações
    const reviewsContainerRef = useRef<HTMLDivElement>(null);

    // Dentro do componente:
    const { cart } = useCart();
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulação de carregamento

    return () => clearTimeout(timer);
  }, 
  
  []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reinicia a página ao filtrar
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1); // Reinicia a página ao filtrar
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

  const goToPreviousPage = () => {
    setCurrentPage(prev => (prev > 1 ? prev - 1 : prev));
  };

  const goToNextPage = () => {
    setCurrentPage(prev => (prev < Math.ceil(filteredProducts.length / rowsPerPage) ? prev + 1 : prev));
  };

    // Funções para navegação das avaliações
    const goToPreviousReviewPage = () => {
      if (currentReviewPage > 1) {
        setCurrentReviewPage(prev => prev - 1);
        scrollReviewsContainer('left');
      }
    };
  
    const goToNextReviewPage = () => {
      if (currentReviewPage < totalReviewPages) {
        setCurrentReviewPage(prev => prev + 1);
        scrollReviewsContainer('right');
      }
    };
  
    // Função para realizar a rolagem suave nas avaliações
    const scrollReviewsContainer = (direction: 'left' | 'right') => {
      if (reviewsContainerRef.current) {
        const scrollAmount = reviewsContainerRef.current.clientWidth;
        reviewsContainerRef.current.scrollBy({
          top: 0,
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth',
        });
      }
    };

  // Filtrando os produtos com base no searchTerm e selectedCategory
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'Todas' || product.category === selectedCategory)
  );

  // Calculando os produtos a serem exibidos na página atual
  const indexOfLastProduct = currentPage * rowsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - rowsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Função para obter o usuário por ID
  const getUserById = (userId: number): User | undefined => {
    return users.find(user => user.id === userId);
  };

  // Configurações do Slider
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: true,
    nextArrow: <FontAwesomeIcon icon={faAngleRight} />,
    prevArrow: <FontAwesomeIcon icon={faAngleLeft} />,
    responsive: [
      {
        breakpoint: 1200, // <1200px
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768, // <768px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // <480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="shop-page">
      
      {/* SECTION 1 */}
      <section id="section1" className="shop-section1">
        <h1 className="shop-title">Bem vindo à EvriseShop</h1> 
        
        {/* Header da Section 1 com Paginação e Filtro */}
        <div className="shop-section1-header">
          {loading ? (
            <div className="loading">
              <p>Aguardando produtos cadastrados...<i className="pi pi-spin pi-spinner" style={{ fontSize: '2rem' }}></i></p>
            </div>
          ) : (
            <>
              <div className="pagination-container">
                <button onClick={goToFirstPage} className="pagination-button" aria-label="Primeira Página">
                  <FontAwesomeIcon icon={faAnglesLeft} />
                </button>
                <button onClick={goToPreviousPage} className="pagination-button" aria-label="Página Anterior">
                  <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <span className="pagination-info">
                  Página {currentPage} de {totalPages}, {rowsPerPage} itens por página
                </span>
                <button onClick={goToNextPage} className="pagination-button" aria-label="Próxima Página">
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
                <button onClick={goToLastPage} className="pagination-button" aria-label="Última Página">
                  <FontAwesomeIcon icon={faAnglesRight} />
                </button>
              </div>

                {/* Novo Filtro por Categoria */}
                <div className="filter-container">
                <select
                  id="category-filter"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="Todas">Todas as Categorias</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
                <div className="filter-container-cart">
                  <Link to={`/loja/cart`}>
                    <FontAwesomeIcon icon={faCartShopping} size="2x" />
                    {totalQuantity > 0 && (
                      <span className="cart-total-badge">{totalQuantity}</span>
                    )}
                  </Link>
                </div>
              </div>
              

              <div className="filter-container">
                <label htmlFor="search">Pesquisar produtos:</label>
                <input
                  id="search"
                  type="text"
                  placeholder="Digite para filtrar..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>


            </>
          )}
        </div>

        {/* Conteúdo da Section 1: Produtos */}
        <div className="shop-section1-products">

          {loading ? (
            <p>Carregando produtos...</p>
          ) : (
            currentProducts.length > 0 ? (
              <div className="products-grid">
              <button onClick={goToPreviousPage} className="pagination-button" aria-label="Página Anterior">
                  <FontAwesomeIcon icon={faAngleLeft} />
              </button>
                {currentProducts.map(product => (
                  <div key={product.id} className="product-card">
                    <Link to={`/loja/product/${product.id}`} className="product-link">
                      
                      <div className="product-image-container">
                      <img src={product.image} alt={product.name} className="product-image" />
                      </div>
                    <div className="product-details">
                    <div className="product-name">{product.name}</div>
                    
                    <div className="product-description">{product.description}</div>
                    <div className="product-price">R$ {product.price.toFixed(2)}</div>
                    <div className="product-rating">
                      {[...Array(5)].map((star, index) => (
                        <FontAwesomeIcon
                          key={index}
                          icon={index < Math.round(product.rating) ? faStarSolid : faStarRegular}
                          className={index < Math.round(product.rating) ? 'star filled' : 'star'}
                        />
                      ))}
                      <span className="rating-number">{product.rating}</span>
                    </div>
                    </div>  

                    </Link>

                  </div>
                  
                ))}
                <button onClick={goToNextPage} className="pagination-button" aria-label="Próxima Página">
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
              </div>
              
            ) : (
              <p>Nenhum produto encontrado.</p>
            )
          )}

        </div>
        
        
        <button className="arrow-button" onClick={() => scrollToSection('section2')}>
          <FontAwesomeIcon icon={faAngleDown} size="2x" color='#0D99FF' />
        </button>
      </section>

      
      {/* SECTION 2 */}
      <section id="section2" className="shop-section2">
        <h1 className="shop-title">Avaliações dos Usuários</h1> 
        
        {/* Conteúdo da Section 2: Reviews */}
        <div className="shop-section2-reviews">
          {loading ? (
            <div className="loading">
              <p>Aguardando reviews... <FontAwesomeIcon icon={faSpinner} spin size="2x" /></p>
            </div>
          ) : (
            reviews.length > 0 ? (
              <>
                {/* Botões de Navegação das Avaliações */}
                <div className="reviews-navigation">
                  <button 
                    onClick={goToPreviousReviewPage} 
                    className="nav-button"
                    disabled={currentReviewPage === 1}
                    aria-label="Página Anterior"
                  >
                    <FontAwesomeIcon icon={faAngleLeft} size="2x" />
                  </button>

                  <button 
                    onClick={goToNextReviewPage} 
                    className="nav-button"
                    disabled={currentReviewPage === totalReviewPages}
                    aria-label="Próxima Página"
                  >
                    <FontAwesomeIcon icon={faAngleRight} size="2x" />
                  </button>
                </div>

                {/* Container de Avaliações com Referência */}
                <div className="reviews-grid" ref={reviewsContainerRef}>
                  {reviews
                    .slice((currentReviewPage - 1) * reviewsPerPage, currentReviewPage * reviewsPerPage)
                    .map(review => {
                      const user = getUserById(review.userId);
                      const product = products.find(p => p.id === review.productId);
                      return (
                        <div key={review.id} className="review-card">
                          <div className="review-header">
                            <h3 className="review-user-name">{user ? user.name : 'Usuário Desconhecido'}</h3>
                            <p className="review-user-email">{user ? user.email : 'Email Desconhecido'}</p>
                          </div>
                          <div className="review-rating">
                            {[...Array(5)].map((star, index) => (
                              <FontAwesomeIcon
                                key={index}
                                icon={index < Math.round(review.rating) ? faStarSolid : faStarRegular}
                                className={index < Math.round(review.rating) ? 'star filled' : 'star'}
                              />
                            ))}
                            <span className="rating-number">{review.rating}</span>
                          </div>
                          <p className="review-comment">"{review.comment}"</p>
                          {product && (
                            <p className="review-product">Produto: {product.name}</p>
                          )}
                        </div>
                      );
                    })}
                </div>
              </>
            ) : (
              <p>Nenhuma avaliação disponível.</p>
            )
          )}
        </div>
        
        <button className="arrow-button" onClick={() => scrollToSection('section3')}>
          <FontAwesomeIcon icon={faAngleDown} size="2x" color='#0D99FF' />
        </button>
      </section>

      {/* SECTION 3 */}
      <section id="section3" className="shop-section3">
        <h1 className="shop-title">Seção 3</h1> 
        
        {/* Header da Section 3  */}
        <div className="shop-section3-header">
          {loading ? (
            <div className="loading">
              <p>Aguardando ...</p>
            </div>
          ) : (
            <>
              <i className="pi pi-spin pi-spinner" style={{ fontSize: '2rem' }}></i>
            </>
          )}
        </div>
        
        
        <button className="arrow-button" onClick={() => scrollToSection('section4')}>
          <FontAwesomeIcon icon={faAngleDown} size="2x" color='#0D99FF' />
        </button>
      </section>
      
    </div>
  );
}
