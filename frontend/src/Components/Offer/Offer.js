import React from "react";
import "./Offer.css";
import { NavLink } from "react-router-dom";
const Offer = () => {
  return (
    <div className="offer">
      <h2>Offer zone💯</h2>
      <h3>exclusive offers for you</h3>
      <p>only on best sellers products</p>
      <NavLink to="/men">check now</NavLink>
    </div>
  );
};

export default Offer;
