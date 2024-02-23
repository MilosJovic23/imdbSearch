
import Container from "react-bootstrap/Container";
import MovieCard from "./Snippets/MovieCard";


const SearchResults=({movies})=>{


    return(

        <>
            <div className="bg-dark">
                <Container className="d-flex flex-wrap gap-2 p-2">
                    {movies.map((movie)=>{

                            return  <MovieCard movies={movie}/>
                    }
                    )}
                </Container>
            </div>
        </>
        )
}


export default SearchResults;