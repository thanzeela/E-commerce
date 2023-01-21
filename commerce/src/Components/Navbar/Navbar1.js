import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/logo2.jpg'
function Navigation1() {
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
                        
                    </Navbar.Collapse>
                    <button className="button" type="submit">Logout</button>
                </Container>
            </Navbar>
            

        </>

    );

}
export default Navigation1;