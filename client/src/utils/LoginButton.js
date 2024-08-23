import React from 'react'
import {Link} from "react-router-dom";
export default function LoginButton() {
  return (
    <div className='h-full w-1/4 flex justify-start items-center'>
      <button className='bg-yellow-100 text-[#010326] h-2/3 w-[90%] rounded-md'>
      <Link className='h-full w-full' to='/auth/login'>
      Login</Link></button>
      
    </div>
  )
}
