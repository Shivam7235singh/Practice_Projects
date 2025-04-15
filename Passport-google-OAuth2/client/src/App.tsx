import { createBrowserRouter } from 'react-router';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const ErrorPage = () => (
  <div className="text-center mt-10">
    <h1 className="text-3xl font-bold text-red-600">404 - Page Not Found</h1>
    <p className="mt-4">Oops! The page you're looking for doesn't exist.</p>
    <a href="/" className="text-blue-500 underline">Go to Login</a>
  </div>
);

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
      errorElement: <ErrorPage />,
    },
  ],
  {
    future: {
      v7_partialHydration: true,
    },
  }
);

export default router;
