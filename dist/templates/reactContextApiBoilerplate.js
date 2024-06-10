import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  // initial state
};

const reducer = (state, action) => {
  switch (action.type) {
    // define case actions
    default:
      return state;
  }
};

const StateContext = createContext();

export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
