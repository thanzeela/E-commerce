import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/logo2.jpg'
function Navigation() {
    return (
        <>
            <Navbar className="color-nav" sticky='top' expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                    <img 
                    src={logo}
                    width="150px"
                    height="65px"
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <form class="d-flex" role="search">
                            <input className="search" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="button" type="submit">Search</button>
                        </form>
                        <Nav className="ms-auto">
                            <Nav.Link className='link' href="/login">Sign In</Nav.Link>
                            <Nav.Link className='nav-links' href="#pricing">Cart</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='nav-links' href="#deets">Returns and Orders</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            

        </>

    );

}
export default Navigation;

