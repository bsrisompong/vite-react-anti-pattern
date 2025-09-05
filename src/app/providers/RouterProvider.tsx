import { createBrowserRouter, RouterProvider as RRProvider } from 'react-router-dom';
import { routes } from '@/app/routes';

const router = createBrowserRouter(routes);

export function RouterProvider() {
  return <RRProvider router={router} />;
}
