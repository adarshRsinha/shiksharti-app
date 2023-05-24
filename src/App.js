import React from "react";
import "./styles.css";
import Home from "./home";
// import {BrowserRouter, Routes, Route} from "react-router-dom";
import Data from "./data";
import Login from "./Login";
import Display from "./display";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
    {/* <Home /> */}
    {/* <Data /> */}
    {/* <Login />
    <Display/> */}
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/Applicant_Register' element={<Data/>} />      
        
        <Route exact path='/Display' element={<Display/>} />      
     <Route exact path='Recruiter_Login' element={<Login/>} /> 
     </Routes>
    {/* <Home />
    <Data /> */}
    </div>
    
  );
  }