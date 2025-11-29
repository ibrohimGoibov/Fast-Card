import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/layout'
import Home from './components/home/home'
import Contact from './components/contact/contact'
import Register from './components/register/register'
import Story from './components/story/story'
import Login from './components/login/login'
import './App.css'
import Error from './components/error/error'
import Product from './components/product/product'
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: 'register',
          element: <Register />
        },
        {
          path: 'story',
          element: <Story />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'error',
          element: <Error />
        },
        {
          path: 'product',
          element: <Product />
        }

      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App