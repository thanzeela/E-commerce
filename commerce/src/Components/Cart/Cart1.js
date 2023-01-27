import React, { useState, useEffect } from "react"
import Carts from '../../utils/cart.json'
import { Link, useNavigate } from "react-router-dom";
import Nav1 from '../Navbar/Nav1';

import './Cart.css'
import { formatPrice } from '../../utils/CurrencyFunction'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import './Cart.css'

export default function ProductCards() {
  const user1 = localStorage.getItem("Name");
  const navigation =useNavigate();
  const [user,setUser] = useState("");

 useEffect(()=>{
  setUser(user1);
})
function handleSubmit(){
  if(user){
    navigation('/checkout')

  }
  else{
    navigation('/login')
  }
}
  const handleDelete = (id) => {
    if (window.confirm('Do You want to remove?')) {
      fetch("http://localhost:3000/cart/" + id, {
        method: 'DELETE'
      }).then((res) => {
        alert('Removed Sucessfully')
        window.location.reload();
      })
    }
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(Carts.cart)
  }, []);
  console.log(data)
  return (
    <div className="bucket">
      <Nav1 />
      <section className="h-100" >
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <MDBTypography tag="h3" className="fw-normal mb-0 " style={{ color: "rgb(0, 106, 255)" }}>
                  Shopping Cart
                </MDBTypography>
                <div>
                  <p className="mb-0">
                    {/* <span className="text-muted">Sort by:</span> */}
                    {/* <a href="#!" className="text-body">
                price <i className="fas fa-angle-down mt-1"></i>
              </a> */}
                  </p>
                </div>
              </div>
              {data.map((item) => {
                return (

                  <MDBCard className="rounded-3 mb-4" key={item.id}>
                    <MDBCardBody className="p-4">
                      <MDBRow className="justify-content-between align-items-center">
                        <MDBCol md="2" lg="2" xl="2">
                          <MDBCardImage className="rounded-3" fluid
                            src={item.thumbnail}
                            alt="Cotton T-shirt" />
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="3">
                          <p className="lead fw-normal mb-2">{item.title}</p>

                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="2"
                          className="d-flex align-items-center justify-content-around">
                        </MDBCol>
                        <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                          <MDBTypography tag="h5" className="mb-0">
                            {formatPrice(item.price)}

                          </MDBTypography>
                        </MDBCol>
                        <MDBCol md="1" lg="1" xl="1" className=" " style={{ width: '10vw' }}>

                          {/* <MDBBtn className="large" onClick={() => handleDelete(item.id)}>Delete</MDBBtn> */}
                          <Link className="px-2 btn btn-dark btn-lg " onClick={() => handleDelete(item.id)}  >
                            Delete
                          </Link>

                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                );

              })}


            </MDBCol>
          </MDBRow>
          
            <button className="click" type="submit" onClick={handleSubmit}>Proceed to Checkout</button>

       

        </MDBContainer>
      </section>
    </div>
  );
}