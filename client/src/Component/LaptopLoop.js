import React from "react";
import Laptop from "../images/laptop.png";
import LapMobile from "../images/mobileLaptop.png";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';


//import {  FaEyeSlash } from "react-icons/fa";

export default function LaptopLoop() {
  return (
    <div className="laptop">
       <div className="lap-p-a">
            <Fade up >
          <h2>  <em>         Tech Roots        </em>    </h2>
          <p>
            {" "}
            We should create a website that allows refugees and asylum seekers
            to seek a laptop by registering on the waiting list form. On the
            other hand, a donator will also fill up the donation form. After the
            charity (website) receive the laptop they will notify the first user
            on the waiting list to get the laptop This can work
          </p>
          <li>
            <a href="https://laptop-loop.herokuapp.com/">visit website</a>
            </li>
            </Fade>
          </div>
     
      <div className="img-caption">
        <Slide left cascade>
          
          <div className="tablet">
        <img src={Laptop} alt="laptop loop" />
        <p> Tablet & Laptop</p>
         </div>
        </Slide>
          <Slide right cascade>
        <div className="mobile">

          <img src={LapMobile} alt="laptop loop" />

          <p>Mobile version</p>
        </div>
          </Slide>
      </div>
      
    </div>
  );
}
