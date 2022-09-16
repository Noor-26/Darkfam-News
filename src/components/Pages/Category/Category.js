import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../shared/Card/Card'
import Loading from '../../shared/Loading/Loading'

const Category = () => {
  const {categoryName} = useParams()
  const [loading, setLoading] = useState(false)
    
    const [news, setnews] = useState([])
  
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setpostPerPage] = useState(10);
  
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = news?.slice(indexOfFirstPost, indexOfLastPost);

    useEffect(() => { 
      setLoading(true)
      fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${categoryName}&apiKey=6a1d4f2afd3b4379bd04f56e72a8bb6d`).then(res => res.json()).then(data =>   setnews(data.articles))
   setLoading(false)
    }, [categoryName])
   
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(news?.length / postsPerPage); i++) {
      pageNumbers.push(i);
    }
    if(news?.length === 0 || loading){
      return <Loading/>
    }
  return (
    <div>
      <h1 className='uppercase text-5xl md:text-6xl text-center category_head'> {categoryName} news</h1> 
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 px-4 py-6'>
      {currentPosts?.map(article => <Card article={article}/>)}
      </div>
      {/* pagenation */}
      <div className="flex justify-center p-3 ">
        {pageNumbers.map((number) => (
          <button
            onClick={() => paginate(number)}
            className="btn bg-[#ffbe0b] border-2 focus:bg-white  hover:bg-white  text-black hover:border-[#ffbe0b] border-[#ffbe0b] mx-2"
          >
            {number}
          </button>
        ))}
        <select
          className="select border-2 border-[#ffbe0b] focus:outline-none"
          onChange={(event) => setpostPerPage(event.target.value)}
        >
          <option value="5">5</option>
          <option value="10" selected>
            10
          </option>
          
        </select>
      </div>
    </div>
  )
}

export default Category