import { Home } from '../../pages';

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

export function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '*',
      element: <Navigate to="/" />,
    },
  ]);

  return <RouterProvider router={router} />;
}
