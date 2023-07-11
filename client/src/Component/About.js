import React, { useState } from "react";
import QRCode from "react-qr-code";
import { BsTelephonePlus } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BiHomeAlt } from "react-icons/bi";
import DataQuote from "../data.json";
import  ImgSvg  from "../images/blob.svg";
//import Roll from "react-reveal/Roll";
import Fade from "react-reveal/Fade";
import Img from "../images/IMG_0250.png";

const About = () => {
  const [quote, setQuote] = useState(DataQuote[0]);
 
  let updateQuote =  () => {
    const firstQuote = Math.floor(Math.random() * DataQuote.length);
     console.log(firstQuote);
    
    setQuote(DataQuote[firstQuote]);
  };
  
  return (
    <div id="about">
      <div className="rot-card">
        <Fade left>
        <div className="about-front">
          <div className="div-logo">
            <div className="logo-child">
              {/* <div className="logo-child2"> heloo</div> */}
            </div>
          </div>
          <div className="about-card">
            <span>
              <section className="ic">
                <BsTelephonePlus />
              </section>
              <p>07949594</p>
            </span>
            <span>
              <section className="ic">
                <AiOutlineMail />
              </section>
              <p>slimsm5@gmail.com</p>
            </span>

            <span>
              <section className="ic">
                <BiHomeAlt />
              </section>
              <p>Glasgow, Scotland</p>
            </span>
          </div>
          <section className="a-code">
            <div className="locate">
              <GoLocation className="ic" />
              <a href="https://www.google.com/maps/place/7c,+10+Glenfinnan+Dr,+Wyndford,+Glasgow+G20+8JW/@55.8888346,-4.2936429,17z/data=!3m1!4b1!4m5!3m4!1s0x488845b474065f2f:0x5039691c953389d!8m2!3d55.8888316!4d-4.291068?authuser=0">
              Location
              </a>
            </div>
            <div className="qrCode">
              <QRCode className="qr"
                value="https://laptop-loop.herokuapp.com/"
                style={{ width: "170px", height: "80px", 
                    }}
              />
            </div>
          </section>
        </div>
        <div className="about-hover">
          <div className="about-im"></div>
          <div className="content">
            <h3>
              <em> Quote</em>
            </h3>
            <p>love what you do to do what you loved</p>
          </div>

          <img src={Img} alt="the back of div" />
        </div>
        </Fade>
      </div>

      <div className="about-h6">
<Fade right>
        <div className="quote">

        <img src={ImgSvg} alt='svg' />
        <h2>
          {quote.text} 
          </h2>
        <p>{quote.author}</p>
        <button onClick={updateQuote} className="btn btn-primary">New  quote</button>
        </div>
        <h4>
          I am a passionate and dedicated developer with expertise in various
          technologies. With a strong foundation in HTML, CSS, and JavaScript, I
          enjoy creating engaging and interactive web experiences. My goal is to
          combine design and functionality to deliver user-friendly solutions
        </h4>
        </Fade>
      </div>
    </div>
  );
};

export default About;
