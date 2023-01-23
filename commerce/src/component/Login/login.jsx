import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import './login.css'

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon
}
    from 'mdb-react-ui-kit';

function Loginpage() {

    const [username, usernameupdate] = useState("");
    const [password, passwordupdate] = useState("");

    const navgate = useNavigate();
    const ProceedLogin = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/customer/" + username).then((res) => {
            return res.json();
        }).then((resp) => {
            console.log(resp)
            if (Object.keys(resp).length === 0) {
                alert("enter valid username")
            } else {
                if (resp.password === password) {
                    alert('sucessfully login');
                    navgate('/')
                } else {
                    alert("enter valid password")
                }
            }
        }).catch((err) => {
            alert.err("Login fail" + err)
        });

    }
    return (
        <MDBContainer fluid className='hi'>
            <MDBRow>
                <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center' style={{ marginTop: '100px' }}>

                    <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)', }}>
                        AXIO,You deserve <br /><span style={{ color: 'hsl(218, 81%, 75%)' }}>Nothing less</span>
                    </h1>
                    <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
                        Axio, India’s no. 1 online fashion destination justifies its fashion relevance by bringing something new and chic to the table on the daily. Fashion trends seem to change at lightning speed, yet the Axio shopping app has managed to keep up without any hiccups.
                    </p>

                </MDBCol>
                <MDBCol className="log" md='6'>
                    <MDBCardBody className='d-flex flex-column'>
                        <div className='d-flex flex-row mt-2'>
                            <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                        </div>
                        <form onSubmit={ProceedLogin}>
                            <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px', color: 'white' }}>Sign into your account</h5>
                            <label style={{ color: 'white' }}>Username</label>
                            <MDBInput wrapperClass='mb-1' type="text"value={username} onChange={e => usernameupdate(e.target.value)}size="lg" />

                            <label style={{ color: 'white' }}>Password</label>
                            <MDBInput wrapperClass='mb-1'type="password"value={password} onChange={e => passwordupdate(e.target.value)} size="lg" />


                            
                            <button type="submit" className="clap" >Login</button>

                            <p className="mb-{5 pb-lg-2" style={{ color: 'white' }}>Don't have an account? <a href="/register" style={{ color: 'white' }}>Register here</a></p>
                       </form>
                    </MDBCardBody>
                </MDBCol>
          </MDBRow>
        </MDBContainer>
    )
}
export default Loginpage;