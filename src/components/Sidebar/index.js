import React from "react";
import {
  AiOutlineHome,
  AiOutlinePoweroff,
  AiTwotoneCalendar,
} from "react-icons/ai";
import { BiPieChartAlt } from "react-icons/bi";
import { CgToolbox } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { MdRestore } from "react-icons/md";
import { SiArlo } from "react-icons/si";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div  style={{ width: "60px", height: "100vh",  }}>
      <div className="flex-column">
        <div className="my-3 p-2">
          <SiArlo />
        </div>
        <div className="my-3 active">
          <MdRestore />
        </div>
        <div className="my-3">
          <AiOutlineHome />
        </div>
        <div className="my-3">
          <CgToolbox />
        </div>
        <div className="my-3">
          <AiTwotoneCalendar />
        </div>
        <div className="my-3">
          <BiPieChartAlt />
        </div>
        <div className="mt-3 mb-5">
          <FiSettings />
        </div>
        <div className=" power-button ">
          <AiOutlinePoweroff />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
