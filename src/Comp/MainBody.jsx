import React from "react";
import Makecard from "./MakeCard";  // Importing Makecard component to display individual items
import Store from "../fakeStore";    // Importing Store object to fetch data URLs for different categories
import Row from "./Row";             // Importing Row component to display rows of items by category
import BigCard from "./BigCard";     // Importing BigCard component to display banner images

// Importing banner images
import banner4 from "../img/banner4.jpg";
import banner3 from "../img/banner3.jpg";
import banner5 from "../img/banner5.jpg";
import banner6 from "../img/banner6.jpg";
import banner2 from "../img/banner2.jpg";

export default function MainBody() {
  return (
    <div className="main flex">
      
      {/* Displaying individual cards for men's clothing and jewelry categories */}
      <Makecard fetchUrl={Store.mensclothing} />
      <Makecard fetchUrl={Store.jewelery} />
      
      {/* Displaying a large banner image */}
      <BigCard image={banner4} />
      
      {/* Displaying rows of items for different categories with headings */}
      <Row fetchUrl={Store.womensclothing} heading="Women's Clothing" />
      <Row fetchUrl={Store.mensclothing} heading="Men's Clothing" />
      <Row fetchUrl={Store.electronics} heading="Electronics" />
      
      {/* Another large banner image */}
      <BigCard image={banner3} />
      
      {/* Additional individual cards for electronics, men's clothing, and women's clothing categories */}
      <Makecard fetchUrl={Store.electronics} />
      <Makecard fetchUrl={Store.mensclothing} />
      <Makecard fetchUrl={Store.womensclothing} />
      
      {/* Large banner image for visual emphasis */}
      <BigCard image={banner5} />
      
      {/* Displaying rows of items for jewelry and men's fashion categories */}
      <Row fetchUrl={Store.jewelery} heading="Jewelry" />
      <Row fetchUrl={Store.mensclothing} heading="Men's Fashion" />
      
      {/* Another large banner image */}
      <BigCard image={banner6} />
      
      {/* Displaying rows of items for computing and fashion categories */}
      <Row fetchUrl={Store.electronics} heading="Computing" />
      <Row fetchUrl={Store.womensclothing} heading="Fashion" />
      
      {/* Final large banner image */}
      <BigCard image={banner2} />
      
    </div>
  );
}
