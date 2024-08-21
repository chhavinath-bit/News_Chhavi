import React, { useContext, useState } from "react";
import { Link, Navigate} from "react-router-dom";
import { NewsContext } from "../Context/newscontext";
import { CiSquarePlus } from "react-icons/ci";
import ColorWheel from "../utils/CoolorWheel";
import ProfileLogo from '../utils/ProfileLogo'
export default function Navbar() {
  const { country, setCountry , setNewsTag} = useContext(NewsContext);

  const navigation1 = [
    country === "Select Country" ? "Country" : country,
    "World",
  ];
  const navigation2 = [
    
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];
  const [currentButton, setCurrentButton] = useState(window.location.pathname);
  let ChangeColor=()=>{
    setNewsTag(window.location.pathname)
    setCurrentButton(window.location.pathname);
  }
  const mapThevalueTag=(arg)=>{
    if(country !== "Select Country"){ 
      return <Link to= {`/News/${country}/${arg}`} >
      {arg}
      </Link>
    }
    return arg;

  }
  const mapThevalue=(arg)=>{
    if(country !== "Select Country"){ 
      return <Link to= {`/News/${arg}`}>
      {arg}
      </Link>
    }
    return arg;

  }
  const mapForYou=()=>{
    if(country !== "Select Country"){ 
      return <Link to= {`/News/following/ForYou`}>
      {"For You"}
      </Link>
    }
    return "For You";

  }
  return (
    <div className="h-1/12 w-full bg-black text-white  flex justify-between">
      <div className="h-full w-3/4 flex justify-start shadow-2xl items-center">
        <button
          className="mx-2 h-full"
          onClick={() => {
            setCountry("Select Country");
            localStorage.setItem("country", "Select Country");
            setNewsTag("")
            
          }}
        >
         <Link to= {`/`}>
                  News
         </Link>
          {country==="Select Country" && <Navigate to="/"/>}
        </button>
        {navigation1.map((val, index) => {
          return (
            <button
              className={`mx-2 h-full text-base cursor-not-allowed ${(window.location.pathname===`/News/${val}`)? "text-blue-600":"text-white"}`}
              disabled={country === "Select Country"}
              key={index}
              onClick={ChangeColor} 
            >
            {mapThevalue(val)}
            
            </button>
          );
        })}
        <button
              className={`mx-2 h-full text-base cursor-not-allowed ${(window.location.pathname===`/News/following/ForYou`)? "text-blue-600":"text-white"}`}
              disabled={country === "Select Country"}
              onClick={ChangeColor} 
            >
            {mapForYou()}
            </button>
        <button disabled className="w-px h-2/3 bg-white"></button>
        {navigation2.map((val, index) => {
          return (
            <button
              className={`mx-2 h-full text-base cursor-not-allowed active:text-blue ${(window.location.pathname===`/News/${country}/${val}`)? "text-blue-600":"text-white"}`}
              disabled={country === "Select Country"}
              key={index}
              onClick={ChangeColor} 
            >
             {mapThevalueTag(val)}
            </button>
          );
        })}
      </div>
      <div className="h-full w-1/4 flex justify-end items-center ">
      <Link to=""> Post News<CiSquarePlus size={40}/> </Link>
       <ColorWheel/> 
       <ProfileLogo/>
      </div>
    </div>
  );
}
