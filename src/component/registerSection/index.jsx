import "./style.css";
import { Link } from "react-router-dom";

function RegisterBtn() {
  return (
    <div className="signUpAndLoginInBtn">
      <Link to="/signUp">
        <button id="signUpBtn">
          Sign Up
        </button>
      </Link>
      <Link to="/logIn">
        <button id="loginBtn">
          Log In
        </button>
      </Link>
    </div>
  );
}

export default RegisterBtn;
