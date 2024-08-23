import React from 'react'
import profile_blank from '../../profile_blank.png'
import { Link } from 'react-router-dom'
import { BiSolidUpvote } from "react-icons/bi";
import { MdReportProblem } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { BiUpvote } from "react-icons/bi";
import { FaSadCry, FaTrash } from "react-icons/fa";
export default function YourNews({index, len, data}) {
    return (
        <div className={`w-2/3 h-[30%] flex-shrink-0 bg-[#021859] border-white border-l border-r flex flex-col items-center ${index===len-1 && "rounded-b-xl"}`}>
            {index!==0 && <div className='h-[1%] w-4/5 bg-white'></div>}
            <div className='w-full h-[99%] box-border p-2 flex text-white' >
                <img className='w-1/3 h-full' src={profile_blank}/>
                <div className='w-2/3 h-full box-border px-2'>
                    <div className='w-full h-4/5 box-border'>
                        <h1 className='text-2xl font-bold'>{data.heading}</h1>  
                        <p className='text-base'>{data.Content.substring(0,50)}</p>
                    </div>
                    <div className='w-[85%] h-1/5 flex justify-between box-border pl-3'>
                        <button className='flex text-center items-center'> <BiSolidUpvote color='green' className='mr-1'/>{data.likes.length} </button>
                        <button className='flex text-center items-center'><FaTrash/> </button>
                        <button className='flex text-center items-center'><FaEdit/> </button>
                        <button className='flex text-center items-center'> <MdReportProblem color='yellow'/> </button>
                    </div>
                </div>
            </div>
            
        </div>
      )
}
