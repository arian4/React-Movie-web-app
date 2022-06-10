import React, { useContext } from 'react'
import Search from '../components/Search'
import Movies from '../components/Movies'
import { AppContext } from './../context/AppContext';

export default function BookmarkPage() {
    const {data,searchData} = useContext(AppContext)
    
    const BookmarkedMovies = data.filter(m => m.category === 'Movie' && m.isBookmarked)
    const BookmarkedTVSeries = data.filter(m => m.category === 'TV Series' && m.isBookmarked)  
    return (
        <section className='lg:col-span-11'>
            <Search />
            {
                searchData ? (
                    <Movies RecommendedMovies = {searchData} />

                )

                
                : (
                    <>
                        <h2 className='text-[#bbc5da] text-xl px-5'>Bookmarked Movies</h2>
                        <Movies RecommendedMovies={BookmarkedMovies} />
                        <h2 className='text-[#bbc5da] text-xl px-5'>Bookmarked TV Series</h2>
                        <Movies RecommendedMovies={BookmarkedTVSeries} />
                    </>

                )
            }
            
            
        </section>
    )
}
