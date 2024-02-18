

import "bootstrap/dist/css/bootstrap.min.css"
const Movieinfo=({movie})=>{

console.log(movie)
    return(
        <>
            <div>
                <img src={movie.Poster} alt="move poster"/>
                <h5>{movie.Title}</h5>
                <p>{movie.Plot}</p>
            </div>

        </>

    )
}

export default Movieinfo