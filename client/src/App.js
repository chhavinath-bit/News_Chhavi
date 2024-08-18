
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import News from './component/News';
import Query from './component/Query';
import Navbar from './component/Navbar';
import Footer from "./component/Footer"
import Home from './component/Home';
import { NewsContext } from './Context/newscontext';
import React, { useState, useContext } from 'react'
import NewsState from './Context/newsState';
export default function App(){
  const {country} = useContext(NewsContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element:<>
      <Navbar/>
      <Home/>
      <Footer/>
      </> ,
    },
    {
      path:`/News`,
      element:<>
      <Navbar/>
      <News/>
      <Footer/>
     </>,
    },
    {
      path: "/Query",
      element: <>
      <Navbar/>
      <Query/>
      <Footer/>
    </>,
    },
    
    {
      path: "*",
      element: <>
      <Navbar/>
      <div>No page Zone</div>
      <Footer/>
    </>,
    },
  ]);
  return (
      <NewsState >  
     <div className="h-screen w-screen"  >
     <RouterProvider router={router} />
     </div>
     </NewsState>

    )
  
}
