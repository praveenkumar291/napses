import React from "react";

const Bar = ({ percent }) => {
  return (
    <div className="progress m-2">
      <div
        className="progress-bar bg-success"
        role="progressbar"
        aria-valuenow={percent}
        style={{ width: `${percent}%` }}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
};

export default Bar;
