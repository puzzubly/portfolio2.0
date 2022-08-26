import React from "react";
import "./About.css";
import headshotbw from "./Images/headshotbw.png";
import { useNavigate } from "react-router-dom";

function About() {
  let navigate = useNavigate();
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="image-wrap">
          <img src={headshotbw} alt="Anita" />
        </div>
        <div className="col-2">
          <h2>About</h2>
          {/* <span className="line"></span> */}
          <div className="col-2-container">
            <p>
              React JS | Typescript | Node JS </p>
              <p>
              My name is Anita de San Miguel, I'm a web developer living in the inner city of Melbourne Australia. Welcome to my website! I have a Bachelor's degree in Graphic design, and have completed a 16 week immersive in frontend web development. A recent internship has given me exposure to React JS in an enterprise setting, as well as backend code in Node JS / Typescript. I'm a beginner at the AWS Management Console, and navigating through API Gateway / Lambda / DynamoDB. I've also written code for applications in Next JS and Material UI. My happy place is writing code in ReactJS with vanilla CSS, and you can see examples on my Github page which is linked below.
              I'm super keen to learn everything web development including new languages, and grow into an established developer.

            </p>
          </div>
          {/* <button
            className="button"
            onClick={() => {
              navigate("/Showcase");
            }}
          >
            Examples of work
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default About;
