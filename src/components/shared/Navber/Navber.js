import React from 'react'
import { AiOutlineFileSearch } from 'react-icons/ai';
const Navber = () => {
  return (
    <div className="navbar flex items-center bg-base-100">
  <div className="flex-1 ">
    <a className="btn btn-ghost normal-case text-xl">Darkfam News</a>
  </div>
  <div className="flex-none gap-2">
  <div className="form-control pt-2">
 
 <label className="input-group">
   <input type="text" placeholder="Search News" className="input input-bordered w-[300px] focus:outline-none" />
   <span ><AiOutlineFileSearch className='text-[20px]'/></span>
 </label>
</div>
    
  </div>
</div>
  )
}

export default Navber