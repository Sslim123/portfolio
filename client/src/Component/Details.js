import React from "react";
//import Button from 'react-bootstrap/Button';
import { Carousel } from "react-bootstrap";
import Img from "../images/imag3.png";
import Img2 from "../images/images2.png";
import Img3 from "../images/HotelBooking.png";

function Details() {
  return (
    <div id="details">
      <h2>My Projects</h2>
      <Carousel className="carousel-details">
        <Carousel.Item>
          <div className="carousel">
            <img className=" "  src={Img2} alt="First slide" />
            <div className="li-a">
              <p>TV Show App </p>
              
                <a href="https://slimslim.w3spaces.com/">visit website</a>
            
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel">
            <img className=" " src={Img} alt="Second slide" />

            <div className="li-a">
              <p> Watch Video, Add </p>
              
                <a href="https://slimslim.w3spaces.com/">visit website</a>
            
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel">
            <img className=" " src={Img3} alt="Third slide" />

            <div className="li-a">
              <p>Hotel Booking </p>
              
                <a href="https://slimslim.w3spaces.com/">visit website</a>
            
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <div className="scroll-down">
        <span> </span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Details;
