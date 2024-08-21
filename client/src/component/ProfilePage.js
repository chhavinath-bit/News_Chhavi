import React, {useState} from 'react'
import profile_blank from '../profile_blank.png'
import YourNews from './YourNews';
export default function ProfilePage() {
  const [arr, setArr]= useState([1,2,3,4,5,6,6,8]);
  return (
    <div className="h-11/12 w-full bg-cover flex flex-col items-center overflow-y-auto box-border pt-2">
          <div className='w-2/3 h-1/2 bg-black flex box-border rounded-t-lg text-white flex-shrink-0'>
              <div className='w-1/5 h-full flex items-center mx-6'>
                  <img src ={profile_blank} className='w-full aspect-square rounded-full'  alt=''/>     
              </div>
                
              <div className='h-full w-4/5 flex items-center justify-around'>
                  <div className='text-center'>
                    <h1>x</h1>
                    <p>news</p>
                  </div>
                  <button className='text-center'>
                    <h1>y</h1>
                    <p>follower</p>
                  </button>
                  <button className='text-center'>
                    <h1>z</h1>
                    <p>following</p>
                  </button>
                </div>
          </div>
          <div className='h-px w-2/3 bg-white flex-shrink-0'>

          </div>
          {
    arr.map((_,index)=>{
        return <YourNews key={index} index={index} len={arr.length} />
    })
   }
      
    </div>
  )
}
