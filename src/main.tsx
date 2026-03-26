import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import Species from './components/Species.tsx'
import ContactUs from './pages/ContactUs.tsx'

const router =createBrowserRouter( [
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: "/",
        element:<Hero/>,
      },
        {
        path: "/home",
        element:<Hero/>,
      },
        {
        path: "/contact-us",
        element:<ContactUs/>,
      },
      
    ]
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
