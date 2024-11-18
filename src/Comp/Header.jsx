import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";  // Import for search icon
import MenuIcon from "@mui/icons-material/Menu";  // Import for menu icon
import SideMenu from "./SideMenu";  // Side menu component for mobile or expanded view
import logo from "../img/logo.png";  // Import logo image
import { useStateValue } from "../StateProvider";  // Import state management for basket

function Header() {
  const [{ basket }] = useStateValue();  // Access basket items from state
  const [translateX, settranslateX] = useState("-150vw");  // Side menu position state

  // Toggle side menu visibility
  function handelSideMenuDisplay() {
    translateX === "-150vw" ? settranslateX("0") : settranslateX("-150vw");
  }

  return (
    <div>
      {/* Side Menu Component */}
      <SideMenu display={translateX} handelDisplay={handelSideMenuDisplay} />

      {/* Main navigation bar */}
      <nav className="flex navbar">
        {/* Hamburger menu icon for mobile */}
        <div
          className="hamburger display-toggle"
          onClick={handelSideMenuDisplay}
        >
          <MenuIcon />
        </div>

        {/* Logo that links back to home */}
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        </Link>

        {/* Greeting and address section */}
        <div className="log">
          Hello <br />
          <span className="bold">
            <i className="fas fa-map-marker-alt"></i>
            Select your address
          </span>
        </div>

        {/* Search bar */}
        <form className="flex">
          <input type="text" placeholder="Search" />
          <button className="btn">
            <SearchIcon />
          </button>
        </form>

        {/* Language flag placeholder */}
        <div className="flag"></div>

        {/* Account sign-in link */}
        <Link to="/Sign-In">
          <div className="log">
            Hello Sign in
            <br />
            <span className="bold">Account & Lists</span>
          </div>
        </Link>

        {/* Orders link */}
        <div className="log">
          Returns <br />
          <span className="bold">&Orders</span>
        </div>

        {/* Cart link displaying item count */}
        <Link to="/cart">
          <div className="cart">
            <span className="bold">
              <span className="item-count">{basket.length}</span>
              <i className="fas fa-shopping-cart fa-2x"></i>
              Cart
            </span>
          </div>
        </Link>

        {/* Mobile-only sign-in button */}
        <Link to="/Sign-In">
          <div className="display-toggle signIn">
            <Button>Sign In</Button>
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
