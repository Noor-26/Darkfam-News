import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../shared/Card/Card'

const SearchedPage = () => {
    const {name} = useParams()
    const [news, setnews] = useState([])
  
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setpostPerPage] = useState(10);
  
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = news?.slice(indexOfFirstPost, indexOfLastPost);

    useEffect(() => { 

      fetch(`https://newsapi.org/v2/everything?q=${name}&from=2022-08-15&sortBy=publishedAt&apiKey=6a1d4f2afd3b4379bd04f56e72a8bb6d`).then(res => res.json()).then(data =>   setnews(data.articles))
   
    }, [name])
    console.log(currentPosts.length)
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(news?.length / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  return (
    <div>
      <h1 className='capitalize text-4xl text-center'>showing results of {name}</h1> 
       <div className='grid grid-cols-4 gap-4 px-4 py-6'>
      {currentPosts?.map(article => <Card article={article}/>)}
      </div>
      {/* pagenation */}
      <div className="flex justify-center p-3 ">
        {pageNumbers.map((number) => (
          <button
            onClick={() => paginate(number)}
            className="page-link btn btn-primary mx-2"
          >
            {number}
          </button>
        ))}
        <select
          className="select select-primary "
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

export default SearchedPage