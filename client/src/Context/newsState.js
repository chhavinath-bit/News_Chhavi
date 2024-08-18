import { NewsContext } from "./newscontext";

import React, { useState } from 'react'

export default function NewsState({children}) {
    const [country,setCountry]=useState(localStorage.getItem("country")? localStorage.getItem("country"):"Select Country" );
    const [newsTag, setNewsTag]= useState("");
  return (
    <div>
       <NewsContext.Provider
      value={{
      country,
      setCountry,
      newsTag,
      setNewsTag
      }}
    >
      {children}
    </NewsContext.Provider>
    </div>
  )
}
