import React from "react";
import "./mycard.css";

const Mycards = () => {
  return (
    <>
      <div className="mt-4  mymoney_card">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            color: "black",
            fontWeight: "600",
          }}
        >
          <span> My Cards</span>
        </div>
        <div className="balance_card">
          <div className="balance_prise">
            <span>Balance</span>
            <span className="balance">$521.652</span>
          </div>
          <div className="balance_monthly">
            <span>Monthly</span>
            <span className="monthly_balance">$14,225</span>
            <span className="balance_percentage">+10%</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mycards;
