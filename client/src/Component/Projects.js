import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { AiOutlineArrowDown } from "react-icons/ai";
// import Slide from 'react-reveal/Slide';
// import Bounce from 'react-reveal/Bounce';
// import Roll from 'react-reveal/Roll';

const Details = () => {
  return (
    <div id="projects">
      <button className="btn2"> <li>
        <a href="Salem Alalem CV (10 Apr).pdf" download>
        Hire Me
      </a>
        </li>
      </button>
      <div className="pro-details">

        <span className="tv-app">
          <FaTv className="i" />
          <p>
            TV Show App -Developed using HTML, CSS, and JavaScript without
            libraries or framework only DOM manipulation , you can tak look by
            <br />
            <AiOutlineArrowDown />
          </p>
          <li>
            <a href="https://slimslim.w3spaces.com/"> visit website</a>
          </li>
        </span>

        <span className="tv-app">
          <FaHotel className="i" />
          <p>
            CYF Hotel Booking App Developed with HTML, CSS, JavaScript,
            React.js, Bootstrap, and Moment.js, you can take look by
            <br /> <AiOutlineArrowDown />
          </p>
          <li>
            <a href="https://slimslim.w3spaces.com/">visit website</a>
          </li>
        </span>

        <span className="tv-app">

          <FaYoutube className="i" />
          <p>
            YouTube Video watcher Developed with HTML, CSS, JavaScript,
            React.js, Node.js, Express.js, PostgreSQL, you can take look by
            <br /> <AiOutlineArrowDown />
          </p>
          <li>
            <a href="https://slimslim.w3spaces.com/">visit website</a>
          </li>
        </span>
        <span className="tv-app">
          <FaTv className="i" />
          <p>
            TV Show App -Developed using HTML, CSS, and JavaScript without
            libraries or framework only DOM manipulation , you can tak look by
            <br />
            <AiOutlineArrowDown />
          </p>
          <li>
            <a href="https://laptop-loop.herokuapp.com/">  website</a>
          </li>
        </span>
        <span className="tv-app">
          <FaHotel className="i" />
          <p>
            CYF Hotel Booking App Developed with HTML, CSS, JavaScript,
            React.js, Bootstrap, and Moment.js, you can take look by
            <br /> <AiOutlineArrowDown />
          </p>
          <li>
            <a href="https://slimslim.w3spaces.com/">visit website</a>
          </li>
        </span>

        <span className="tv-app">

          <FaYoutube className="i" />
          <p>
            YouTube Video watcher Developed with HTML, CSS, JavaScript,
            React.js, Node.js, Express.js, PostgreSQL, you can take look by
            <br /> <AiOutlineArrowDown />
          </p>
          <li>
            <a href="https://slimslim.w3spaces.com/">visit website</a>
          </li>
        </span>
      </div>
      <div className="pro-h6">
        <h6>
          <em>
            i used different tools to <strong>build</strong> these projects  you can see what are
            they here
          </em>
        </h6>
      </div>
      
    </div>
  );
};

export default Details;
