import React, { useRef } from 'react'
import { AiOutlineFileSearch } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
const Navber = () => {
  const navigate = useNavigate()
  const inputText = useRef()
  const search = () =>{
    if(inputText.current.value !== ""){

      navigate(`/search/${inputText.current.value}`)
      inputText.current.value=""
    }

  }
  const searchByName = (e) => {
    e.preventDefault()
    search()
  }
  return (
    <div className="navbar bg-[#ffbe0b] mb-3">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/category/technology">Tech</Link></li>
        <li><Link to="/category/business">Business</Link></li>
        <li><Link to="/category/health">Food</Link></li>
        <li><Link to="/category/sports">Sports</Link></li>
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl md:text-2xl text-black" >Darkfam News</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    <li><Link to="/category/technology" className='hover:bg-[#f8df02] border-2 border-[#f8df02]  btn btn-md  mx-1 hover:border-[#f8df02] focus:bg-[#f8df02]  bg-[#ffbe0b]'>Technology</Link></li>
        <li><Link to="/category/business" className='hover:bg-[#f8df02] border-2 border-[#f8df02]  btn btn-md  mx-1 hover:border-[#f8df02] focus:bg-[#f8df02]  bg-[#ffbe0b]'>Business</Link></li>
        <li><Link to="/category/health" className='hover:bg-[#f8df02] border-2 border-[#f8df02]  btn btn-md  mx-1 hover:border-[#f8df02] focus:bg-[#f8df02]  bg-[#ffbe0b]'>Health</Link></li>
        <li><Link to="/category/sports" className='hover:bg-[#f8df02] border-2 border-[#f8df02]  btn btn-md  mx-1 hover:border-[#f8df02] focus:bg-[#f8df02]  bg-[#ffbe0b]'>Sports</Link></li>
    </ul>
  </div>

  {/* Search Input */}
  <div className="navbar-end">
  <form onSubmit={searchByName}>

<div className="form-control pt-2">

<label className="input-group">
 <input type="text" placeholder="Search News" className="input input-bordered w-[150px] md:w-[300px] focus:outline-none" ref={inputText}/>
 <span onClick={search}><AiOutlineFileSearch className='text-[20px] cursor-pointer'/></span>
</label>
</div>
  </form>
  </div>
</div>
  )
}

export default Navber
