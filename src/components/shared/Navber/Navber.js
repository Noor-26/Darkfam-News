import React, { useRef } from 'react'
import { AiOutlineFileSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
const Navber = () => {
  const navigate = useNavigate()
  const inputText = useRef()
  const search = () =>{
    if(inputText.current.value !== ""){

      navigate(`/search/${inputText.current.value}`)
    }

  }
  const searchByName = (e) => {
    e.preventDefault()
    search()
  }
  return (
    <div className="navbar flex items-center bg-primary mb-4">
  <div className="flex-1 ">
    <a className="btn btn-ghost normal-case text-xl text-black" >Darkfam News</a>
  </div>
  <div className="flex-none gap-2">
    <form onSubmit={searchByName}>

  <div className="form-control pt-2">
 
 <label className="input-group">
   <input type="text" placeholder="Search News" className="input input-bordered w-[300px] focus:outline-none" ref={inputText}/>
   <span onClick={search}><AiOutlineFileSearch className='text-[20px] cursor-pointer'/></span>
 </label>
</div>
    </form>
    
  </div>
</div>
  )
}

export default Navber