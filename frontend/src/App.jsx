
import React from 'react';
import AuthPage from './pages/AuthPage'
import { createBrowserRouter , Router, RouterProvider } from 'react-router-dom' ;
import HomePage from './pages/HomePage';
import FeedPage from './pages/Mainpage';

function App() {
  const router  = createBrowserRouter([
    {
      path : '/' ,
      element : <HomePage />   ,
    },
    {
      path : '/auth' ,
      element : <AuthPage />   ,
    },
    {
      path : "/home/:id" ,
      element : <FeedPage /> ,
    }
  ]) ;
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
