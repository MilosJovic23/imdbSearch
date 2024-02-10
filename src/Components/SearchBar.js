

import  axios  from 'axios';
import { useState } from "react";

const SearchBar= ()=>{
    const [searchTitle,setSearchTitle]=useState()
    const searchMovies=()=>{


        // console.log(searchTitle)
        axios.get(process.env.REACT_APP_URL+"?t="+searchTitle+"&apikey="+process.env.REACT_APP_OMDBAPI_KEY)
            .then(response=>console.log(response))
            .catch(error=>console.log(error))

    }

    return(
      <form>
          <input type="text" onInput={e=>{setSearchTitle(e.target.value)}}/>
          <button type="button" onClick={searchMovies}>Search Movies</button>
      </form>
    )

}


export default SearchBar