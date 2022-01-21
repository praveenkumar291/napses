import React from "react";



const Tile = ({ icon, title, rate,data  }) => {
  return (
    <div
      style={{
        width: "450px",
        height: "65px",
        justifyContent: "space-between",
        display: "flex",
        

      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "5px 0 0 10px",
          }}
        >
          <div style={{ fontWeight: "600" }}>{title}</div>
          <div style={{ fontSize: "12px" }}>{rate}</div>
        </div>
        <div style={{ marginLeft: "80px", marginTop: "24px",fontSize:"12px" }}>{data}</div>
        <div style={{  marginLeft: "40px",marginTop: "20px" }}>{icon}</div>
      </div>
    </div>
  );
};

export default Tile;
