import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import logo from './images/logo2.jpg';
function Navigation2() {
    return (
        <>
            <Navbar className="color-nav" sticky='top' expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">
                    <img 
                    src={logo}
                    width="150px"
                    height="65px"
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    </Navbar.Collapse>
                    <NavDropdown
                        menuVariant="dark"
                        title={<span id="boot-icon" class="bi bi-person-fill" style={{ fontSize: "40px", color: "rgb(31, 98, 255)", opacity: "1" ,marginLeft:"0px",position:"static"}}>

                        </span>}
                    >

                        <NavDropdown.Item className='dropd'>
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
                   < Nav.Link className='nav-links' href="/cart">
                                <span id="boot-icon" className="bi bi-cart" style={{ fontSize: "40px", color: "rgb(31, 98, 255) ", opacity: "1", margin: "0 50px 0 60px" ,position:"static"}}></span>
                    </Nav.Link>
                </Container>
            </Navbar>
            

        </>

    );

}
export default Navigation2;