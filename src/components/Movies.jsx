import React from 'react'
import MovieCard from './MovieCard'
import { AnimatePresence , motion} from 'framer-motion';

export default function Movies({RecommendedMovies}) {
  return (
    <section className='py-3 px-5'>
        
          <motion.div layout className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            <AnimatePresence>
                {RecommendedMovies.map((movie , index) => {
                  return(
                    <MovieCard key={index} movie={movie}/>

                  )
                })}
            </AnimatePresence>
           
              
              

          </motion.div>
        

        
        
        
        
    </section>
  )
}
