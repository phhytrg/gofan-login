import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { worker } from './mocks';
import { routesConfig } from './routes.tsx';
import './main.scss';
import AuthProvider from './modules/auth/components/AuthProvider.tsx';

worker.start({
  onUnhandledRequest: 'bypass',
});

const router = createBrowserRouter(routesConfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
