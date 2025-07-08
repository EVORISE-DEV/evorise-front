// src/pages/landingpage/landingPage.tsx
import React, { useEffect, useRef, useState } from 'react';
import './landingPage.css';
import '../../../src/global.d.tsx';
import logo from '../../assets/images/teste4.jpg';
import logo2 from '../../assets/images/teste2.jpg';
import logo3 from '../../assets/images/teste3.jpg'; 
import logo4 from '../../assets/images/ranking.jpg';
import logo5 from '../../assets/images/evorise-logo.png';
import line1 from '../../assets/svg/descoberta.svg';
import line2 from '../../assets/svg/evolucao.svg';
import line3 from '../../assets/svg/performance.svg';
import img8 from '../../assets/svg/image 8.svg';
import img9 from '../../assets/svg/image 9.svg';
import evorise from '../../assets/svg/EVORISE_shadow.svg';
import success from '../../assets/svg/success.svg';
import cancel from '../../assets/svg/cancel.svg';
import logoEvo from '../../assets/images/group-1.png';
import video from '../../assets/svg/video_play.svg';
// No topo do arquivo landingPage.tsx
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faHeadphones, faMapMarkerAlt, faAnglesDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
// Importando os estilos do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImPriceTags } from "react-icons/im";
import 'swiper/swiper-bundle.css';
import { FaPlay } from "react-icons/fa";
import { FaArrowUpWideShort } from 'react-icons/fa6';
import { Section1 } from './components/section1.tsx';
import { Section2 } from './components/section2.tsx';
import { Section3 } from './components/section3.tsx';


const baseCards  = [
  {
    href: "/treinos-presenciais",
    img: logo,
    alt: "Treinos Presenciais",
    description: "Treinos com especialistas",
  },
  {
    href: "/corridas-semanais",
    img: logo3,
    alt: "Corridas Semanais",
    description: "Corridas semanais",
  },
  {
    href: "/conteudo",
    img: logo,
    alt: "Conteúdos Gravados",
    description: "Conteúdos Gravados",
  },
  {
    href: "/ebooks-guias",
    img: logo2,
    alt: "E-books e Guias Práticos",
    description: "E-books e Guias Práticos",
  },
  {
    href: "/desafios-competitivos",
    img: logo4,
    alt: "Desafios Competitivos",
    description: "Desafios Competitivos",
  },
  {
    href: "/treinos-presenciais",
    img: logo5,
    alt: "Treinos Presenciais",
    description: "Treinos",
  },
  {
    href: "/ranking",
    img: logo,
    alt: "Rankings e Ligas",
    description: "Rankings e Competições",
  },
];

export const LandingPage: React.FC = () => {
  // Função para rolar até uma seção específica
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };


 
  
  const sliderRef = useRef<HTMLDivElement>(null);


  const [cards, setCards] = useState(baseCards);

  const appended = useRef(false);

  useEffect(() => {
    let lastTime = performance.now();

    const animate = () => {
      const slider = sliderRef.current;
      if (slider) {
        const now = performance.now();
        const delta = now - lastTime;
        lastTime = now;

        const distance = (5000 / 1000) * delta;
        slider.scrollLeft += distance;

        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 100) {
          if (!appended.current) {

            const gapElement = document.createElement('div');
            gapElement.style.width = '100px';
            slider.appendChild(gapElement);

            setCards(prevCards => [...prevCards, ...baseCards]);
            appended.current = true;
          }
        } else if (slider.scrollLeft < 10) {

          appended.current = false;
        }
      }
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);
  

  const scrollToHeader = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  

  return (
    <div className="landing-page">
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <section id="section5" >
          <div id="guarantee">
            <h2 className="h2-7">7</h2>
            <h2 className="h2-guarantee"> dias de garantia</h2>
          </div>
          <div className="section5-guarantee">
            <div>
              <p>Entre, acesse o conteúdo e se não gostar, não se adaptar ou 
                entender que não é o momento certo para você, não se preocupe. 
                Você pode solicitar o reembolso dentro do prazo de
                 7 dias após a confirmação da sua compra e nós devolveremos 
                 integralmente o valor investido. Simples assim.</p>
            </div>
            <button>ASSINE AGORA</button>
          </div>

      </section>

    </div>
  );
}
