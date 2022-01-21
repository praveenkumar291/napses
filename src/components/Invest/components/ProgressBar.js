import React from "react";
import Bar from "./Bar";

const ProgressBar = () => {
  return (
    <div
      style={{
        height: "100px",
        width: "240px",
        transform: "rotate(-90deg)",
      }}
    >
      <Bar percent="25" />
      <Bar percent="50" />
      <Bar percent="75" />
    </div>
  );
};

export default ProgressBar;
