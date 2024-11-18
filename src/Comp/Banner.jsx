import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

// Import images directly if they're in your `src` folder
import banner1 from "../img/banner1.jpg";
import banner2 from "../img/banner2.jpg";
import banner3 from "../img/banner3.jpg";
import banner4 from "../img/banner4.jpg";
import banner5 from "../img/banner5.jpg";
import banner6 from "../img/banner6.jpg";

function Banner() {
  return (
    <div className="banner">
      <Carousel>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={banner6} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={banner3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={banner4} alt="Fourth slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={banner5} alt="Fifth slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={banner1} alt="Sixth slide" />
        </Carousel.Item>
      </Carousel>
      <div className="fade-box"></div>
    </div>
  );
}

export default Banner;
