import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner = ({ loading }) => {
  return <ClipLoader loading={loading} size={150} />;
};

export default Spinner;
