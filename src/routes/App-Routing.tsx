import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts e Páginas
import { CommomLayout } from '../layout/commomLayout/commomLayout.tsx';
import { LandingPage } from '../pages/landingPage/landingPage.tsx';

// Importando AuthGuard para proteger as rotas
import CalendarPage from '../pages/calendarPage/calendarPage.tsx';
import { NotFoundPage } from '../pages/notFoundPage/NotFoundPage.tsx';
import { SignPage } from '../pages/signPage/signPage.tsx';
import PaymentForm from 'src/pages/signPage/components/payment.tsx';

export function AppRouting() {
  return (
      <Routes>
        {/* Rota principal usa CommomLayout */}
        <Route path="/" element={<CommomLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="calendario" element={<CalendarPage />} />
          <Route path="assinatura" element={<SignPage />} />
          <Route path="pagamento" element={<PaymentForm />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        {/* 🔒 Rotas protegidas - Somente usuários autenticados podem acessar */} 
        {/* <Route element={<AuthGuard redirectTo="/login" />}>
          <Route path="/" element={<CommomLayout />}>
            <Route path="loja/cart" element={<CartPage />} />
            <Route path="user" element={<UserPageAdmin />} />
            <Route path="personalPage" element={<UsersPage />} />
          </Route>
        </Route> */}

        {/* 🔒 Área do usuário autenticado */}
        {/* <Route path="/*" element={<CommomLayout />}>
          <Route path="loja/cart" element={<CartPage />} />
          <Route path="user" element={<UserPageAdmin />} />
        </Route> */}
      </Routes>
  );
}
