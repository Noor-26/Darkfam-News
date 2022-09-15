import React from 'react'

const Card = ({article}) => {
    const {author,source,description,publishedAt,title,url,urlToImage,content} = article
  return (
    
    <div className="card card-compact h-fit bg-base-100 shadow-xl">
  <figure><img src={urlToImage} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-[16px]'>{description || content}</p>
   <a href={url} target="_blank" className="capitalize hover:underline">click to read more</a>
  </div>
  <p className="text-center bg-slate-400 py-3">{publishedAt}</p>
</div>
  )
}

export default Card