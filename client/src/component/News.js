import { useContext, useEffect, useState } from "react"
import React from 'react'
import { NewsContext } from "../Context/newscontext"
import Searchbar from "../utils/Searchbar"
import NewsItem from "./NewsItem"
export default function News() {
  const [newsArticles,setNewsArticles]= useState([]);
  const {country, newsTag}= useContext(NewsContext);
  
  const[query, setQuery]= useState("");
  useEffect(()=>{
   const temp=[];
   console.log(window.location.pathname.substring(6))
   for(let i=0; i<40; i++) temp.push(i);
   setNewsArticles(temp);
   
  },[newsTag])
  return (
    <div className="h-11/12 w-full bg-cover flex justify-around overflow-y-auto box-border flex-wrap py-1">
    <Searchbar query={query} setQuery={setQuery} />
    
    {newsArticles.map((data, index)=>{
      return<div key={index} className='w-1/3 h-card_block my-2 box-border flex justify-center items-center'> <NewsItem  data={data}/></div>
    })}
    
    </div>
  )
}
