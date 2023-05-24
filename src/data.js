import React from "react";
import "./styles.css";
import Navbar from "./navbar";
export default function data() {
 
  return (
    <div className="Register">
    <Navbar/>

      <form className="form">
        <div className="name">
          <label>
            Applicant Name:
            <br />
            <input type="text" name="name" placeholder="Eg.: xyz" />
          </label>
        </div>
        <br />
        <div className="Mob">
          <label>
            Mobile No.:
            <br />
            <input type="text" placeholder="Eg.: 1234567890" />
          </label>
        </div>
        <br />
        <div className="email">
          <label>
            Email Address:
            <br />
            <input type="email" placeholder="Eg.: name@xyz.com" />
          </label>
        </div>
        <br />
        <div className="dob">
          <label>
            D.O.B.:
            <br />
            <input type="date" placeholder="Eg.: 01/12/2022" />
          </label>
        </div><br/>
          <div className="degree">
            <label>
              Degree:
              <br />
              <input type="text" placeholder="Eg.: Btech. (CS)" />
            </label>
          </div><br />
          <div className="feild">  
          <label>
            Field:
            <br />
            <input type="text" placeholder="Eg.: Full-Stack Developer" />
          </label>
        </div>
        <br />
        <div className="exp">
          <label>
            Experience:
            <br />
            <input type="text" placeholder="Eg.: 15 years" />
          </label>
        </div>
        <br />
        <div className="state">
          <label>
            State:
            <br />
            <input type="text" placeholder="Eg.: Madhya Pradesh" />
          </label>
        </div>
        <br />
        <div className="city">
          <label>
            City:
            <br />
            <input type="text" placeholder="Eg.: Indore" />
          </label>
        </div>
        <br />
        {/* <input type="submit" value="Submit" /> */}
        {/* <a src="https://docs.google.com/forms/d/e/1FAIpQLSdv0GxmsszoaNTKIyFLjFuz_Ox-H8UCs687qnXGeAFfaUB42g/viewform?usp=sf_link" target="_blank" rel="noreferrer">        
        </a> */}
        <form action="https://docs.google.com/forms/d/e/1FAIpQLSdv0GxmsszoaNTKIyFLjFuz_Ox-H8UCs687qnXGeAFfaUB42g/viewform?usp=sf_link" target="_blank" rel="noreferrer">

        <button id="submit">Submit</button>
        </form>
        
        <p id="msg">Please check that all the inputs have been filled before submitting.</p>  
      </form>
      
    </div>
  );
}
