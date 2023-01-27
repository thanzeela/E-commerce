import './Navbar.css'
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';
import logo from './images/logo2.jpg'
function Navigation() {
    const users = localStorage.getItem("Name");
    const [user,setUser] = useState("");
    if(users){
        setUser(users);
    }
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
                            <form className="d-flex" role="search">
                                <input className="search" type="search" placeholder="Search"  aria-label="Search" />
                                <button className="button" type="submit">Search</button>
                            </form>
                        
                    </Navbar.Collapse>
                    <NavDropdown
                        menuVariant="dark"
                        title={<span id="boot-icon" class="bi bi-person-fill" style={{ fontSize: "40px", color: "rgb(31, 98, 255)", opacity: "1" ,marginLeft:"0px",position:"static"}}>

                        </span>}
                    >   

                        <NavDropdown.Item className='dropd'>
                        <Link to="/login" style={{textDecoration:"none"}}>Sign In</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className='dropd' >
                            <Link to="/register" style={{textDecoration:"none"}}>Register</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                   < Nav.Link className='nav-links' href="/cart">
                                <span id="boot-icon" className="bi bi-cart" style={{ fontSize: "40px", color: "rgb(31, 98, 255) ", opacity: "1", margin: "0 50px 0 60px" ,position:"static"}}></span>
                    </Nav.Link>
                </Container>
            </Navbar>


        </>

    );

}
export default Navigation;