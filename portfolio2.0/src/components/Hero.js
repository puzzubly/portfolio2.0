import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  let navigate = useNavigate();
  return (
    <div className="hero">
      <div className="content">
        <h1 className="heading">Jr. web developer</h1>
        {/* <p>Welcome to my website</p> */}
        <button
          className="button"
          onClick={() => {
            navigate(
              // "/Showcase"
              "/about"
            );
          }}
        >
          {/* Examples of work */}
          find out more
        </button>
      </div>
    </div>
  );
}

export default Hero;
