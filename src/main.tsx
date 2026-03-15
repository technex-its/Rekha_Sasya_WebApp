import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import Species from './components/Species.tsx'

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
        path: "/",
        element:<Species/>,
      },
      
    ]
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
