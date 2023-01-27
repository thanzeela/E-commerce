<<<<<<< HEAD
import React, { useState } from "react";
import Navigation2 from '../Navbar/Nav1';
=======
import React, { useState, useEffect } from "react";
>>>>>>> 3c10dc545758e6e860f3506e5c9dafd9add04b4e
import './CheckoutForm.css';
import Carts from '../../utils/cart.json';
import { formatPrice } from "../../utils/CurrencyFunction";
import Navigation2 from "../Navbar/Navbar2";
import { useNavigate } from "react-router-dom";



const CheckoutForm = () => {
    const [cardDetails, setCardDetails] = useState(false);
    const [upiDetails, setUpiDetails] = useState(false);
    const [netDetails, setNetDetails] = useState(false);
    const [data, setData] = useState([]);
    const change = useNavigate();

    let totalamount = 0;
    useEffect(() => {
        setData(Carts.cart)
    }, []);
    
    data.map((item)=>{
        //console.log("item " + item.price)
       totalamount= totalamount+ item.price
    })

    const handleCard = () => {
        if(cardDetails == false){
            setCardDetails(true);
            setUpiDetails(false);
            setNetDetails(false);
        }
        else {
            setCardDetails(false);
        }
       
    }
    const handleUpi = () => {
        if(upiDetails == false){
            setUpiDetails(true);
            setCardDetails(false);
            setNetDetails(false);
        }
        else {
            setUpiDetails(false);
        }
       
    }
    const handleNet = () => {
        if(netDetails == false){
            setNetDetails(true);
            setCardDetails(false);
            setUpiDetails(false);
        }
        else {
            setNetDetails(false);
        }
       
    }
    const submitHandler = () =>{
        data.map((item)=>{
            fetch("http://localhost:3000/cart/"+ item.id,{
        method:'DELETE'
      })
        })
        alert("Payment Successfull..!")
        change('/home');
    }
return (
    <>
    <Navigation2 />
<div className="checkoutt" style={{backgroundColor:'#242726',paddingBottom:"45px"}}>
    <form onSubmit={submitHandler}>  
    <div className="checkout-mainContainer">
        <div className="form-container">
            <h2>Shipping Details</h2>
            <div className="form-groups">
                <label htmlFor="firstname" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">First Name</h6></label>
                <input id="firstname" className="mb-4" type="name" name="firstname" required></input>
            </div>
            <div className="form-groups">
                <label htmlFor="lastname" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">Last Name</h6></label>
                <input id="lastname" className="mb-4" type="name" name="lastname" required></input>
            </div>
            <div className="form-groups">
                <label htmlFor="phn" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">Mobile Number</h6></label>
                <input id="phn" className="mb-4" type="text" name="phn" required maxLength={10} minLength={10}></input>
            </div>
            <div className="address">
                <label htmlFor="address" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">Address</h6></label>
                <input id="address" className="address" type="name" name="address" placeholder="enter your full address..." required></input>
            </div>
            <div className="side-data">
                <div className="pincode">
                    <label htmlFor="pin" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">PIN CODE</h6></label>
                    <input id="pin" className="mb-4" type="number" name="pin" required></input>
                </div>
                <div className="state">
                    <label htmlFor="state" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">State</h6></label>
                    <input id="state" className="mb-4" type="text" name="state" required></input>
                </div>
            </div>
        </div>
        <div className="product-container">
            <div className="payment">
                <label htmlFor="pin">Net Banking</label>
                <input type="radio" value="option1" name="check" onChange={handleNet} ></input>

                <label htmlFor="upi">UPI</label>
                <input type="radio" value="option2" name="check" onChange={handleUpi} ></input>

                <label htmlFor="card">Card</label>
                <input type="radio" value="option3" name="check" onChange={handleCard}></input>
            </div>
            {cardDetails && 
                <div>
                    <div className="form-groups">
                        <label htmlFor="cardnum" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">Card Number</h6></label>
                        <input id="cardnum" className="mb-4" type="number" name="cardnum" placeholder="0000 0000 0000 0000" required></input>
                    </div>
                    <div className="form-groups">
                        <label htmlFor="cvv" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">CVV</h6></label>
                        <input id="cvv" className="mb-4" type="text" name="cvv" maxLength="3" placeholder="123" required ></input>
                    </div>
                    <div className="form-groups">
                        <label htmlFor="holder" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">Holder Name</h6></label>
                        <input id="holder" className="mb-4" type="text" name="holder" placeholder="Enter card holder name" required></input>
                    </div>
                    <div className="form-groups">
                        <label htmlFor="expirydate" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">Expiry Date</h6></label>
                        <input id="expirydate" className="mb-4" type="date" name="expirydate" required ></input>
                    </div>
                </div>
            }
            {upiDetails &&
                <div>
                    <div className="form-groups">
                        <label htmlFor="holder" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">UPI ID</h6></label>
                        <input id="upiid" className="mb-4" type="text" name="upiid" placeholder="abc@oksbi" required></input>
                    </div>
                </div>
            }
            {netDetails &&
                <div>
                    <div className="form-groups">
                        <label htmlFor="bank" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">Bank Name</h6></label>
                        <input id="bank" className="mb-4" type="text" name="bank" placeholder="Bank name..."></input>
                    </div>
                    <div className="form-groups">
                        <label htmlFor="acount" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">Account Number</h6></label>
                        <input id="acount" className="mb-4" type="number" name="acount" placeholder="Account number..."></input>
                    </div>
                    <div className="form-groups">
                        <label htmlFor="ifsc" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">IFSC</h6></label>
                        <input id="ifsc" className="mb-4" type="number" name="ifsc" placeholder="IFSC..."></input>
                    </div>
                    <div className="form-groups">
                        <label htmlFor="branch" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">Branch</h6></label>
                        <input id="branch" className="mb-4" type="text" name="branch" placeholder="Branch..."></input>
                    </div>
                </div>
            
                } 
            </div>      
            </div>
            <div className="final-submit">
            <button classname="btn btn-default btn-checkout">pay {formatPrice(totalamount)}</button>
            </div>
    </form>
  
</div>
</>
)
}
export default CheckoutForm;