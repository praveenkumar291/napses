import React from 'react';
import "./myportfolio.css";


import { ImDiamonds } from "react-icons/im";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const MyPortfolio = () => {
  return (
    <>
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
        <span> MY Portfolio</span>
        <span>
          {" "}
          <FiChevronLeft /> <FiChevronRight />{" "}
        </span>
      </div>

      <div className="myprofile">
        <div className="profiles">
          <img
            src="https://wallpapercave.com/wp/wp5047303.jpg"
            width="70px"
            height="70px"
          />
          <div className="profile_content">
            <span className="profile_title"> Mandragora </span>
            <span className="profile_title">Mansion</span>

            <span>
              <ImDiamonds /> 0.005 Ether
            </span>
          </div>
        </div>
        <div className="profiles">
          <img
            src="https://wallpapercave.com/wp/wp5047303.jpg"
            width="70px"
            height="70px"
          />
          <div className="profile_content">
            <span className="profile_title"> Halbert</span>
            <span className="profile_title">Avenue</span>

            <span>
              <ImDiamonds /> 0.005 Ether
            </span>
          </div>
        </div>
        {/* <div className="profiles">
          <img
            src="https://wallpapercave.com/wp/wp5047303.jpg"
            width="70px"
            height="70px"
          />
          <div className="profile_content">
            <span className="profile_title"> Mandragora </span>
            <span className="profile_title">Mansion</span>

            <span >
              <ImDiamonds /> 0.005 Ether
            </span>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default MyPortfolio;
