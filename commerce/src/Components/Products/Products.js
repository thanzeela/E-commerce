import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { formatPrice } from '../../utils/CurrencyFunction'
import './Products.css'
function Products() {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(20);
    const [isTrue,setIsTrue] = useState("false");
    const [isClick,setIsClick] = useState("false");

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = () => {

        fetch('https://dummyjson.com/products?limit=100')
            .then(res => res.json())

            .then((realData) => {
                setData(realData.products);


            })

            .catch((err) => {
                console.log(err.message)

            })

    }
    function handleNext() {
        if(currentPage<=5){
            setCurrentPage(currentPage + 1)

        }
        else{
            setIsTrue("true");
        }
    }
    function handlePrevious() {
        if(currentPage>=1){
            setCurrentPage(currentPage - 1)

        }
        else{
            setIsClick("true");
        }
    }
    const Data = () => {
        fetch("  http://localhost:3000/cart", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })

    }
    const lastIndex = currentPage * postsPerPage;
    const firstIndex = lastIndex - postsPerPage;
    const currentProducts = data.slice(firstIndex, lastIndex)


    return (
        <>
            <div className='main'>

                <Row>
                    <h1 className='title'>All Products</h1>


                    {currentProducts.map((item) => {
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
                                                <Link to={`/products/${item.id}`} >
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
            <div className='pages'>
            <button className="previous"   onClick={handlePrevious}>Previous</button> 
            <button className="previous"    onClick={handleNext}>Next</button>           
             </div>
        </>

    );
}
export default Products;