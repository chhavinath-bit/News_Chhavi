import React from 'react'
import profile_blank from '../../profile_blank.png'
import { Link } from 'react-router-dom'
import { BiSolidUpvote } from "react-icons/bi";
import { MdReportProblem } from "react-icons/md";
import { BiUpvote } from "react-icons/bi";

export default function NewsItem() {
  return (
    <div className='h-full w-card_width bg-[#021859] border border-[#021E73] rounded-lg shadow-2xl text-white box-border '>
    <div className="w-full h-margin_in_Card box-border flex items-center px-2">
     <img className='aspect-square w-1/12 rounded-full' src={profile_blank}/>
     <button className='h-full w-11/12 text-start ml-3'>
     <Link to='/Profile/username'>user name</Link>
   </button>

    </div> 
    <img className='w-full h-Image_in_Card' src={profile_blank} /> 
    <div className="w-full h-Contentent_in_Card box-border p-2">
    <h1 className='text-2xl font-bold'>Headline of the news</h1>  
    <p className='text-base'>lorem !lorem</p>
    </div>
    <div className='w-full h-px bg-white'></div>
    <div className='w-full h-margin_in_Card flex justify-between box-border px-4'>
      <button> <BiSolidUpvote color='green'/> </button>
      <button> <MdReportProblem color='yellow'/> </button>
    </div>

    </div>
  )
}
