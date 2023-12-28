import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home/Home.jsx';
import Register from './components/Verifying/Register/Register.jsx';
import Login from './components/Verifying/Login/Login.jsx';
import AuthProvider from './components/AuthProvider/AuthProvider.jsx';
import AddProduct from './components/ProductPage/AddProduct/AddProduct.jsx';
import MyCart from './components/Mycart/MyCart.jsx';
import Detail from './components/Mycart/Detail/Detail.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    // to do ErrorPage add
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      
      {
        path:"/register",
        element:<Register></Register>
      },
      {
       path:"/addProduct",
       element:<AddProduct></AddProduct>

      },
      {
      path:"/myCart",
      element:<MyCart></MyCart>
      },
      {
      path:"/detail",
      element:<Detail></Detail>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
 
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider><div className='max-w-6xl mx-auto'>
 <RouterProvider router={router} />
 </div></AuthProvider>
  </React.StrictMode>,
)
