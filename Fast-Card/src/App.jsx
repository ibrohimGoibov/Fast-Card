import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/layout';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import Register from './components/register/register';
import Story from './components/story/story';
import Login from './components/login/login';
import Error from './components/error/error';
import Product from './components/product/product';
import { Counter } from './feauter/counter/Counter';
import Sale from './components/product/sale';
import './App.css';
import Bye from './components/bye/bye';
import Sale1 from './components/home/sale1';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/:id',
          element: <Sale1 />
        },
        {
          path: 'contact',
          element: <Contact />,
        },
        {
          path: 'register',
          element: <Register />,
        },
        {
          path: 'story',
          element: <Story />,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'product',
          element: <Product />,
        },
        {
          path: 'sale/:id',              
          element: <Sale />,
        },
        {
          path: 'counter',
          element: <Counter />,
        },
        {
          path: '*',                  
          element: <Error />,
        },
        {
          path: 'bye/:id',
          element: <Bye />
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;