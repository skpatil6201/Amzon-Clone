import React from "react";  // Import React library
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS for styling
import 'bootstrap/dist/js/bootstrap.bundle.min';  // Import Bootstrap JavaScript (required for interactive components)
import './css/Card.css'; // Import custom CSS for Card components
import './css/Cart.css'; // Import custom CSS for the Cart page
import './css/displaypage.css'; // Import custom CSS for the DisplayPage component
import './css/header.css'; // Import custom CSS for the Header component
import './css/Log.css'; // Import custom CSS for the UserLog component
import './css/Responsive.css'; // Import custom responsive design styles
import './css/Sidemenu.css'; // Import custom CSS for the SideMenu component
import './css/Style.css'; // General custom CSS for global styling
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Importing the necessary components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Import Router for routing between pages
import Header from "./Comp/Header";  // Import Header component (navigation bar)
import Banner from "./Comp/Banner";  // Import Banner component (top image or ad)
import MainBody from "./Comp/MainBody";  // Import MainBody component (main content of the homepage)
import DisplayPage from "./Comp/DisplayPage";  // Import DisplayPage component (for displaying product details)
import UserLog from "./Comp/UserLog";  // Import UserLog component (for user authentication)
import Cart from "./Comp/Cart";  // Import Cart component (for shopping cart page)

function App() {
  return (
    // Router component to wrap the entire app and enable routing
    <Router>
      {/* Routes configuration */}
      <Routes>
        {/* Route for DisplayPage where we show individual product details */}
        <Route
          path="/DisplayPage/:category/:id"  // URL path includes category and item id parameters
          element={
            <>
              <Header />  {/* Include Header component */}
              <DisplayPage />  {/* Include DisplayPage component */}
            </>
          }
        />
        {/* Route for Cart page where user views their cart */}
        <Route
          path="/cart"
          element={
            <>
              <Header />  {/* Include Header component */}
              <Cart />  {/* Include Cart component */}
            </>
          }
        />
        {/* Route for UserLog page (Sign-In/Sign-Up) */}
        <Route path="/Sign-In" element={<UserLog />} />  {/* Include UserLog component */}
        
        {/* Default Route for the homepage */}
        <Route
          path="/"
          element={
            <>
              <Header />  {/* Include Header component */}
              <Banner />  {/* Include Banner component */}
              <MainBody />  {/* Include MainBody component with various product categories */}
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
