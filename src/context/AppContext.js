import React,{useState} from "react";
import JsonData from '../data/data'
export const AppContext = React.createContext()

export function AppContextProvider({children}){
    const [data,Setdata] = useState([...JsonData])
    const [searchData, setSearchData] = useState(null)

    const ToggleBookMark = (movie) => {
        let [selected_movie] = data.filter(d => d === movie)
        let movie_index = data.indexOf(selected_movie)
        
        Setdata([
            ...data.slice(0,movie_index),
            {...selected_movie , isBookmarked : !selected_movie.isBookmarked},
            ...data.slice(movie_index + 1)

        ]
            

        )

    }
    

    
    
    
    
    
    return(
        <AppContext.Provider 
        value={{
            data,
            Setdata,
            ToggleBookMark,
            searchData,
            setSearchData
            }}
        >
            {children}
        </AppContext.Provider>
    )
}