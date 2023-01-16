import React, { useRef, useState } from "react";
import 'Regsiter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEye, 
  faTimes, 
  faCheck,
  faEyeSlash,
   } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const userNameInputRef = useRef();
  const phoneNoInputRef = useRef();
  
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState(false);
  
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

  const handleInputChange = (event) => {
    const password = event.target.value;
    if (password !== "")
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
    console.log(password.length)
  if (password.length > 7) 
  {
      valid("charamount", "fa-check", "fa-times");
  }
  else {
    invalid("charamount", "fa-check", "fa-times");
  }
};

  const handleShowHide = () => {
    setShow(!show);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registered Successfully..!!");
  }

  return (
    <div className="register">
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
        <div className="control">
          <label htmlFor='username'>UserName</label>
          <input type='username'
            className="username"
            minlength="11"
            required 
            placeholder="your name" 
            ref={userNameInputRef} 
          />
        </div>
        <div className="control">
          <label htmlFor='phoneNo'>PhoneNo</label>
          <input type='telephone'
            className="phoneNo"
            minlength="10"
            maxLength={"10"}
            required 
            placeholder="PhoneNo" 
            ref={phoneNoInputRef} 
          />
        </div>
        <div className="control">
          <label htmlFor='email'>Email</label>
          <input type='email'
            className="email"
            minlength="11"
            required 
            placeholder="yourname@gmail.com" 
            ref={emailInputRef} 
          />
        </div>
        <div className="control">
          <label htmlFor='password'>Password</label>
          <input
            type={show ? "text" : "password" }
            className="password"
            placeholder="Enter Password"
            onChange={handleInputChange}
            required
            ref={passwordInputRef}
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
          <div>
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
         <button type="submit" className="rgstrbtn">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
