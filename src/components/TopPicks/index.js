import React from "react";
import Tile from "./Tile";
import { FiChevronRight } from "react-icons/fi";
import "./toppicks.css"
const TopPicks = () => {
  return (
    <div className="top-picks">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          color: "black",
          fontWeight: "600",
        }}
      >
        <span> TopPicks </span>
        <span style={{ marginLeft: "202px" }}>...</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "-9px",
        }}
      >
        <Tile
          title="Roma"
          rate="$400.000"
          data="0.00000302 Ether"
          icon={<FiChevronRight />}
        />
        <Tile
          title="Atlas"
          rate="$500.000"
          data="0.00000302 Ether"
          icon={<FiChevronRight />}
        />
        <Tile
          title="Atlas"
          rate="$786.000"
          data="0.00000302 Ether"
          icon={<FiChevronRight />}
        />
        <Tile
          title="Heavens"
          rate="$667.008"
          data="0.00000761Ether"
          icon={<FiChevronRight />}
        />
        <Tile
          title="Heretho"
          rate="$348,000"
          data="0.00000302 Ether"
          icon={<FiChevronRight />}
        />
      </div>
    </div>
  );
};

export default TopPicks;
