import React from "react";
import { Redirect } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const token = localStorage.getItem("token");
    if (!token) {
      return <Redirect to="/login" />;
    }
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
