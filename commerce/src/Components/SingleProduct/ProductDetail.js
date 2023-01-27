import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { formatPrice } from '../../utils/CurrencyFunction';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Nav1 from "../Navbar/Nav1";
import Alert from 'react-bootstrap/Alert';
import './SingleProduct.css'


function ProductDetail() {
    const [data, setData] = useState([]);
    const [click, setClick] = useState(false);
    const { id } = useParams();


    useEffect(() => {
        fetchData(id);
    }, []);
    const fetchData = () => {

        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then((realData) => {
                setData(realData)
            })
            .catch((err) => {
                console.log(err.message);
            })
    }
    const Data = () => {
        fetch("  http://localhost:3000/cart", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(
                setClick(true)
            )


    }
    useEffect(() => {
        // when the component is mounted, the alert is displayed for 3 seconds
        setTimeout(() => {
          setClick(false);
        }, 3000);
      }, []); 

    return (
        <>
            <Nav1 />
            <div className="covers">

                <div className="image">
                    <img src={data.thumbnail} style={{ height: "350px" }} />
                </div>
                <div className="desc" style={{ color: "white" }}>
                    <h1 style={{ color: "rgb(0, 106, 255)" }}>Description</h1>
                    <br></br>
                    <p style={{ color: "white", fontSize: "30px" }}>{data.title}</p>
                    <p style={{ color: "white", fontSize: "20px" }}>{data.description}</p>
                    <span className="rate">Rating : {data.rating}</span>
                    <br></br>
                    <span className="range">Price :  {formatPrice(data.price)}</span>
                    <div className="child">
                        <button className="addc" type="submit" onClick={Data} >Add to Cart</button>
                    </div>
                </div>
                {click && <Alert className='clicked' variant="primary">
                    Item added to cart
                </Alert>}
            </div>

        </>
    )
}

export default ProductDetail;
