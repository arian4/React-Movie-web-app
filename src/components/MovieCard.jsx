import React from 'react'
import BookMark from './BookMark'



export default function MovieCard({movie}) {
    
  return (
    <div className='relative group cursor-pointer'>
        
        <div className='relative'>
            <img className='w-full rounded-xl' src={movie.thumbnail.regular.large} alt={movie.title}/>
            <div className="absolute z-10 inset-0 bg-black transition-opacity opacity-0 group-hover:opacity-60 rounded-xl flex items-center justify-center">
                <div className="flex items-center justify-between w-[100px] bg-[#697180]  py-2 px-4 rounded-2xl">
                    <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z" fill="#FFF"/></svg>
                    <span className="text-[#fff] font-medium">play</span>

                </div>
            </div>

        </div>
        
        <BookMark movie = {movie} />
        <div className='px-3 py-1'>
            <ul className="text-[#bbc5da]  font-medium w-full flex items-center justify-between ">
                <li className=" text-xs sm:text-sm lg:text-base">{movie.year}</li>
                <li className=" text-xs sm:text-sm lg:text-base flex items-center">
                    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z" fill="#FFF" opacity=".75"/></svg>
                    <span className="ml-2">{movie.category}</span>

                </li>
                <li className=" text-xs sm:text-sm lg:text-base">{movie.rating}</li>
            </ul>
        </div>
        <p className=" text-white font-medium">{movie.title}</p>

    </div>
  )
}


