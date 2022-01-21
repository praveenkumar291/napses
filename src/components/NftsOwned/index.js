import React from 'react';
import "./nftsOwned.css";
import { ImDiamonds } from "react-icons/im";


const NetsOwned = () => {
  return (

    <div className="netsowned">

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "3px",
          color: "black",
          fontWeight: "600"
        }}
      >
        <span> NFTS owned</span>
        <span> ... </span>
      </div>
      <div className="netItems">
        <span className="netItem_title"> Roma</span>
        <div className="netitem_money_continer">
          <span className="netItem_money_rate">
            {" "}
            <ImDiamonds />
          </span>
          <span className="netItem_money"> 0.91 Ether</span>
        </div>
      </div>
      <div className="netItems">
        <span className="netItem_title"> Thorian</span>
        <div className="netitem_money_continer">
          <span className="netItem_money_rate">
            {" "}
            <ImDiamonds />
          </span>
          <span className="netItem_money"> 0.89 Ether</span>
        </div>
      </div>
      <div className="netItems">
        <span className="netItem_title"> Linds</span>
        <div className="netitem_money_continer">
          <span className="netItem_money_rate">
            {" "}
            <ImDiamonds />
          </span>
          <span className="netItem_money"> 1.1 Ether</span>
        </div>
      </div>
      <div className="netItems">
        <span className="netItem_title"> villa</span>
        <div className="netitem_money_continer">
          <span className="netItem_money_rate">
            {" "}
            <ImDiamonds />
          </span>
          <span className="netItem_money"> 0.71 Ether</span>
        </div>
      </div>
    </div>
  );
};

export default NetsOwned;
