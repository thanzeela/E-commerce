import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Women from './Pages/ProductListing/WomenProducts';
import Men from './Pages/ProductListing/MenProduct';
import Mobile from './Pages/ProductListing/SmartPhones';
import Home from './Pages/LandingPage/LandingPage';
import Landingpage from './Pages/LandingPage/LandingPage';
import ProductDetail from './Components/SingleProduct/ProductDetail';
import ProductListing from './Pages/ProductListing/ProductListing';
import Land from './Pages/LandingPage/Home'
import Register from './Components/Register/Register';
import Cards from './Components/Carousel/Home';
import Login from './Components/Login/login'
import Cart1 from './Components/Cart/Cart1';


import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Checkout from './Components/Checkout/Checkout';
import CheckoutForm from './Components/Checkout/CheckoutForm';

const router =createBrowserRouter([
  
      {
        path:"/",
        element:<Landingpage/>,
      },
      {
        path:"/home",
        element:<Land/>,
      },
      
      {
        path:"/ads",
        element:<Cards/>,
      },
  
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {path: "/products", 
        element: <ProductListing/>},
        {path: "/", 
        element: <Home/>},
        {path: "/checkout", 
        element: <Checkout />},
        {path: "/checkoutform", 
        element: <CheckoutForm />},
  {path: "/women", 
  element: <Women />},
  {path: "/smartphones",
   element: <Mobile />},
  {path: "/men", 
  element: <Men />}, 
  { path:"/products/:id",
  element:<ProductDetail />},
  { path:"/cart",
  element:<Cart1 />},
  
          


    
      
      
    

  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
 


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
