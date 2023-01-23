import React,{useState,useEffect} from "react"
import {useParams,Link} from "react-router-dom"


function ProductDetail() {
    const [data, setData] = useState([]);
    const {id}=useParams();
  
 
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
    const Data = ()=>{
        fetch("  http://localhost:3000/cart",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)
        })

    }      
    console.log(data) 
      
    return (
        <div>
            <img src={data.thumbnail} />
            <button type="submit" onClick={Data}>Add to Cart</button>
            <Link className='btn'  to="/cart" >Show Cart</Link>

        </div>
    )
}

export default ProductDetail;
