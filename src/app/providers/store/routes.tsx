import type { ReactNode } from 'react';

import { LogIn } from "@/pages/auth/logIn";
import { SignUp } from "@/pages/auth/signUp";

export interface AppRoute {
  path: string;
  element: ReactNode;
  private?: boolean;
}

export const routes: AppRoute[] = [
  { path: "/sign-in", element: <LogIn />, private: false },
  { path: "/sign-up", element: <SignUp />, private: false },
];