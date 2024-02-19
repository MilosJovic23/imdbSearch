
import "./../movieCard.css"
import "bootstrap/dist/css/bootstrap.min.css"
const Movieinfo=({movie})=>{

console.log(movie)
    return(
        <>
            <div className="movieCard p-2 text-center rounded-2 mt-2">
                <img className="img-thumbnail" src={movie.Poster} alt="move poster"/>
                <h5 className="text-light ">{movie.Title}</h5>
                <i className="text-black">{movie.Year}</i>
            </div>

        </>

    )
}

export default Movieinfo