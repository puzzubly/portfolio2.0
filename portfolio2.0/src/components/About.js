import React from "react";
import "./About.css";
import small_pic from "./Images/small_pic.png";
import { useNavigate } from "react-router-dom";
import { TiVendorAndroid } from "react-icons/ti";

function About() {
  let navigate = useNavigate();
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="col-1">
          <div className="card">
            <div className="image-wrap">
              <img src={small_pic} alt="headshot" />
            </div>
          </div>
        </div>
        <div className="col-2">
          <h2>About</h2>
          <div className="col-2-container">
            
            <p>
            <TiVendorAndroid size={22} />  Frontend design + web development
            <br />
            <TiVendorAndroid size={22} />  React JS in an enterprise setting
            <br />
            <TiVendorAndroid size={22} />  Degree in Graphic Design
            <br />
            <TiVendorAndroid size={22} />  Experience with AWS Management Console
            <br />
            <TiVendorAndroid size={22} />  Node JS / Typescript
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
