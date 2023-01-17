import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Products.css'
function Products() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = () => {

        fetch('https://dummyjson.com/products')
            .then(res => res.json())

            .then((realData) => {
                setData(realData.products);
                console.log(realData)

            })

            .catch((err) => {
                console.log(err.message)

            })

    }


    return (
        <>
             <Row>
            {data.map((item) => {
                return (
                    <Col>
                    <div className='procard'>
                       
                     
                            <Card style={{ width: '18rem' ,height:'30rem'}}>
                                <Card.Img variant="top" src={item.thumbnail} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Price : {item.price}</ListGroup.Item>
                                    <ListGroup.Item>Rating : {item.rating}</ListGroup.Item>
                                </ListGroup>
                                <Card.Body>
                                    <Card.Link href="#">Buy Now</Card.Link>
                                    <Card.Link href="#">Add to Cart </Card.Link>
                                </Card.Body>
                            </Card>
                           

                    
                             
                    </div>
                    </Col>
                        

                );
            })}
        </Row> 
        </>

    );
}
export default Products;