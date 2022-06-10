import React, { useContext } from 'react'
import { BOOKMARK_FULL,BOOKMARK_EMPTY } from '../helpers/Icons'
import { AppContext } from './../context/AppContext';


export default function BookMark({movie}) {
    const {ToggleBookMark} = useContext(AppContext)
    return (
        <div onClick={() => {ToggleBookMark(movie)} } className="absolute z-20 top-2 right-2 p-2 rounded-full bg-black opacity-80">
                {
                    movie.isBookmarked ? (
                        BOOKMARK_FULL
                    ) : (
                        BOOKMARK_EMPTY


                    )
                }
            </div>
    )
}
