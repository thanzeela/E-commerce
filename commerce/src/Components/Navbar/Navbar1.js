import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/logo2.jpg';
import {Link} from 'react-router-dom'
import logo from './images/logo2.jpg'
import { Link } from 'react-router-dom';

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
                    < Link to = '/'>
                    < button className="button" type="submit">Logout</button>
                    </Link>
                </Container>
            </Navbar>
            

        </>

    );

}
export default Navigation1;