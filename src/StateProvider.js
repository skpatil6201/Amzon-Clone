import React, { createContext, useContext, useReducer } from "react";

// Create a Context for global state
export const StateContext = createContext();

// StateProvider component to wrap the application and provide the global state to child components
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    // The Provider component makes the state available to all child components
    // using the `useReducer` hook to manage state updates based on the `reducer` function and `initialState`
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// Custom hook to access the global state within functional components
export const useStateValue = () => useContext(StateContext);
