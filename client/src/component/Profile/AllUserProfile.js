import React, {useState, useContext, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import { NewsContext } from "../../Context/newscontext";


export default function AllUserProfile() {
    const location= useLocation()
    const data= location.state
    console.log(data)
  return (
    <div>
      
    </div>
  )
}
