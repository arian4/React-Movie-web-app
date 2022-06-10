import React, { useContext, useEffect, useState } from 'react'
import useDebounce from './../hooks/useDebounce';
import { AppContext } from './../context/AppContext';

export default function Search() {
  const {data,searchData,setSearchData} = useContext(AppContext)
  const [inputText, SetinputText] = useState('')
  const debouncedSearchTerm = useDebounce(inputText, 1500)
  
  useEffect(() => {
    
    if(!inputText){
      setSearchData(null)
      return


    } 
    
    if(debouncedSearchTerm){
      
      setSearchData(data.filter(d => d.title.toLowerCase().includes(inputText.toLowerCase())))
      

    }else{
      setSearchData(null)
      return
    }
  
    
  }, [debouncedSearchTerm])
  
  return (
    <>
      <div className='flex items-center justify-between px-2 py-3'>
        <svg className='mr-5' width="32" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z" fill="#FFF"/></svg>
        <input value={inputText} onChange={(e) => SetinputText(e.target.value)} className='w-full p-1 border-b-2 border-transparent  bg-transparent outline-none text-white text-sm md:text-base placeholder:text-[#5a6985] focus:border-b-2 focus:border-[#5a6985]' placeholder='Search for movies or TV series'/>
      </div>
      {
        searchData && <h2 className='text-[#bbc5da] text-xl mb-4 px-5'>{`Found ${searchData.length} results for '${inputText}'`}</h2>
      }
      
    </>
    
  )
}
