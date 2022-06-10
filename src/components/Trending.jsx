import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TrendingCard from './TrendingCard'

export default function Trending({TrendingMovies}) {
  
  return (
    <section className='py-3 px-5 '>
        <h2 className='text-[#bbc5da] text-xl '>Trending</h2>
        <div className='mt-5 w-full'>
          <Swiper
              
              
              
              breakpoints={{
                // when window width is >= 640px
                640: {
                  spaceBetween: 40,
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                768: {
                  
                  spaceBetween: 40,
                  slidesPerView: 2,
                },
                1024 : {
                 
                  spaceBetween: 40,
                  slidesPerView: 3,

                },
                
              }}
              
          >
            {
              TrendingMovies.map(movie => {
                return(
                  <SwiperSlide><TrendingCard movie = {movie} /></SwiperSlide>

                )
              })
            }
          
            <SwiperSlide></SwiperSlide>
        
          </Swiper>

        </div>
        
    </section>
  )
}
