import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root';
import Home from './Components/Home/Home';
import Profile from './Profile/Profile';
import Plants from './Plants/Plants';
import Login from './Pages/Login';
import Register from './Pages/Register';

import error from './assets/error-404.png'
import AuthLayout from './Layout/AuthLayout';
import AuthProvider from './Provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      }
     
    ]
  },
     {
        path:'plants',
        Component: Plants
      },
  {
    path:'auth',
    element: <AuthLayout></AuthLayout>,
    children:[
      {
    path:'/auth/login',
    Component: Login
  },
  {
    path: '/auth/register',
    Component: Register
  }
    ]
  },
   {
    path: 'profile',
    Component: Profile
  },
  {
    path: '/*',
    element: <div className='flex items-center justify-center'><img src={error} alt="" /></div>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
          <RouterProvider router= {router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
