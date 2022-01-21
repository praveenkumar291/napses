import React from "react";
import ProgressBar from "./components/ProgressBar";
import Tile from "./components/Tile";
import "./investment.css";

const InvestmentCard = () => {
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
        <span> InvestmentCard </span>
        <span> ... </span>
      </div>
      <div
        className="invest_card"
        style={{
          borderRadius: "5px",
          width: "400px",
          height: "250px",
          margin: "20px 0 0 0",
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "77px",
          }}
        >
          <Tile
            icon={
              "https://media.istockphoto.com/vectors/icon-page-calendar-schedule-deadline-date-app-vector-id1284999664?b=1&k=20&m=1284999664&s=170667a&w=0&h=pP_ng5hXWrtGdBr0rbKLexvjXXkgO5mg0EI9VdDTQCc="
            }
            title="Total"
            rate="0.56 Ether"
            color="yellow"
          />
          <Tile
            icon={
              "https://media.istockphoto.com/vectors/icon-page-calendar-schedule-deadline-date-app-vector-id1284999664?b=1&k=20&m=1284999664&s=170667a&w=0&h=pP_ng5hXWrtGdBr0rbKLexvjXXkgO5mg0EI9VdDTQCc="
            }
            title="Weekly"
            rate="0.005 Ether"
            color="green"
          />
          <Tile
            icon={
              "https://icon-library.com/images/expenses-icon/expenses-icon-20.jpg"
            }
            title="Expences"
            rate="0.005 Ether"
            color="red"
          />
        </div>
        <div>
          <ProgressBar />
        </div>
      </div>
    </div>
  );
};

export default InvestmentCard;
