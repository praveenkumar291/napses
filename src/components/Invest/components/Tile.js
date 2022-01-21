import React from "react";

const Tile = ({ icon, title, rate, color }) => {
  return (
    <div style={{ width: "225px", height: "80px" }}>
      <div style={{ display: "flex", flexDirection: "row", padding: "10px" }}>
        <img height="65px" width="65px" src={icon} alt="icon" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "5px 0 0 10px",
          }}
        >
          <div>{title}</div>
          <div style={{ color: `${color}` }}>{rate}</div>
        </div>
      </div>
    </div>
  );
};

export default Tile;
