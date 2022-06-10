import React, { useContext } from 'react'
import Search from '../components/Search'
import Movies from '../components/Movies'
import { AppContext } from './../context/AppContext';

export default function MoviesPage() {
    const {data,searchData} = useContext(AppContext)
    
    const movies = data.filter(m => m.category === 'Movie' && !m.isTrending)
    return (
        
        <section className='lg:col-span-11'>
            <Search />
            {
                searchData ? (
                    <Movies RecommendedMovies = {searchData} />

                )

                
                : (
                    <>
                        <h2 className='text-[#bbc5da] text-xl px-5'>Movies</h2>
                        <Movies RecommendedMovies={movies} />
                    </>

                )
            }
                
            
            
            
            
        </section>
            
    )
}
