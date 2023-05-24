import React from "react";
import "./styles.css";
import image1 from "./image1.jpg";
import {useNavigate} from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const goToHome = () =>{
    navigate("/");
  }     

  const navigate1 = useNavigate();
  const goToDisplay = () =>{
    navigate1("/Display");
  }
  
  
  return <div className="">
    <img className="bimg" src={image1} alt=" " />
    <button id="logout"  onClick={goToHome}>Home</button>
    <div className="login">
      <h1 id="shiksharthi">Shiksharthi</h1>
      <p>Please enter the requested credentials below.</p>
      <div className="Uname">
          <label >
            User Name:
            <br/>
            <input id="uinput" type="text" name="name" placeholder="Eg.: xyz_abc" />
          </label>
        </div>
        <br />
        <div className="pass">
          <label >
            Password:
            <br/>
            <input id="passinput" type="password"  placeholder="Eg.: xy@12_#$" />
            <br/>
        <button id="login_id" onClick={goToDisplay}>Login</button>
          </label>
        </div>
        </div>
  </div>;
}
