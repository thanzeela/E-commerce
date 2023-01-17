import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login1 from './components/Login1/login1'
// import Card from './components/Cards/Cards'
// import Carousel from './components/Carousel/carousel'
import Landingpage from './components/LandingPage/LandingPage'
import Register from './components/Reg/reg';
// import Carousel from './components/Carousel/Home'
import Reg from './components/Reg/reg'
import Login from './components/Login/login'
import Cal from './components/cal/cal'
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router =createBrowserRouter([
  // {
  //   path:"/",
  //   element:<Navbar/>,
  // }, 
 

    // children: [
      {
        path:"/",
        element:<Landingpage/>,
      },
  
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        
        {
          path:"/navbar/cal",
          element:<Cal/>
        },
        {
          path:'/register',
          element:<Reg />
        },
        {
          path:'/log',
          element:<Login1/>
        },
      
    

  
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
