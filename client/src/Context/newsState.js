import { NewsContext } from "./newscontext";
import {GetProfile, FetchAllNews} from '../Api'
import React, { useState } from 'react'

export default function NewsState({children}) {
    const [country,setCountry]=useState(localStorage.getItem("country")? localStorage.getItem("country"):"Select Country" );
    const [newsTag, setNewsTag]= useState("")
    const [isLogin, setIsLogin]= useState(localStorage.getItem("Token")? true: false)
    const [newsArr, setNewsArr]= useState([])
    const [profileurl, setProfileurl]= useState(localStorage.getItem("profilePhoto")||"")
    const [profileInfo, setProfileInfo]=useState({
      following:[],
      followers:[],
      profilePhoto:"",
      name:""
    })

    const getProfile= async (id)=>{
      
       try {
           const Profile= await fetch(GetProfile+"/"+id, {
            method: 'GET',
            headers: {
                  "Content-Type": "application/json",
                  "Token": localStorage.getItem("Token"),
                },
             
           })
           const profileData= await Profile.json()
           console.log(profileData)
           setProfileInfo({
            following: [...profileData.following],
            followers: [...profileData.followers],
            profilePhoto:profileData.profilePhoto,
            name: profileData.name
           })
           setNewsArr(profileData.news)
          
       }catch(err){
           console.log(err)
       }  
    }
    const FetchNews= async(country, Category)=>{
       const url=FetchAllNews+"/"+country+"/"+Category
      try {
        const Profile= await fetch(url, {
         method: 'GET',
         headers: {
               "Content-Type": "application/json",
               "Token": localStorage.getItem("Token"),
             },
          
        })
        const NewsData= await Profile.json()
        console.log("NewsData",NewsData)
        setNewsArr(NewsData)
       
    }catch(err){
        console.log(err)
    }  

    }
  return (
    <div>
       <NewsContext.Provider
      value={{
      country,
      setCountry,
      newsTag,
      setNewsTag,
      isLogin,
      setIsLogin,
      profileurl,
      setProfileurl,
      newsArr,
      setNewsArr,
      getProfile,
      profileInfo,
      FetchNews
      }}
    >
      {children}
    </NewsContext.Provider>
    </div>
  )
}
