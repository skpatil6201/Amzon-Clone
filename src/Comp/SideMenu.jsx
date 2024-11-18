import { Button } from "@mui/material";  // Importing Material-UI Button component for styling
import { Link } from "react-router-dom";  // Importing Link for navigation between pages
import React from "react";

function SideMenu(props) {
  return (
    <div
      className="Sidemenu"
      style={{ transform: ` translateX(${props.display})` }}  // Dynamically applying translation for showing/hiding the menu
    >
      <div
        className="flex Sidemenu-menu"
        onClick={() => {
          // Toggling the display of the side menu when clicked
          props.handelDisplay();
        }}
      >
        {/* Navigation Links */}
        <Link to="/Sign-In">
          <div>
            <Button>Sign In</Button>  {/* Button for sign-in page */}
          </div>
        </Link>
        <Link to="/">
          <div>
            <Button>Home</Button>  {/* Button for homepage */}
          </div>
        </Link>
        <div>
          <Button>Account</Button>  {/* Button for user account */}
        </div>
        <div>
          <Button>Order</Button>  {/* Button for order history */}
        </div>
        <div>
          <Button>Buy Again</Button>  {/* Button for buying previous items */}
        </div>
        <Link to="/cart">
          <div>
            <Button>Lists</Button>  {/* Button for viewing shopping cart */}
          </div>
        </Link>
        <div>
          <Button>Customer Service</Button>  {/* Button for customer support */}
        </div>
      </div>
      {/* Close button for the side menu */}
      <div
        className="cancel"
        onClick={() => {
          // Closing the side menu when clicked
          props.handelDisplay();
        }}
      >
        X  {/* 'X' to close the side menu */}
      </div>
    </div>
  );
}

export default SideMenu;
