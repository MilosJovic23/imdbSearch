
import Container from "react-bootstrap/Container";
import MovieCard from "./Snippets/MovieCard";


const SearchResults=()=>{


    return(

        <>
            <div className="bg-dark">
                <Container className="d-flex flex-wrap gap-2 p-2">
                  <MovieCard/>
                </Container>
            </div>
        </>
        )
}


export default SearchResults;