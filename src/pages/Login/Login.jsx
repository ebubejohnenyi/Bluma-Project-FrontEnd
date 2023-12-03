import * as React from "react";
import image from "../signUp/login.jpg";
import "../../pages/Login/Login.css";
import {Link, useNavigate} from "react-router-dom";


function Login(){
  const navigateTo = useNavigate();
    return(
      <div className="signUpPage">
        <div id="imageholder">
          <img src={image}></img>
        </div>
  
        <form id="textArea">
        <h3>Login Up</h3>
          <input type="email" placeholder="Email" required></input>
          <br></br>
          <input id="createPassword" 
          type="password" 
          placeholder="Create Password"required></input>
          <br></br>
          <Link to="/navSection">
          <button id="submitBtn"
          onClick={()=>{
            navigateTo('navSection')
          }}
          >Submit</button>
          </Link>
          <br></br>
        </form>
      </div>
    )
  }
  
  export default Login;