import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import * as Yup from "yup";
import Navbar from '../Navbar/navbar';
import { Formik } from "formik";
import './login.css'
import '../cal/cal.css'
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



  
  function App() {
    const initialValues = {
      email: "",
      password: ""
    };
    const validate = (values) => {
      let errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!regex.test(values.email)) {
        errors.email = "Invalid Email";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 4) {
        errors.password = "Password too short";
      }
      return errors;
    };
    const navigate = useNavigate();

    const submitForm = (values) => {
      console.log(values);
      navigate('/');
    };
    return (
      <>
     
      <Navbar/>
      <div className='logbox'>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={submitForm}
      >
        {(formik) => {
          const {
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            handleBlur,
            isValid,
            dirty
          } = formik;
          return (
            <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
  
            <MDBRow>
      
              <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
      
                <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
                  AXIOS,You deserve <br />
                  <span style={{color: 'hsl(218, 81%, 75%)'}}>Nothing less</span>
                </h1>
      
                <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
                Axio, India’s no. 1 online fashion destination justifies its fashion relevance by bringing something new and chic to the table on the daily. Fashion trends seem to change at lightning speed, yet the Axio shopping app has managed to keep up without any hiccups.
                </p>
      
              </MDBCol>
              <MDBCol md='6' className='position-relative'>
  
            {/* <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
   */}
            
            <MDBCol  className="log" md='6'>
              <MDBCardBody className='d-flex flex-column'>
              
  
                <div className='d-flex flex-row mt-2'>
                  <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                  
                </div>
                <form onSubmit={handleSubmit}>
                <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px',color:'white'}}>Sign into your account</h5>
                <label>Email</label>
                <MDBInput  wrapperClass='mb-1'  
                      type="email"
                      name="email"
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.email && touched.email ? 
                      "input-error" : null}
                    size="lg" /><div style={{color:'white'}}>{errors.email && touched.email && (
                      <span className="error">{errors.email}</span>
                    )}</div>
                    
              <label>Password</label>
              <MDBInput  wrapperClass='mb-1' 
                      type="password"
                      name="password"
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.password && touched.password ? 
                       "input-error" : null}
                     size="lg"/>
                    <div style={{color:'white'}} >{errors.password && touched.password && (
                      <span className="error">{errors.password}</span>
                    )}</div>
                    
                    
                    <MDBBtn color='dark' size='lg' type="submit" style={{width:'280px', marginTop:'15px'}}
                    className={dirty && isValid ? "" : "disabled-btn "}
                    disabled={!(dirty && isValid)} >Login</MDBBtn>

                    <p className="mb-{5 pb-lg-2" style={{color: 'white'}}>Don't have an account? <a href="/register" style={{color: 'white'}}>Register here</a></p> 

                </form>
                </MDBCardBody>
            </MDBCol>
  
          </MDBCol>
  
        </MDBRow>
  
      </MDBContainer>
              
          );
        }}
      </Formik>
      </div>
      </>        
    );
  }
  
  export default App;