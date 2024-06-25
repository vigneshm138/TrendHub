import React, { useContext, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-logo">TrendHub</div>
      <div className="navbar-links">
        <ul>
          <li>
            <NavLink to="/">shop</NavLink>
          </li>
          <li>
            <NavLink to="/men">men</NavLink>
          </li>
          <li>
            <NavLink to="/women">women</NavLink>
          </li>
          <li>
            <NavLink to="/kids">kids</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <NavLink to="/login">login</NavLink>
        <NavLink to="/cart">
          <BsCart className="cart-icon" />
          <span>0</span>
        </NavLink>
      </div>
      <div className="menuIcon-div">
        <TiThMenu className="menuIcon" onClick={() => setOpenNavbar(true)} />
      </div>

      <div
        className="responsive-navbar"
        style={openNavbar ? { top: "0%" } : { top: "-800px" }}
      >
        <div className="responsiveNavbar-head">
          <h3>menus</h3>
          <button onClick={() => setOpenNavbar(false)}>close</button>
        </div>
        <hr />
        <ul>
          <li>
            <NavLink to="/" onClick={() => setOpenNavbar(false)}>
              shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/men" onClick={() => setOpenNavbar(false)}>
              men
            </NavLink>
          </li>
          <li>
            <NavLink to="/women" onClick={() => setOpenNavbar(false)}>
              women
            </NavLink>
          </li>
          <li>
            <NavLink to="/kids" onClick={() => setOpenNavbar(false)}>
              kids
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" onClick={() => setOpenNavbar(false)}>
              login
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" onClick={() => setOpenNavbar(false)}>
              cart
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
