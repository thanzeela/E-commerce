import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
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
                        <Nav className="">
                            <Nav.Link className='nav-links' href="#pricing"><span id="boot-icon" class="bi bi-cart" style={{fontSize: "40px", color: "rgb(31, 98, 255)",opacity: "1",margin:"0 80px 0 80px"}}></span></Nav.Link>
                        </Nav>
                        <Dropdown >
                            <Dropdown.Toggle  className='drops'>
                            <span id="boot-icon" class="bi bi-person-fill" style={{fontSize: "40px", color: "rgb(31, 98, 255)",opacity: "1"}}></span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='drop'>
                                <Dropdown.Item className='menu'>Sign In</Dropdown.Item>
                                <Dropdown.Item className='menu'>Register</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>

    );

}
export default Navigation;

