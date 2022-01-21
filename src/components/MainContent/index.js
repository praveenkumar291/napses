import React from "react";

import MainBody from "../MainBody";
import Mycards from "../Mycards";
import TopPicks from "../TopPicks";

const MainContent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <MainBody />
        </div>
        <div className="col-3">
          <Mycards />
          <div className="row">
            <div className="col-3" >
             <TopPicks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
