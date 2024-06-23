import React from "react";
import "./Hero.css";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-banner">
        <div className="hero-banner-para">
          <h4>new arrivals only</h4>
          <p>🔥new collections for everyone🔥</p>
          <NavLink to={"/mens"}>Check out</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
