import React from 'react'
import MovieCard from './MovieCard'

export default function Movies({RecommendedMovies}) {
  return (
    <section className='py-3 px-5'>
        
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {RecommendedMovies.map(movie => {
            return(
              <MovieCard movie={movie}/>

            )
          })}
            
            

        </div>
        
        
    </section>
  )
}
