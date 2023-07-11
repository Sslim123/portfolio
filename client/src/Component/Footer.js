import React from "react";
//import Submit from "./Submit";

import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer-icons">
      <div className="fa-icons">
        <div className="a1">
          <a href="https://github.com/Sslim123">
            <FaGithub size="30px" className="fi" />
          </a>
        </div>
        <div className="a2">
          <a href="https://www.linkedin.com/in/salem-dayfan-0a9399206/">
            <FaLinkedin size="30px" className="fi" />
          </a>
        </div>
        <div className="a3">
          <a href="/">
            <FaFacebook size="30px" className="fi" />
          </a>
        </div>
      </div>
      <div className="skills">
        <h3><em>
          <strong>
            Skills
            </strong>
          </em>
          </h3>
        <span>HTML, CSS, JavaScript</span>
        <span> React.js, Bootstrap</span>
        <span>Node.js, Express.js, PostgreSQL</span>
        <span>Git, GitHub, Visual Studio Code, Slack, Trello-Desktop</span>
      </div>
      <div className="btn-a">
        <div className="btn-a1">
            <a href="Salem Alalem CV (10 Apr).pdf" id="a-button" download>
            Download cv
          </a>
        </div>

        <div className="btn-a2">
          <a href=".main-header">Go up</a>
        </div>
        
      </div>
    </div>
  );
}
