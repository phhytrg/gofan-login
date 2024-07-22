import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { worker } from './mocks';
import { routesConfig } from './routes.tsx';
import './main.scss';
import AuthProvider from './modules/auth/components/AuthProvider.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';

worker.start({
  onUnhandledRequest: 'bypass',
});

const router = createBrowserRouter(routesConfig);
export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
