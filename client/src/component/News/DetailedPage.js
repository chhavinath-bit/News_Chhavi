import React from 'react'
import { useLocation, Link } from 'react-router-dom';
export default function DetailedPage() {
    const location= useLocation()
  const data= location.state
  console.log(data)
    console.log("detailedPage Data", data)
  return (
    <div>
      
    </div>
  )
}
