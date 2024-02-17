import  axios  from 'axios';
import { useState, useEffect } from "react";

const SearchBar= ()=>{
    const [searchTitle,setSearchTitle]=useState("")
    const [responseData,setResponseData]=useState({})
    const searchMovies=()=>{


        // console.log(searchTitle)
        axios.get(process.env.REACT_APP_URL+"?t="+searchTitle+"&apikey="+process.env.REACT_APP_OMDBAPI_KEY)
            .then(response=>setResponseData(response.data))
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

            <img src={responseData.Poster} alt="poster of a movie"/>
            <h2>{responseData.Title}</h2>
            <p>{responseData.Plot}</p>
        </>


    )

}


export default SearchBar