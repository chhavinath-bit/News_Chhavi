import { useContext } from "react"
import React from 'react'
import { NewsContext } from "../Context/newscontext"
import Searchbar from "../utils/Searchbar"

export default function News() {
 
  const {country, newsTag}= useContext(NewsContext)
  
  return (
    <div className="h-11/12 w-full bg-cover flex justify-start overflow-y-auto box-border p-2">
    <Searchbar/>
      
    </div>
  )
}
