import React from "react";

const Card = ({ title, children }) => {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    margin: "10px 0",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
};

export default Card;
