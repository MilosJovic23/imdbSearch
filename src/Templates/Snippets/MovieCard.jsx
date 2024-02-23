
import "./../../movieCard.css"
import "bootstrap/dist/css/bootstrap.min.css"

const MovieCard=({movies})=>{


    return(
        <>
            <div className="movieCard p-2 text-center rounded-2 mt-2 ms-2 mb-2">
                        <img className="img-thumbnail" src={movies.Poster} alt="move poster"/>
                        <h5 className="text-light mt-2 ">{movies.Title}</h5>
                        <i className="text-black-50">{movies.Year}</i>
            </div>
        </>

    )
}

export default MovieCard