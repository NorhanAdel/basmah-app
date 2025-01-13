import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import "./Herobg.scss"
function Herobg({text,img}) {
  return (
    <div className="HeroBg">
      <div className="overlay">
      <Navbar/>
        <img src={img} className="bg" />
 
      
      
        <div className="box">
                  <Link to="/">الرئيسيه</Link> / <span>{text }</span>
              </div>
              <h1>{ text}</h1>
      </div>
    </div>
  );
}

export default Herobg