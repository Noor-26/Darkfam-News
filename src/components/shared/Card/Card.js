import React from 'react'

const Card = ({article}) => {
    const {description,publishedAt,title,url,urlToImage: image,content} = article
    
  return (
    
    <div className="card card-compact h-fit bg-base-100 shadow-xl" data-aos="fade-up"
    data-aos-anchor-placement="top-center"
    data-aos-duration="1000" >
  <figure><img src={image || ""} alt="news images" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-[16px]'>{description || content}</p>
   <a href={url} target="_blank" className="capitalize hover:underline">click to read more</a>
  </div>
  <p className="text-center bg-slate-400 py-3">Published At : {publishedAt.slice(0,10)}</p>
</div>
  )
}

export default Card