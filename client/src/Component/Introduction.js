import React from "react";
import Imag from "../images/IMG_0250.png";
import Bounce from "react-reveal/Bounce";
// import  { FullPage }  from "react-full-page";

export default function Introduction() {
  return (
    
    <div className="intro" aria-label="theSection">
      
      <Bounce left delay={100}>
        <div id="animate">
          <div className="animate-1">
            <span>
              <em>Hello, I’m Salem Alalem</em>
            </span>
          </div>

          <div id="animate-2">
            <h5>A am full Stack web developer</h5>
          </div>

          <section className="animate-section">
           <p>
             Who cares about build websites that run across the platform &
            devices and new technologies
            </p>
            <li>
              <a href="#details">more</a>
            </li>
          </section>
        </div>
      </Bounce>
      <Bounce delay={1000}>
        <div className="intro-img">
          <img src={Imag} alt="my profile of me" />
    </div>
      </Bounce>
  
        </div>
  );
}
