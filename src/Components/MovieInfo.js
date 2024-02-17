


const Movieinfo=(props)=>{

console.log(props)
    return(
        <>
            <div>
                <img src={props.data.Poster} alt="move poster"/>
                <h2>{props.data.Title}</h2>
                <p>{props.data.Plot}</p>
            </div>

        </>

    )
}

export default Movieinfo