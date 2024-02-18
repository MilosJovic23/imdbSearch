import  axios  from 'axios';
import { useState, useEffect } from "react";
import MovieInfo from "./MovieInfo";
import "bootstrap/dist/css/bootstrap.min.css"

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
                <input  type="text" onInput={e => {
                    setSearchTitle(e.target.value)
                }}/>
                <button className="btn btn-outline-dark " type="button" onClick={searchMovies}>Search Movies</button>
            </form>

            <MovieInfo movie={moviesData}/>
        </>


    )

}


export default SearchBar