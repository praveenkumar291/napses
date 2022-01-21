import React from "react";
import { FiCamera } from "react-icons/fi";

import { CgProfile } from "react-icons/cg";
const NFT = () => {
  return (
    <div className="mt-4">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          color: "black",
          fontWeight: "600",
        }}
      >
        <span> NFT Marketplace</span>
        <span> ... </span>
      </div>
      <div
        style={{
          borderRadius: "5px",
          width: "400px",
          height: "250px",
          
          backgroundImage:
            "url(https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg)",
          margin: "20px 0 0 0",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <span
          style={{
            backgroundColor: "gray",
            borderRadius: "10px",
            padding: "2px 4px",
            position: "absolute",
            left: "10px",
            top: "20px",
            color: "white",
          }}
        >
          Top picks
        </span>
        <span
          style={{
            backgroundColor: "gray",
            borderRadius: "10px",
            padding: "2px 4px",
            position: "absolute",
            left: "100px",
            color: "white",
            top: "20px",
          }}
        >
          Featured
        </span>
        <span
          style={{
            position: "absolute",
            left: "10px",
            top: "166px",
            color: "white",
            fontWeight: "700",
          }}
        >
          House Andromeda
        </span>
        <span
          style={{
            position: "absolute",
            left: "26px",
            top: "199px",
            color: "white",
          }}
        >
          1.44
        </span>
        <span
          style={{
            position: "absolute",
            left: "108px",
            top: "203px",
            color: "white",
          }}
        >
          *****
        </span>
        <span style={{ position: "absolute", left: "310px", top: "197px" }}>
          <CgProfile />
        </span>
        <span style={{ position: "absolute", left: "350px", top: "195px" }}>
          <FiCamera />
        </span>
      </div>
    </div>
  );
};

export default NFT;
