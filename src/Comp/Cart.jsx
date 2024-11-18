import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";

function Cart() {
  // State to keep track of the total price of items in the cart
  const [totalPrice, setTotalPrice] = useState(0);
  // Pulling in the 'basket' from global state and the 'dispatch' function to update the state
  const [{ basket }, dispatch] = useStateValue();
  let price = 0;

  // Calculate total price whenever the basket changes
  useEffect(() => {
    basket.map((item) => {
      price += parseFloat(item.price);
      setTotalPrice(price); // Set total price state
    });
  }, [basket]); // Dependency on 'basket' array to recalculate when it changes

  // Function to display each cart item
  function displayCartItem(item, index) {
    return (
      <div key={item.id}>
        <div className="cart-card flex">
          {/* Item image */}
          <div className="img">
            <img src={item.image} alt="" />
          </div>
          {/* Item details: title, description, price, and action buttons */}
          <div className="detail flex">
            <div className="title">{item.title}</div>
            {item.detail}
            <div>${item.price}</div>
            <div>
              {/* Remove from Cart button with dispatch to update global state */}
              <Button
                className="btn"
                onClick={() => {
                  dispatch({
                    type: "Remove_From_Cart",
                    item: {
                      id: item.id,
                      index: index,
                    },
                  });
                }}
              >
                Remove from Cart
              </Button>
              {/* Buy Now button - Placeholder for future functionality */}
              <Button className="btn">Buy Now</Button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }

  return (
    <div>
      <div className="Cart">
        {/* Summary card showing total price and checkout option */}
        <div className="price-card flex">
          <img src="./shop.png" alt="" className="img" />
          <div>
            <h4>Shop All Items in Your Cart</h4>
            <div>Total Price = ${totalPrice}</div>
            <Button className="btn">Buy Now</Button>
          </div>
        </div>
        
        {/* Conditional rendering: show message if basket is empty, otherwise show items */}
        {basket.length === 0 ? (
          <div>
            <h2>Your basket is empty</h2>
            <h6>Start Adding Items to your basket</h6>
          </div>
        ) : (
          basket.map(displayCartItem) // Render each item in the basket using displayCartItem function
        )}
      </div>
    </div>
  );
}

export default Cart;
