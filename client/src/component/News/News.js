import { useContext, useEffect, useState } from "react"
import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import { NewsContext } from "../../Context/newscontext"
import Searchbar from "../../utils/Searchbar"
import NewsItem from "./NewsItem"
export default function News() {
  const { newsArr, FetchNews}= useContext(NewsContext);
  const location= useLocation()
  
  const data= location.state
  
  
  const[query, setQuery]= useState("");
  useEffect(()=>{
    FetchNews(data.country, data.Category)
  },[location.pathname])
  return (
    <div className="h-11/12 w-full bg-cover flex justify-around overflow-y-auto box-border flex-wrap py-1">
    <Searchbar query={query} setQuery={setQuery} />
    
    {newsArr.map((data, index)=>{
      return<div key={index} className='w-1/3 h-card_block my-2 box-border flex justify-center items-center'> <NewsItem  data={data}/></div>
    })}
    
    </div>
  )
}
