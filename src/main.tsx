import { createRoot } from 'react-dom/client'
import './styles/global.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.tsx';
import { Home } from './components/sections/Home.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
