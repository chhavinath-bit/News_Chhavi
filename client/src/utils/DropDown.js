import React from 'react'

export default function DropDown() {
  return (
    <div className='h-full w-full bg-white flex'>
      <span className="h-full w-1/2">num of article</span>
              <select className='h-full w-1/2' >
                <option>10</option>

                <option>15</option>

                <option>25</option>
              </select>
    </div>
  )
}
