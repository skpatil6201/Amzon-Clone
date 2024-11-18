// Import React and ReactDOM for rendering the app
import React from "react";
import ReactDOM from "react-dom/client"; // Updated for React 18

// Import Bootstrap CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the main App component where the app's UI is defined
import App from "./App";

// Import the StateProvider to provide global state to the app
import { StateProvider } from "./StateProvider";

// Import the reducer and initial state for managing state within the app
import reducer, { initialState } from "./reducer";

// Create the root element for rendering using React 18's createRoot API
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app wrapped in the StateProvider
root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App /> {/* This is where the main app UI is rendered */}
  </StateProvider>
);
