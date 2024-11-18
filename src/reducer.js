// The initial state of the application, containing user data and the shopping cart (basket)
export const initialState = {
  basket: [],    // Array to hold items in the user's cart
  isUser: false, // Boolean flag to track if the user is signed in
  username: null, // The username of the signed-in user, initially null
};

// The reducer function that handles the changes to the state based on actions
function reducer(state, action) {
  switch (action.type) {
    // Action to add an item to the cart (basket)
    case "Add_To_Cart":
      return {
        ...state,  // Spread the current state to keep other values intact
        basket: [...state.basket, action.item], // Add the new item to the basket
      };
    
    // Action to remove an item from the cart (basket)
    case "Remove_From_Cart":
      return {
        ...state,  // Spread the current state
        basket: state.basket.filter((item, index) => {
          // Remove the item based on the index provided in the action
          return index !== action.item.index;  // Keep all items except the one being removed
        }),
      };

    // Action for user sign-in (currently a placeholder, may need more logic)
    case "User_Sign_In":
      return state;  // For now, it simply returns the current state without any changes

    // Default case to return the unchanged state if no action matches
    default:
      return state;
  }
}

export default reducer;
