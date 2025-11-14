import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/home/page.jsx'
import Profile from './pages/profile/page.jsx'
import Places from './pages/places/page.jsx'
import Auth from './pages/auth/page.jsx'
import Cart from './pages/cart/page.jsx'

const pages = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/', element: <Home />},
      {path: '/cart', element: <Cart />},
      {path: '/profile', element: <Profile />},
      {path: '/places', element: <Places />},
      {path: '/auth', element: <Auth />},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={pages}></RouterProvider>
  </StrictMode>,
)
