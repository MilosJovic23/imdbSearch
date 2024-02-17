


const Movieinfo=({movie})=>{

console.log(movie)
    return(
        <>
            <div>
                <img src={movie.Poster} alt="move poster"/>
                <h2>{movie.Title}</h2>
                <p>{movie.Plot}</p>
            </div>

        </>

    )
}

export default Movieinfo