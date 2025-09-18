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
import { AuthProvider } from 'src/context/AuthContext.tsx';
import { ScrollToTop } from 'src/components/Scroll/ScrollToTop.tsx';
import { UserLayout } from 'src/layout/userLayout/userLayout.tsx';
import { UsersPage } from 'src/pages/userPage/UserPage.tsx'
import { ContentPage } from 'src/pages/contentPage/ContentPage.tsx';
import ResetPassword from 'src/pages/resetPassword/resetPassword.tsx';
import RequestReset from 'src/pages/resetPassword/requestReset.tsx';

export function AppRouting() {
  return (
    <AuthProvider>
      <ScrollToTop/>
      <Routes>
        <Route path="/reset-password" element={<ResetPassword />} />
        {/* Rota principal usa CommomLayout */}
        <Route path="/" element={<CommomLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="signature" element={<SignPage />} />
          <Route path="payment" element={<PaymentForm />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/request-reset" element={<RequestReset />} />
        </Route>

        {/* 🔒 Rotas protegidas - Somente usuários autenticados podem acessar */} 

          <Route path="/" element={<UserLayout />}>
            <Route path="personalPage" element={<UsersPage />} />
            <Route path="content" element={<ContentPage/>} />
          </Route>

        {/* 🔒 Área do usuário autenticado */}
        {/* <Route path="/*" element={<CommomLayout />}>
          <Route path="loja/cart" element={<CartPage />} />
          <Route path="user" element={<UserPageAdmin />} />
        </Route> */}
      </Routes>

    </AuthProvider>
  );
}
