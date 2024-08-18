import React, {useContext} from 'react'
import { Link , Navigate} from 'react-router-dom'
import { NewsContext } from '../Context/newscontext';
import DropDown from '../utils/DropDown'
import ColorWheel from '../utils/CoolorWheel'
export default function Navbar() {
  const {country, setCountry, setNewsTag} = useContext(NewsContext);
  const navigation=[country==="Select Country"?"Country":country,"World","Business","Entertainment","Health","Science","Sports", "Technology"];
  
  
  return (
    <div className='h-1/12 w-full flex justify-between'>
    <div className='h-full w-3/4 bg-black flex justify-start text-white shadow-2xl'>
    <button  className='mx-2 h-full' onClick={()=>{
      setCountry("Select Country");
      localStorage.setItem("country", "Select Country")
      setNewsTag("")
    }}>News</button>
    {country==="Select Country" && <Navigate to="/" />}
    {navigation.map((val, index)=>{
      return <button className='mx-2 h-full text-base cursor-not-allowed' disabled={country==="Select Country"} key={index} onClick={()=> {setNewsTag(val)}}>{val}</button>
    })}
    
    </div>
    <div className='h-full w-1/4'>
    <DropDown/>
    <ColorWheel/>
    </div>  
    </div>
  )
}
