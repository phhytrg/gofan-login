import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import Protected from './modules/auth/components/Protected';

const LoginForm = lazy(() => import('./modules/auth/components/LoginForm'));
// const Protected = lazy(() => import('./modules/auth/components/Protected'));
const Dashboard = lazy(() => import('./modules/dashboard/Dashboard'));

export const routesConfig: RouteObject[] = [
  {
    path: '*',
    element: (
      <div>
        <h1>Not Found</h1>
      </div>
    ),
  },
  {
    path: '/login',
    element: <LoginForm />,
  },
  {
    path: '/',  
    element: <Protected />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
];
