import React, { useState } from 'react'
import NewsItemhorizontally from './NewsItemhorizontally';
export default function ForYou() {
  
    const [arr, setArr]= useState([1,2,3,4,5,6,6,8]);
   
  return (
 <div className="h-11/12 w-full bg-cover flex flex-col items-center overflow-y-auto box-border py-5 ">
   {
    arr.map((_,index)=>{
        return <NewsItemhorizontally key={index} index={index} len={arr.length} />
    })
   }
  
 </div>
  )
}
