import React, {useRef, useState} from 'react'
import profile_blank from '../profile_blank.png'
import { Link } from 'react-router-dom';

const showMoreProfile=()=>{

}
export default function ProfileLogo() {
  
  const showinMore= useRef("");

 const naviagteTOprofile=()=>{
  showinMore.current.style.display= (showinMore.current.style.display==="flex")?"none":"flex" ;
 }
 
 
  return (
    <div className='h-full w-1/4 flex items-center justify-around'>
      
     <img src ={profile_blank} className='aspect-square h-3/4 rounded-full' alt='' onClick={naviagteTOprofile}/> 
     <div ref={showinMore} className={`fixed flex-col hidden justify-start shadow-2xl p-2 top-14 right-0 box-border rounded-md bg-slate-800`}> 
       <button onClick={naviagteTOprofile}>
       <Link to= {'/Profile/chhavi'}>
       My Profile
       </Link>
       </button>
       <hr></hr>
       <button onClick={naviagteTOprofile}>
       <Link to= {'/chhavi/EditProfile'}>
        Edit Profile
       </Link>
       </button>
       </div>
    </div>
  )
}
