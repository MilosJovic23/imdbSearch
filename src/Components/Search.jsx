import {Button, Form} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css"
import {useState} from "react";
import axios from "axios";
import SearchResults from "../Templates/SearchResults";

const Search =()=>{

    const [movies,setMovies]= useState([])
    const [searchTerm,setSearchTerm]=useState()
    const Search=()=>{
        axios.get(process.env.REACT_APP_URL+"?s="+searchTerm+"&apikey="+process.env.REACT_APP_OMDBAPI_KEY)
            .then(response=>setMovies(response.data.Search))
            .catch(error=>console.log(error))

    }

    return(
        <>

                <Form className="bg-dark text-white text-center">
                    <Container className="p-5 w-25">
                        <Form.Group  controlId="formBasicTerm">
                            <Form.Label>movie title</Form.Label>
                            <Form.Control type="text" placeholder="Enter movie title" onInput={e=>setSearchTerm(e.currentTarget.value)} />


                        </Form.Group>
                        <Button onClick={Search} className="btn btn-outline-light mt-3"  type="button">
                            Search
                        </Button>
                    </Container>
                </Form>

            <SearchResults movies={movies}/>


        </>
    )
}


export default Search;