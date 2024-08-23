
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import News from './component/News/News';
import Login from './component/Authentication/Login'
import AllUserProfile from './component/Profile/AllUserProfile'
import Sign from './component/Authentication/Sign';
import Query from './component/News/Query';
import Navbar from './component/navigation/Navbar';
import Footer from "./component/navigation/Footer"
import Home from './component/Home/Home';
import ProfilePage from './component/Profile/ProfilePage';
import { NewsContext } from './Context/newscontext';
import EditProfile from './component/Profile/EditProfile'
import UploadImage from './component/Authentication/UploadImage';
import React, { useState, useContext } from 'react'
import ForYou from './component/News/ForYou';
import NewsState from './Context/newsState';
import AddNews from './component/AddNews'
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
      path:`/News/detailedPage/:newsId`,
      element:<>
      <Navbar/>
      <News/>
      <Footer/>
     </>,
    },
    {
      path:`/News/newNews/post`,
      element:<>
      <Navbar/>
      <AddNews/>
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
      path: "/News/Search/Query",
      element: <>
      <Navbar/>
      <Query/>
      <Footer/>
    </>,
    },
    {
      path: "/Profile/User",
      element: <>
      <Navbar/>
      <ProfilePage/>
      <Footer/>
    </>,
    },
    {
      path: "/Profile/AllUser",
      element: <>
      <Navbar/>
      <AllUserProfile/>
      <Footer/>
    </>,
    },
    {
      path: "/User/EditProfile",
      element: <>
      <Navbar/>
      <EditProfile/>
      <Footer/>
    </>,
    },
    {
      path: "/auth/login",
      element: <>
      <Navbar  />
      <Login />
      <Footer/>
    </>,
    },
    {
      path: "/auth/signup/uploadphoto",
      element: <>
      <Navbar  />
      <UploadImage />
      <Footer/>
    </>,
    },
    {
      path: "/auth/signup",
      element: <>
      <Navbar/>
      <Sign/>
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
     <div className="h-screen w-screen bg-[#010326]"  >
     <RouterProvider router={router} />
     </div>
     </NewsState>

    )
  
}
