import React, { createContext, useContext, useReducer } from 'react';

const ${componentName}Context = createContext();

const ${componentName}Provider = ({ reducer, initialState, children }) => (
  <${componentName}Context.Provider value={useReducer(reducer, initialState)}>
    {children}
  </${componentName}Context.Provider>
);

const use${componentName}Context = () => useContext(${componentName}Context);

export { ${componentName}Provider, use${componentName}Context };
