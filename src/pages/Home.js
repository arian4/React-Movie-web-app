import React, { useContext } from 'react'
import Movies from '../components/Movies'
import Search from '../components/Search'
import Trending from '../components/Trending'
import { AppContext } from './../context/AppContext';

export default function Home() {
    const {data,searchData} = useContext(AppContext)
    
    const TrendingMovies = data.filter(m => m.isTrending)
    const RecommendedMovies = data.filter(m => !m.isTrending)
    
    return (
        <section className='lg:col-span-11'>
            <Search />
            {
                searchData ? (
                    <Movies RecommendedMovies = {searchData} />

                )

                
                : (
                    <>
                        <Trending TrendingMovies = {TrendingMovies} />
                        <h2 className='text-[#bbc5da] text-xl mb-4 px-5'>Recommended for you</h2>
                        <Movies RecommendedMovies = {RecommendedMovies} />
                    </>

                )
                
            }

            
            
            
            
        </section>
        
    )
}
