import { createRoot } from 'react-dom/client'
import './styles/global.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from './components/sections/Home.tsx';
import { Dashboard } from './pages/Dashboard.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  },
]);



createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />,
)
