import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Navigation() {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">Movies</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Trending Movies</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
export default Navigation;