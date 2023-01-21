import React,{useState,useEffect} from "react"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carts from '../../utils/cart.json'
import { formatPrice } from '../../utils/CurrencyFunction'
import { Link } from 'react-router-dom';


function Cart() {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(Carts.cart)
    }, []);
    console.log(data)

    return(
        <>
          <>
            <div className='main'>
                <Row>
                    <h1 className='title'>All Products</h1>
                    {data.map((item) => {
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
                                                    <button type='button' className='buy' href="#">Buy Now</button>
                                                    {/* <Link  type='button' className='add     ' to={`/cart/${item.id}`}>Add to Cart</Link> */}
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
        </>
       
        </>
    )
}

export default Cart;