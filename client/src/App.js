
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
import ProfilePage from './component/ProfilePage';
import { NewsContext } from './Context/newscontext';
import EditProfile from './component/EditProfile'
import React, { useState, useContext } from 'react'
import ForYou from './component/ForYou';
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
      path:`/News/:country`,
      element:<>
      <Navbar/>
      <News/>
      <Footer/>
     </>,
    },
    {
      path:`/News/:country/:tag`,
      element:<>
      <Navbar/>
      <News/>
      <Footer/>
     </>,
    },
    {
      path:`/News/detailedPage/:newsId`,
      element:<>
      <Navbar/>
      <News/>
      <Footer/>
     </>,
    },
    {
      path:`/News/following/ForYou`,
      element:<>
      <Navbar/>
      <ForYou/>
      <Footer/>
     </>,
    },
    {
      path: "/News/Query",
      element: <>
      <Navbar/>
      <Query/>
      <Footer/>
    </>,
    },
    {
      path: "/Profile/:User",
      element: <>
      <Navbar/>
      <ProfilePage/>
      <Footer/>
    </>,
    },
    {
      path: "/:User/EditProfile",
      element: <>
      <Navbar/>
      <EditProfile/>
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
     <div className="h-screen w-screen bg-gray-600"  >
     <RouterProvider router={router} />
     </div>
     </NewsState>

    )
  
}
