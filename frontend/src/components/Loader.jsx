import React from "react";

const Loader = () => (
  <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
    <div
      style={{
        width: "32px",
        height: "32px",
        border: "4px solid #4070f4",
        borderTop: "4px solid transparent",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }}
    />
    <style>
      {`
        @keyframes spin {
          0% { transform: rotate(0); }
          100% { transform: rotate(360deg); }
        }
      `}
    </style>
  </div>
);

export default Loader;
