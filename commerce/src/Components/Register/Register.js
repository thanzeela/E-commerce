import React, { useState } from "react";
import './Register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faTimes,
  faCheck,
  faEyeSlash,
   } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router";

const Register = () => {
  const [email, setEmail]= useState();
  const [password, setPassword] = useState();
  const [id, setUserName] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const navigat=useNavigate();

  const valid = (item, v_icon, inv_icon) =>{
    let text = document.querySelector(`#${item}`);
    text.style.opacity = "1";

    let valid_icon = document.querySelector(`#${item} .${v_icon}`);
    valid_icon.style.opacity = "1";

    let invalid_icon = document.querySelector(`#${item} .${inv_icon}`);
    invalid_icon.style.opacity = "0";
  }

  const invalid = (item, v_icon, inv_icon) => {
    let text = document.querySelector(`#${item}`);
    text.style.opacity = ".5";

    let valid_icon = document.querySelector(`#${item} .${v_icon}`);
    valid_icon.style.opacity = "0";

    let invalid_icon = document.querySelector(`#${item} .${inv_icon}`);
    invalid_icon.style.opacity = "1";
  }
  const handleEmailInputChange = (e) => {
        setEmail(e.target.value)
  }
  const handleUsernameInputChange = (e) => {
       setUserName(e.target.value)
  }
  const handlePhoneNoInputChange = (e) => {
       setPhoneNo(e.target.value)
  }

  const handlePasswordInputChange = (event) => {
      setPassword(event.target.value);
    if (password !=="")
    {
     setDisplay(true);
    }
    else{
      setDisplay(false)
    }

    if (password.match(/[A-Z]/) != null)
    {
        valid("capital", "fa-check", "fa-times");
    }
    else {
          invalid("capital", "fa-check", "fa-times");
    }

    if (password.match(/[!@#$%^&*]/) != null)
    {
        valid("char", "fa-check", "fa-times");
    }
    else {
          invalid("char", "fa-check", "fa-times");
    }

    if (password.match(/[0-9]/) != null)
    {
        valid("number", "fa-check", "fa-times");
    }
    else {
          invalid("number", "fa-check", "fa-times");
    }
   
    if (password.length > 7)
    {
        valid("charamount", "fa-check", "fa-times");
    }
    else {
      invalid("charamount", "fa-check", "fa-times");
    }
  if((password.match(/[A-Z]/) != null) && (password.match(/[!@#$%^&*]/) != null) &&  (password.match(/[0-9]/) != null) &&  (password.length > 7) )
    setDisabled(false);
};

  const handleShowHide = () => {
    setShow(!show);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(password);
    // console.log(email);
    // console.log(phoneNo);
    // console.log(userName);
    let values={password,email,phoneNo,id};
    console.log(values);

    fetch("http://localhost:3000/customer",{
            method:"POST",
            headers:{'content-type': 'application/json'},
            body:JSON.stringify(values)
        }).then((res)=>{
            alert("Registered Successfully")
            navigat('/login');
        }).catch((err)=>{
            alert("Login fail")
        });
  }

  return (
    <div className="register">
     <div className="register-box">
      <div className="register-container">
        <form className="form" onSubmit={handleSubmit}>
        <div className="register-control">
          <label  htmlFor='id'>UserName</label>
          <input type='id'
            className="register-username"
            minlength="4"
            required 
            placeholder="your name" 
            onChange={handleUsernameInputChange}
          />
        </div>
        <div className="register-control">
          <label htmlFor='phoneNo'>PhoneNo</label>
          <input type='text'
            className="register-phoneNo"
            minlength="10"
            maxLength={"10"}
            required 
            placeholder="PhoneNo" 
            onChange={handlePhoneNoInputChange}
          />
        </div>
        <div className="register-control">
          <label htmlFor='email'>Email</label>
          <input type='email'
            className="register-email"
            minlength="11"
            required 
            placeholder="yourname@gmail.com" 
            onChange={handleEmailInputChange}
          />
        </div>
        <div className="register-control">
          <label htmlFor='password'>Password</label>
          <input type={show ? "text" : "password" }
            className="register-password"
            placeholder="Enter Password"
            onChange={handlePasswordInputChange}
            required
            />
             {
          show ? (
            <FontAwesomeIcon
              icon={faEye} 
              id="showhide" 
              onClick={handleShowHide} 
             />
          ) : (
            <FontAwesomeIcon 
              icon={faEyeSlash} 
              id="showhide" 
              onClick={handleShowHide} 
            />
          )
         }
        </div>
       
         {  display &&
          <div className="register-validation">
              <p id="capital">
              <FontAwesomeIcon className="fa-times icon" icon={faTimes} />
              <FontAwesomeIcon className="fa-check icon" icon={faCheck} />
              <span> capital letters </span>
              </p>
              <p id="char">
              <FontAwesomeIcon className="fa-times icon" icon={faTimes} />
              <FontAwesomeIcon className="fa-check icon" icon={faCheck} />
              <span> special characters </span>
              </p>
              <p id="number">
              <FontAwesomeIcon className="fa-times icon" icon={faTimes} />
              <FontAwesomeIcon className="fa-check icon" icon={faCheck} />
              <span> use numbers </span>
              </p>
              <p id="charamount">
              <FontAwesomeIcon className="fa-times icon" icon={faTimes} />
              <FontAwesomeIcon className="fa-check icon" icon={faCheck} />
              <span> 8+ characters </span>
              </p>
          </div>
         }
         <button type="submit" className="rgstrbtn" disabled={disabled}>Register</button>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Register;