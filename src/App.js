import * as React from "react";
import SignUp from "./pages/signUp/SignUp";
import NavBar from "./pages/landingPage/landingPage";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" index element={<Navigate to={"/signUp"}/>} />
        <Route path="/navSection" element={<NavBar/>}/>
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/logIn" element={<Login />}/>
      </Routes>
    </Router>
  );
}

export default App;
