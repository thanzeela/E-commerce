import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { formatPrice } from '../../utils/CurrencyFunction';
import Navigation2 from "../Navbar/Navbar2";

import './SingleProduct.css'


function ProductDetail() {
    const [data, setData] = useState([]);
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

    }
    console.log(data)

    return (
        <>
        <Navigation2 />
        <div className="covers">
            
            <div className="image">
                <img src={data.thumbnail} style={{ height: "350px" }} />
            </div>
            <div className="desc" style={{ color: "white" }}>
                <h1 style={{ color: "rgb(0, 106, 255)" }}>Description</h1>
                <br></br>
                <p style={{ color: "white", fontSize: "20px" }}>{data.description}</p>
                <span className="rate">Rating : {data.rating}</span>
                <br></br>
                <span className="range">Price :  {formatPrice(data.price)}</span>
               
                
                <div className="child">
                    <button className="addc" type="submit" onClick={Data}>Add to Cart</button>
                    <Link className='btn' to="/cart" >Show Cart</Link>

                </div>
            </div>

        </div>
        </>
    )
}

export default ProductDetail;
