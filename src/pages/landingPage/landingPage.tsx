// src/pages/landingpage/landingPage.tsx
import React from 'react';
import './landingPage.css';
import '../../../src/global.d.tsx';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'swiper/swiper-bundle.css';
import { Section1 } from './components/section1.tsx';
import { Section2 } from './components/section2.tsx';
import { Section3 } from './components/section3.tsx';
import { Section4 } from './components/section4.tsx';



export const LandingPage: React.FC = () => {

  return (
    <div className="landing-page">
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
    </div>
  );
}
