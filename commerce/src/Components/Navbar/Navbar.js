import './Navbar.css'
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
                            <input className="search" type="search" placeholder="Search" aria-label="Search" />
                            <button className="button" type="submit">Search</button>
                        </form>
                        <Nav>
                            <Nav.Link className='nav-links' href="/cart">
                                <span id="boot-icon" class="bi bi-cart" style={{ fontSize: "40px", color: "rgb(31, 98, 255) ", opacity: "1", margin: "0 30px 0 90px" }}></span></Nav.Link>
                            <NavDropdown
                                menuVariant="dark"
                                title= {<span id="boot-icon" class="bi bi-person-fill" style={{fontSize: "40px", color: "rgb(31, 98, 255)",opacity: "1"}}>
                                    
                                </span>}                             
                            >      
                               
                                <NavDropdown.Item className='dropd' href="/login">Sign In
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className='dropd' href="/register">
                                    Register
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>

    );

}
export default Navigation;