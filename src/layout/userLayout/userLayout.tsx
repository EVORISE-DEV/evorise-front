// src/layout/layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { UserHeader } from '../userLayout/header/userHeader.tsx';
import { UserFooter } from '../userLayout/footer/userFooter.tsx';
import './userLayout.css'

export function UserLayout() {
  return (
    <div>
      <UserHeader  />
      <div style={{ minHeight: '100vh', marginTop:'5rem'}}>
        <Outlet />
      </div>
      <UserFooter/>
    </div>
    
  );
}
