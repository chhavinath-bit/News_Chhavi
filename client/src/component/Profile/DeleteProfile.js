import React, {useRef} from 'react'

export default function DeleteProfile({DeleteProfile_Modal}) {
    const errmsg= useRef("")
    const deleteaccount=()=>{

    }
  return (
    
    <div className='w-3/4 box-border h-[90vh] hidden overflow-y-auto p-4 justify-start text-[#010326]' ref={DeleteProfile_Modal}>
   
        <button
          onClick={deleteaccount}
          className="bg-[#FF4C4C] text-[#F1F1F1] h-[8%] w-[20%] rounded-3xl mt-5"
        >
          Delete
        </button>
       
        <p className="mt-3 text-red-600 text-xl italic hidden" ref={errmsg}>
          {" "}
        </p>
    </div>
  )
}
