import React from 'react'
import profile_blank from '../profile_blank.png' 
import { Link } from 'react-router-dom'
import { BiSolidUpvote } from "react-icons/bi";
import { MdReportProblem } from "react-icons/md";
import { BiUpvote } from "react-icons/bi";
export default function NewsItemhorizontally({index, len}) {
  return (
    <div className={`w-2/3 h-2/5 flex-shrink-0 bg-black flex flex-col items-center ${index===0 && "rounded-t-xl"} ${index===len-1 && "rounded-b-xl"}`}>
        {index!==0 && <div className='h-[1%] w-4/5 bg-white'></div>}
        <div className='w-full h-[99%] box-border p-2 flex text-white' >
            <img className='w-1/3 h-full' src={profile_blank}/>
            <div className='w-2/3 h-full box-border px-2'>
                <div className='w-full h-1/5 flex'>
                    <div className='w-[6%] h-full'>
                        <img className='aspect-square w-full rounded-full' src={profile_blank}/>
                    </div>
                    <button className='h-full w-[94%] text-start ml-3'>
                    <Link to='/Profile/username'>user name</Link>
                    </button>
                </div>
                <div className='w-full h-3/5 box-border'>
                    <h1 className='text-2xl font-bold'>Headline of the news</h1>  
                    <p className='text-base'>lorem !lorem</p>
                </div>
                <div className='w-[85%] h-1/5 flex justify-between box-border pl-3'>
                    <button> <BiSolidUpvote color='green'/> </button>
                    <button> <MdReportProblem color='yellow'/> </button>
                </div>
            </div>
        </div>
        
    </div>
  )
}
