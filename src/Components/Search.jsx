import {Button, Form} from "react-bootstrap";
import Container from "react-bootstrap/Container";


const Search =()=>{

    return(
        <>

                <Form className="bg-dark text-white text-center">
                    <Container className="p-5 w-25">
                        <Form.Group controlId="formBasicTerm">
                            <Form.Label>movie title</Form.Label>
                            <Form.Control type="text" placeholder="Enter movie title" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>

                        </Form.Group>
                        <Button variant="primary" type="button">
                            Search
                        </Button>
                    </Container>
                </Form>




        </>
    )
}


export default Search;