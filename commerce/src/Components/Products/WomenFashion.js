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


    return (
        <>
        <Row>
            <h1 className='title'>Womens Fashion</h1>
            {data.map((item) => {
                return (
                    <Col>
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
                    </Col>


                );
            })}
        </Row>
    </>
    );
}
export default WomenProducts;