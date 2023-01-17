import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import Card from './components/Cards/Cards'
// import Carousel from './components/Carousel/carousel'
import Landingpage from './Pages/LandingPage/LandingPage'

// import Carousel from './components/Carousel/Home'
import Register from './component/Register/Register'
import Cards from './Components/Carousel/Home'
import Login from './component/Login/Login'
// import Login1 from './component/Register/Login';


import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router =createBrowserRouter([
  // {
  //   path:"/",
  //   element:<Navbar/>,
  // }, 
 

    // children: [
      // {
      //   path:"login1",
      //   element:<Login1/>
      // },
      {
        path:"/",
        element:<Landingpage/>,
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
