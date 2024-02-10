
import './App.css';

import SearchBar from "./Components/SearchBar";

 // console.log(process.env.REACT_APP_OMDBAPI_KEY)
 //
 //    console.log(process.env.REACT_APP_URL+"?t=Terminator&apikey="+process.env.REACT_APP_OMDBAPI_KEY)
 //    axios.get(process.env.REACT_APP_URL+"?t=Terminator&apikey="+process.env.REACT_APP_OMDBAPI_KEY)
 //    .then(response=>console.log(response))
 //        .catch(error=>console.log(error))


const ImdbSearch = ()=> {
    return (
        <>
            <h1>Test</h1>
            <SearchBar/>
        </>

    )
}
export default ImdbSearch
