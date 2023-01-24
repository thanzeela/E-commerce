import React, { useState, useEffect} from "react";
import Carts from '../../utils/cart.json'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBListGroup,
  MDBListGroupItem,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { formatPrice } from "../../utils/CurrencyFunction";
import { Link } from "react-router-dom";

 const Checkout = () => {
    // const [totalamount,setTotalAmount] = useState(0.0);
    const [data, setData] = useState([]);
    let totalamount = 0;
    const prices = [];
    useEffect(() => {
        setData(Carts.cart)
    }, []);
    
    data.map((item)=>{
        //console.log("item " + item.price)
       totalamount= totalamount+ item.price
    })
    
 
return (
<section className="h-100" style={{ backgroundColor: "#eee" }}>
  <MDBContainer className="py-5 h-100">
  <MDBCol md="5">
        <MDBCard className="mb-5">
          <MDBCardHeader>
            <MDBTypography tag="h5" className="mb-0">
              Products
            </MDBTypography>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBListGroup flush>
            {data.map((item) => {
                        return (
                            <div>
              <MDBListGroupItem key={item.id}
                className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
               {item.title}
                <span>{item.price}</span>
              </MDBListGroupItem>
              </div>
                        )})}
              <MDBListGroupItem
                className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount: </strong>
                  <strong>
                    <p className="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span>   
                  <strong>{totalamount}</strong>
                </span>
              </MDBListGroupItem>
            </MDBListGroup>
          </MDBCardBody>
        </MDBCard>
        <Link to="/checkoutform">
        <MDBBtn>Proceed to Pay</MDBBtn>
        </Link>
      </MDBCol>
  </MDBContainer>
</section>
)}
export default Checkout;