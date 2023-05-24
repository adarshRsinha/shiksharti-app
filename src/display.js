import React from "react";
import "./styles.css";
import Navbar from "./navbar";
export default function Display() {
 
  return (
    <div className="display">
    <Navbar/>
    <div className="example">
           <p>Applicant Name: Uday Ranawat</p>
           <p>Mobile No.: 9856421387 </p>
           <p>Email Address: ranawatuday.shiksharthi@gmail.com </p>
           <p>D.O.B.: 05/10/1995 </p>
           <p>Degree: Btech. (CSE) </p>
           <p>Field: Front-End Developer </p>
           <p>Experience: 5 years </p>
           <p>State: Madhya Pradesh </p>
           <p>City: Bhopal </p>
           <div className="Score">
           <p>8/10</p>
           <p>Score</p>
           </div>
        </div>
        <div className="example1">
           <p>Applicant Name: Akshay Kumar </p>
           <p>Mobile No.: 9856422456 </p>
           <p>Email Address: akshay kumar.shiksharthi@gmail.com </p>
           <p>D.O.B.: 13/12/1992 </p>
           <p>Degree: Btech. (IT) </p>
           <p>Field: Full-Stack Developer </p>
           <p>Experience: 8 years </p>
           <p>State: Madhya Pradesh </p>
           <p>City: Indore </p>
           <div className="Score1">
           <p>7/10</p>
           <p>Score</p>
           </div>
        </div>
    </div>
  );
}