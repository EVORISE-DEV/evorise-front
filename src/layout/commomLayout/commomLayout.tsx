// src/layout/layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './header/header.tsx';
import { Footer } from './footer/footer.tsx';
import './commomLayout.css'

export function CommomLayout() {
  return (
    <div>
      <Header  />
      <div style={{ minHeight: '1vh', paddingTop: '4rem' }}>
        <Outlet  />
      </div>
      <Footer/>
    </div>
    
  );
}
