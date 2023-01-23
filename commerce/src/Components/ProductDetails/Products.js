import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'


function ProductD() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = () => {
        fetch(`https://dummyjson.com/products`)
            .then(res => res.json())
            .then((realData) => {
                setData(realData.products)
                console.log('111',realData.products);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }
    const products = data.map((product)=>{
        
            return (
                <div key={product.id}>
                  <h3>
                    <Link to={`/products/${product.id}`}>{product.title}</Link>
                  </h3>
                  <p>Price: ${product.price}</p>
                  <hr />
                </div>
              );
            });
            return (
                <>
                  <h1>Products Page</h1>
                  {products}
                </>
              );
            };
export default ProductD ;