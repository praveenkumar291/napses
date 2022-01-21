import React from "react";
import { CgImage } from "react-icons/cg";
import { VscBellDot } from "react-icons/vsc";
import "./header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light main-container ">
      <h3 className=" nav-title"> Dashboard</h3>

      <div className="nav-profile-info">
        <VscBellDot />
        <CgImage />
        <button type="button" class="btn btn-light">
          Rowena
        </button>
      </div>
    </nav>
  );
};

export default Header;
