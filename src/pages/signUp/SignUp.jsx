import * as React from "react";
import image from "../signUp/login.jpg";
import "../../pages/signUp/SignUp.css";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";

function SignUp(){
  const navigateTo = useNavigate();
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    
  const matchPassword = () =>{
    if(createPassword !== "" && createPassword === confirmPassword){
      setIsSubmitDisabled(false);
      console.log("FORM ACCEPTED")
    }else{
      setIsSubmitDisabled(true)
      console.log("FORM NOT ACCEPTED")
    }
  }
    return(
      <div className="signUpPage">
        <div id="imageholder">
          <img src={image}></img>
        </div>
  
        <form id="textArea">
        <h3>Sign Up</h3>
          <input type="firstName" placeholder="First Name" required></input>
          <br></br>
          <input type="lastName" placeholder="Last Name" required></input>
          <br></br>
          <input type="email" placeholder="Email" required></input>
          <br></br>
          <input id="createPassword" 
          type="password" 
          placeholder="Create Password"
          value={createPassword}
          onChange={(event) => setCreatePassword(event.target.value)}  
          required></input>
          <br></br>
          <input id="confirmPassword"  
          type="password" 
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)} 
          required></input>
          <br></br>
          <Link to="/navSection">
          <button id="submitBtn" 
          onClick={()=>{
            matchPassword();
            if(isSubmitDisabled === false){
              navigateTo('navSection')
            }
            else setIsSubmitDisabled(true)
          }}
          >Submit</button>
          </Link>
          <br></br>
        </form>
      </div>
    )
  }
  
  export default SignUp;