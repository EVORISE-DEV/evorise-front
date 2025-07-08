import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../services/session/SessionService.tsx'; // Função que verifica se o usuário está logado

interface AuthGuardProps {
  redirectTo?: string; // Caminho para redirecionar caso não esteja autenticado
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ redirectTo = "/login" }) => {
  return isAuthenticated() ? <Outlet /> : <Navigate to={redirectTo} />;
};
