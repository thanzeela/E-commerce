import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/logo2.jpg'
function Navigation2() {
    return (
        <>
            <Navbar className="color-nav" sticky='top' expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                    <img className='navbar2'
                    src={logo}
                    width="200px"
                    height="85px"
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            

        </>

    );

}
export default Navigation2;