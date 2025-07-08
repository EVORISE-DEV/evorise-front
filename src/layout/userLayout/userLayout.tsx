// src/layout/layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { UserHeader } from './header/userHeader.tsx';
import { UserFooter } from './footer/userFooter.tsx';
import './userLayout.css'

export function UserLayout() {
  return (
    <div>
      <UserHeader  />
      <div style={{ minHeight: '100vh' }}>
        <Outlet />
      </div>
      <UserFooter/>
    </div>
    
  );
}
