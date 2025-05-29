import React from "react";

const Error = ({ message }) => (
  <div
    style={{
      background: "#ffeaea",
      color: "#ef4444",
      padding: "0.8rem 1rem",
      borderRadius: "8px",
      marginBottom: "1rem",
      fontWeight: "500",
    }}
  >
    {message}
  </div>
);

export default Error;
