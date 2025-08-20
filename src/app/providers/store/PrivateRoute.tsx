import { Navigate } from "react-router-dom";
import React from 'react';

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuth = false; // тут берёшь из стора/контекста/куки
  return isAuth ? children : <Navigate to="/sign-in" replace />;
};