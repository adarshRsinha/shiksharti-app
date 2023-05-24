import React from "react";
import "./styles.css";
import image1 from "./image1.jpg";
import {useNavigate} from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const goToApplicant = () =>{
       navigate("/Applicant_Register"); 
  }

  const navigate1 = useNavigate();
  const goToRecruiter = () =>{
      navigate1("/Recruiter_Login");
  }
  return <div className="Home">
    <img className="bimg" src={image1} alt=" " />
    <div className="role">
      <h1 id="shiksharthi">Shiksharthi</h1>
      <p>Please select a role from below to continue.</p>
       <button id="role1" onClick ={goToApplicant} type="button">Applicant</button>
       <button id="role2" onClick ={goToRecruiter} type="button">Recruiter</button>
        </div>
  </div>;
}
