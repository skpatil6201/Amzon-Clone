import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function DisplayPage() {
  // State to store the specific item and recommended items
  const [item, updateItem] = useState([]);
  const [recommends, updateRecommends] = useState([]);
  
  // Extract the item ID and category from the URL parameters
  const itemId = useParams();
  const id = itemId.id;
  const category = itemId.category;

  // Fetch item details and recommended items whenever the item ID changes
  useEffect(() => {
    async function fetchData() {
      // Fetch items in the same category
      const request = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
      updateRecommends(request.data); // Store fetched category items as recommendations

      // Find the specific item by matching ID
      request.data.map((item) => {
        if (item.id === parseInt(id)) updateItem(item);
      });
    }

    fetchData();
  }, [id, category]); // Dependency array includes `id` and `category` so it refetches if these change

  // Function to display each recommended item in the recommendations row
  function displayItem(item) {
    return (
      <div className="image row-item" key={item.id}>
        <img src={item.image} alt="" />
      </div>
    );
  }

  return (
    <div className="DisplayPage">
      {/* Link to go back to the homepage */}
      <div className="back_to_amazon">
        <Link to="/">Go Back</Link>
      </div>

      {/* Display the item’s category and title */}
      <div className="category">{item.category}</div>
      <div className="title">{item.title}</div>

      {/* Display the main item details */}
      <div className="flex box">
        <div className="image">
          <img src={item.image} alt="" />
        </div>
        <div className="detail">
          {item.description}
          <div className="price">Price: ${item.price}</div>
          <div>
            <Button className="btn">Buy Now</Button>
            <Button className="btn">Add To Cart</Button>
          </div>
        </div>
      </div>

      <br />

      {/* Section for recommended items */}
      <h3>People also look for</h3>
      <div className="row flex">{recommends.map(displayItem)}</div>
    </div>
  );
}

export default DisplayPage;
