import React, { useState } from "react";
//import { useRef } from "react";
//import Axios from "axios";
//import { Model } from "react-model";
//import Data from "../data/data.json";

export default function Contact() {
  //const url = '';
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [details, setDetails] = useState("");
  const [data, setData] = useState("");
  const [showMessage, setShowMessage] = useState(false);
 // const [color, setColor] = useState('green')

  function SubmitForm(e) {
    e.preventDefault();
    const handling = {
      firstname: name,
      lastname: lastName,
      email: email,
      phonenumber: number,
      details: details,
    };
    fetch("http://localhost:5000/form/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(handling),
    }).then(() => console.log(setData(data)));

    setName("");
    setLastName("");
    setEmail("");
    setNumber("");
    setDetails("");
  }
    const setMessage = () => {
  setShowMessage(true)
    }
  return (
    <div className="contacts">
      <h2>
        <em>Start project</em>
      </h2>
      <div id="form-contact">
        <form className="form-input" onSubmit={SubmitForm}>
          <div className="firstInput">
            <input
              id="name"
              name="name"
              value={name}
              type="text"
              placeholder="First Name"
              onChange={(e) => setName(e.target.value)}
              required="required"
            />

            <input
              id="lastName"
              name="lastName"
              value={lastName}
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              required="required"
            />
          </div>
          <div className="secondInput">
            <input
              id="email"
              name="email"
              value={email}
              type="text"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              required="required"
            />

            <input
              id="number"
              name="number"
              value={number}
              type="phone-number"
              placeholder="Phone Number"
              onChange={(e) => setNumber(e.target.value)}
              required="required"
            />
            <textarea
              className="textarea"
              name="details"
              id="details"
              value={details}
              placeholder="Any Comment"
              onChange={(e) => setDetails(e.target.value)}
            ></textarea>

            <button
              onClick={setMessage} 
              className="btn-contact"
            >
              send
            </button>
        {showMessage ? 
          <div id="messageSend"  
          >
            <em>
              <p>Hi {name}Your  message sent successfully, thanks</p>
            </em>
            <button onClick={() => setShowMessage(false)}>close</button>
          </div>
           : null}
        </div>
        </form>
        <div className="workWithMe">
          <p>
            I am exiting to learn more about your project ,ready to get start
            you can download my Cv
          </p>
          <div className="a">
            <a href="Salem Alalem CV (10 Apr).pdf" id="a-button" download>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
