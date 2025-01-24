import ReactDOM from 'react-dom/client';
// Bring in the appropriate imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import ErrorPage from './pages/ErrorPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import ShowcasePage from './pages/ShowcasePage';

const router = createBrowserRouter([
  // Define the accessible routes, and which components respond to which URL
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutPage />,
    },
    {
        path: '/portfolio',
        element: <PortfolioPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/resume',
        element: <ResumePage />,
      },
      {
        path: '/game1',
        element: <ShowcasePage />,
      },
      {
        path: '/game2',
        element: <ShowcasePage />,
      },
      {
        path: '/game3',
        element: <ShowcasePage />,
      },
      {
        path: '/game4',
        element: <ShowcasePage />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);