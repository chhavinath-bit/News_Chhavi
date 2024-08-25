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
    FetchNews(data?data.Country: localStorage.getItem("country"),data? data.Category:"none")
  },[location.pathname])
  return (
    <div className="h-11/12 w-full bg-cover flex flex-col items-center overflow-y-auto box-border py-1">
    <Searchbar query={query} setQuery={setQuery} />
    <div className="w-4/5 flex justify-start box-border flex-wrap flex-shrink-0">
    {newsArr.map((data, index)=>{
      return<div key={index} className='w-1/3 h-[70vh] my-2 box-border flex justify-center items-center flex-shrink-0'> <NewsItem  data={data}/></div>
    })}
    </div>
    
    </div>
  )
}
