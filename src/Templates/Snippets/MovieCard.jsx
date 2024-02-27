
import "./../../movieCard.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { useContext } from "react";
import { moviesContext } from "../../Components/Search";


const MovieCard=()=> {

    const {movies} = useContext(moviesContext)

    return (
        <>
            {movies.map((movie,index)=> {
                       return (
                           <div className="movieCard p-2 text-center rounded-2 mt-2 ms-2 mb-2"  key={index}>
                                <img className="img-thumbnail" src={movie.Poster} alt="move poster"/>
                                <h5 className="text-light mt-2 " >{movie.Title}</h5>
                                <i className="text-black-50">{movie.Year}</i>
                           </div>)
            })}
        </>

    )
}

export default MovieCard