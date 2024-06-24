import React from "react";
import "./Footer.css";
import { BsInstagram } from "react-icons/bs";
import { ImPinterest2 } from "react-icons/im";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-center">
        <div className="footer-logo">TrendHub</div>
        <ul>
          <li>Company</li>
          <li>Products</li>
          <li>offices</li>
          <li>about</li>
          <li>contact</li>
        </ul>
        <div className="footer-socialMedia">
          <a href="#instagram" target="_blank">
            <BsInstagram />
          </a>
          <a href="#pinterest" target="_blank">
            <ImPinterest2 />
          </a>
          <a href="#whatapp" target="_blank">
            <FaWhatsapp />
          </a>
        </div>
        <hr />
        <p>copyright @ 2024 - all right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
