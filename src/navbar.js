import React from "react";
import "./styles.css";
import {useNavigate} from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const goToHome = () =>{
       navigate("/"); 
  }
  return (
    <div className="Nav">
    <h1 id="navhead">Shiksharthi</h1>
    <br/>
    <button id="navhome" onClick={goToHome}>Home</button>
    <p id="navmsg">Let's get started.</p>
    </div>
    
  );
}