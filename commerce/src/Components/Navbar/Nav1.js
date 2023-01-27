import './Navbar.css'
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { formatPrice } from '../../utils/CurrencyFunction';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import logo from './images/logo2.jpg'

function Nav1() {
    const user1 = localStorage.getItem("Name");
    const [user, setUser] = useState("");
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const history = useNavigate();
    useEffect(() => {
        Search();

    }, [])
    function Search() {
        console.log(search);
        if (search.length > 0) {
            fetch(`https://dummyjson.com/products/search?q=${search}`)
                .then(res => res.json())
                .then((data) => {
                    setProducts(data.products);
                    console.log('11', data.products)
                })

        }
    }

    useEffect(() => {
        setUser(user1);
    })
    return (
        <>
            {user ?
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
                                <form className="d-flex" role="search">
                                    <input className="search" type="search" placeholder="Search" onChange={(event) => { setSearch(event.target.value) }} aria-label="Search" />
                                </form>
                              

                            </Navbar.Collapse>
                            <NavDropdown
                                menuVariant="dark"
                                title={<span id="boot-icon" class="bi bi-person-fill" style={{ fontSize: "40px", color: "rgb(31, 98, 255)", opacity: "1", marginLeft: "0px", position: "static" }}>

                                </span>}
                            >

                                <NavDropdown.Item className='dropd'>Hello {user}
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className='dropd' >
                                    <button className='logout'
                                        onClick={() => {
                                            localStorage.removeItem("Name");
                                            window.location.replace("/");
                                        }}>
                                        Logout
                                    </button>

                                </NavDropdown.Item>
                            </NavDropdown>
                            < Nav.Link className='nav-links' href="/cart">
                                <span id="boot-icon" className="bi bi-cart" style={{ fontSize: "40px", color: "rgb(31, 98, 255) ", opacity: "1", margin: "0 50px 0 60px", position: "static" }}></span>
                            </Nav.Link>

                        </Container>
                    </Navbar>
                    <div className='main'>
                        <Row>
                            {products.map((item) => {
                                return (

                                    <Col>
                                        <div key={item.id}>
                                            <div className='procard'>
                                                <Link to={`/products/${item.id}`} className='single'>


                                                    <Card className="color" style={{ width: '18rem', height: '35rem' }}>
                                                        <Card.Img variant="top" src={item.thumbnail} style={{ height: "250px" }} />
                                                        <Card.Body>
                                                            <Card.Title style={{ color: "#bae1ff" }}>{item.title}</Card.Title>
                                                        </Card.Body>
                                                        <ListGroup className="color" >
                                                            <ListGroup.Item className="color">
                                                                {formatPrice(item.price)}
                                                            </ListGroup.Item>
                                                            <ListGroup.Item className="color">Rating : {item.rating}</ListGroup.Item>
                                                        </ListGroup>
                                                        <Card.Body>
                                                        </Card.Body>
                                                    </Card>


                                                </Link>

                                            </div>
                                        </div>
                                    </Col>


                                );

                            })}
                        </Row>
                    </div>


                </> :
                <>
                    <Navbar className="color-nav" sticky='top' expand="lg" variant="dark">
                        <Container>
                            <Navbar.Brand href="/">
                                <img
                                    src={logo}
                                    width="150px"
                                    height="65px"
                                />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                {/* <button  onClick={()=>history(-1) } style={{border:"none"}}> */}
                                <i class='fas fa-angle-double-left'  onClick={()=>history(-1) } style={{fontSize:"25px",color:"rgb(32, 87, 215)",backgroundColor:"rgb(19, 18, 18)"}}></i>

                                {/* </button> */}

                                <form className="d-flex" role="search">
                                    <input className="search" type="search" onChange={(event) => { setSearch(event.target.value) }} placeholder="Search" aria-label="Search" />
                                </form>
                                {/* <button className = "btn" onClick={()=>history(-1) }>Go back</button> */}
                                

                            </Navbar.Collapse>
                            <NavDropdown
                                menuVariant="dark"
                                title={<span id="boot-icon" class="bi bi-person-fill" style={{ fontSize: "40px", color: "rgb(31, 98, 255)", opacity: "1", marginLeft: "0px", position: "static" }}>

                                </span>}
                            >

                                <NavDropdown.Item className='dropd'>
                                    <Link to="/login" style={{ textDecoration: "none" }}>Sign In</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className='dropd' >
                                    <Link to="/register" style={{ textDecoration: "none" }}>Register</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            < Nav.Link className='nav-links' href="/cart">
                                <span id="boot-icon" className="bi bi-cart" style={{ fontSize: "40px", color: "rgb(31, 98, 255) ", opacity: "1", margin: "0 50px 0 60px", position: "static" }}></span>
                            </Nav.Link>
                        </Container>
                    </Navbar>
                    <div className='main'>
                        <Row>
                            {products.map((item) => {
                                return (

                                    <Col>
                                        <div key={item.id}>
                                            <div className='procard'>
                                                <Link to={`/products/${item.id}`} className='single'>


                                                    <Card className="color" style={{ width: '18rem', height: '35rem' }}>
                                                        <Card.Img variant="top" src={item.thumbnail} style={{ height: "250px" }} />
                                                        <Card.Body>
                                                            <Card.Title style={{ color: "#bae1ff" }}>{item.title}</Card.Title>
                                                        </Card.Body>
                                                        <ListGroup className="color" >
                                                            <ListGroup.Item className="color">
                                                                {formatPrice(item.price)}
                                                            </ListGroup.Item>
                                                            <ListGroup.Item className="color">Rating : {item.rating}</ListGroup.Item>
                                                        </ListGroup>
                                                        <Card.Body>
                                                        </Card.Body>
                                                    </Card>


                                                </Link>

                                            </div>
                                        </div>
                                    </Col>


                                );

                            })}
                        </Row>
                    </div>


                
                </>}
        </>
    )
}
export default Nav1;