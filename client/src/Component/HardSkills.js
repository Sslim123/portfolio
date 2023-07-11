import React from "react";
import Img1 from "../images/html.png";
import Img2 from "../images/CSS3svg.png";
import Img3 from "../images/javascript_logo.png";
import Img4 from "../images/react.png";
import Img5 from "../images/nodejs.png";
import Img6 from "../images/npm.png";
import Img7 from "../images/express.png";
import Img8 from "../images/postgres.jpeg";
import Img9 from "../images/git.png";
import Img10 from "../images/github.jpeg";
import Img11 from "../images/slack.png";
import Img12 from "../images/trello.png";
import Img13 from "../images/studocode.jpeg";
//import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";
import { AiOutlineArrowDown } from "react-icons/ai";
//import { Reveal } from 'react-reveal/Reveal';

const HardSkills = () => {
  return (
          <Fade right cascade >
    <div className="hard-skills">

        <div className="glass">

      <h4>
          I am a team player and thrive in collaborative
          I constantly strive to expand my skills and stay up-to-date with the
          latest industry trends.
          environments where I can contribute my expertise and learn from
          others. Let's work together to bring your ideas to life!
          <AiOutlineArrowDown /> 
      </h4>
      </div>
      <div className="hard-skills2">
      <h2><em>
        Hard Skills <strong>And</strong> Tools
        </em>
        </h2>
        <div className="hard-skills-img">

          
          <img src={Img1} alt="hard skills " />
          <img src={Img2} alt="hard skills " />
          <img src={Img3} alt="hard skills " />
          <img src={Img4} alt="hard skills " />
          <img src={Img5} alt="hard skills " />
          <img src={Img6} alt="hard skills " />
          <img src={Img7} alt="hard skills " />
          <img src={Img8} alt="hard skills " />
          <img src={Img9} alt="hard skills " />
          <img src={Img10} alt="hard skills " />
          <img src={Img11} alt="hard skills " />
          <img src={Img12} alt="hard skills " />
          <img src={Img13} alt="hard skills " />
        </div>

        <div className="hard-skills-img">
          <img src={Img1} alt="hard skills " />
          <img src={Img2} alt="hard skills " />
          <img src={Img3} alt="hard skills " />
          <img src={Img4} alt="hard skills " />
          <img src={Img5} alt="hard skills " />
          <img src={Img6} alt="hard skills " />
          <img src={Img7} alt="hard skills " />
          <img src={Img8} alt="hard skills " />
          <img src={Img9} alt="hard skills " />
          <img src={Img10} alt="hard skills " />
          <img src={Img11} alt="hard skills " />
          <img src={Img12} alt="hard skills " />
          <img src={Img13} alt="hard skills " />
        </div>
      </div>
     
    </div>
          </Fade>
  );
};

export default HardSkills;
