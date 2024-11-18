import { Link } from "react-router-dom";   // Importing Link for navigation between routes
import React, { useEffect, useState } from "react";  // Importing React hooks for component state and side-effects
import { Button } from "@mui/material";  // Importing Material UI Button for styling
import axios from "axios";  // Importing axios to make HTTP requests
import { useStateValue } from "../StateProvider";  // Importing the global state management hook (context)

function Makecard(props) {
  const [{ basket }, dispatch] = useStateValue();  // Accessing basket and dispatch from global state
  const [storeItems, UpdateStoreItems] = useState([]);  // State for storing fetched items

  // Fetch data when component is mounted or when `fetchUrl` changes
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);  // Making a GET request to the URL passed via props
      UpdateStoreItems(request.data);  // Storing fetched data into state
      return request;
    }
    fetchData();  // Fetching data on component mount or props.change
  }, [props.fetchUrl]);  // Re-run useEffect if `fetchUrl` changes

  // Function to display each item fetched
  function displayItem(item) {
    return (
      <div className="Card flex" key={item.id}>
        {/* Link to the display page of the clicked item */}
        <Link to={`/DisplayPage/${item.category}/${item.id}`}>
          <div className="title">{item.title}</div>  {/* Item title */}
          <div className="image">
            <img src={item.image} alt="" />  {/* Item image */}
          </div>
        </Link>
        <div className="price">${item.price}</div>  {/* Item price */}
        <div className="link">see more  </div>  {/* Link text */}
        <div>
          {/* Button to add the item to the cart */}
          <Button
            className="add-cart-btn"
            onClick={() => {
              console.log(item);  // Logging item to the console (for debugging)
              dispatch({
                type: "Add_To_Cart",  // Dispatching action to add the item to the cart
                item: {
                  id: item.id,
                  title: item.title,
                  image: item.image,
                  price: item.price,
                  detail: item.description,
                },
              });
            }}
          >
            Add to cart
          </Button>
        </div>
      </div>
    );
  }

  // Mapping over the storeItems state to display each item
  return storeItems.map(displayItem);
}

export default Makecard;
