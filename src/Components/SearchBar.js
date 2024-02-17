import  axios  from 'axios';
import { useState, useEffect } from "react";
import MovieInfo from "./MovieInfo";

const SearchBar= ()=>{
    const [searchTitle,setSearchTitle]=useState("")
    const [moviesData,setMoviesData]=useState({})
    const searchMovies=()=>{


        // console.log(searchTitle)
        axios.get(process.env.REACT_APP_URL+"?t="+searchTitle+"&apikey="+process.env.REACT_APP_OMDBAPI_KEY)
            .then(response=>setMoviesData(response.data))
            .catch(error=>console.log(error))

    }

    useEffect(()=>{
        searchMovies()
    },[]);

    return(
        <>
            <form>
                <input type="text" onInput={e => {
                    setSearchTitle(e.target.value)
                }}/>
                <button type="button" onClick={searchMovies}>Search Movies</button>
            </form>

            <MovieInfo data={moviesData}/>
        </>


    )

}


export default SearchBar