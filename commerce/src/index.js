import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Women from './Pages/ProductListing/WomenProducts'
import Men from './Pages/ProductListing/MenProduct'
import Mobile from './Pages/ProductListing/SmartPhones'
import Home from './Pages/LandingPage/LandingPage'
import reportWebVitals from './reportWebVitals';
import Cart from './Components/Cart/Cart';
import ProductDetail from './Components/SingleProduct/ProductDetail';
import ProductListing from './Pages/ProductListing/ProductListing'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const routes = createBrowserRouter([
	
  {path: "/products", element: <ProductListing/>},
  {path: "/", element: <Home/>},
  {path: "/women", element: <Women />},
  {path: "/smartphones", element: <Mobile />},
  {path: "/men", element: <Men />}, 
  { path:"/products/:id",element:<ProductDetail />},
  { path:"/cart",element:<Cart />},
          




]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
