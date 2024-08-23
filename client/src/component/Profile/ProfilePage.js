import React, {useState, useContext, useEffect} from 'react'
import { useLocation, Link } from 'react-router-dom';
import { NewsContext } from "../../Context/newscontext";
import profile_blank from '../../profile_blank.png'
import YourNews from './YourNews';
export default function ProfilePage() {
  const {newsArr, getProfile, profileInfo} = useContext(NewsContext);
  const location= useLocation()
  const data= location.state
  
  useEffect(()=>{
    getProfile(data.id);
    
  },[])
  return (
    <div className="h-11/12 w-full bg-cover flex flex-col items-center overflow-y-auto box-border pt-4">
          <div className='w-2/3 h-1/2 bg-[#021859] border border-[#021E73] flex box-border rounded-t-lg text-white flex-shrink-0'>
              <div className='w-1/5 h-full flex items-center mx-6'>
                  <img src ={profileInfo.profilePhoto!==""? profileInfo.profilePhoto : profile_blank} className='w-full aspect-square rounded-full'  alt=''/>     
              </div>
                
              <div className='h-full w-4/5 flex items-center justify-around'>
                  <div className='text-center'>
                    <h1>{newsArr.length}</h1>
                    <p>news</p>
                  </div>
                  <button className='text-center'>
                  <Link to="/Profile/AllUser" state={{type:"Follower", data: profileInfo.followers}}>     
                    <h1>{profileInfo.followers.length}</h1>
                    <p>follower</p>
                    </Link>   
                  </button>
                  <button className='text-center'>
                     <Link to="/Profile/AllUser" state={{type:"Following", data: profileInfo.following}}>
                    <h1>{profileInfo.following.length}</h1>
                    <p>following</p>
                    </Link>
                  </button>
                </div>
          </div>
          <div className='h-px w-2/3 bg-white flex-shrink-0'>

          </div>
          {
    newsArr.map((data,index)=>{
        return <YourNews key={index} index={index} data={data} len={newsArr.length} />
    })
   }
      
    </div>
  )
}
