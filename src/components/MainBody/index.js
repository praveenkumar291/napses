import React from "react";
import Chart from "../chart/Index";
import Invest from "../Invest";

import NftsOwned from "../NftsOwned";
import NFT from "../NFT";
import MyPortfolio from "../MYPortfolio";

const MainBody = () => {
  return (
    <div className="container" style={{ margin: "0" }}>
      <div className="row">
        <div className="col-6">
          <NFT />
        </div>
        <div className="col-6">
          <Invest />
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <NftsOwned />
        </div>
        <div className="col-9">
          <div className="row">
            <MyPortfolio />
          </div>
          <div className="row">
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
