import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './images/logo2.jpg';
import { Link } from 'react-router-dom';
import '../Login/login'

function Navigation1() {
    const user = localStorage.getItem("Name");
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
                        <span className='user'>Hello {user}</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <form class="d-flex" role="search">
                            <input className="search1" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="button" type="submit">Search</button>
                                
                        </form>

                    </Navbar.Collapse>
                    <NavDropdown
                        menuVariant="dark"
                        title={<span id="boot-icon" class="bi bi-person-fill" style={{ fontSize: "40px", color: "rgb(31, 98, 255)", opacity: "1" }}>

                        </span>}
                    >

                        <NavDropdown.Item className='dropd' href="/cart">Cart
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className='dropd' >
                            <button className='logout' 
                            onClick={() => {
                            localStorage.removeItem("Name");
                            window.location.replace("/");}}>
                            Logout
                            </button>
                            
                        </NavDropdown.Item>
                    </NavDropdown>
                </Container>
            </Navbar>


        </>

    );

}
export default Navigation1;