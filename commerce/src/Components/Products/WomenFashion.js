import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {formatPrice} from '../../utils/CurrencyFunction'
import './Products.css'
function WomenProducts() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = () => {
        fetch('https://dummyjson.com/products/category/womens-dresses?limit=4')
        .then(res => res.json())

        .then((realData) => {
                    setData(realData.products);
                
                
        })

        .catch((err) => {
            console.log(err.message)

        })

    }
    const Data = () => {
        fetch("  http://localhost:3000/cart", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })

    }


    return (
        <>
        <div className='main'>
                <Row>
                    <h1 className='title'>Womens Fashion</h1>
                    {data.map((item) => {
                        return (
                            
                                <Col>
                                <div key={item.id}>
                                    <div className='procard'>
                                        


                                            <Card className="color" style={{ width: '18rem', height: '30rem' }}>
                                                <Card.Img variant="top" src={item.thumbnail} style={{ height: "230px" }} />
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
                                                <Link  to= {`/products/${item.id}`} >
                                                    <button className='add'>View</button>
                                                </Link>
                                               
                                                <button className="addc" type="submit" onClick={Data}>Add to Cart</button>
                                                </Card.Body> 
                                            </Card>
                                    </div>
                                </div>
                            </Col>

                         
                        );

                    })}
                </Row>
            </div>
    </>
    );
}
export default WomenProducts;