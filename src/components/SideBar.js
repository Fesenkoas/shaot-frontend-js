import React from "react";
import { NavLink } from 'react-router-dom';
import './style.css'


export const Sidebar = () => {
  return (
    <div>
      <div className=" p-3 text-2xl text-black  text-center ">
      {/* <button className="w-96 h-20 bg-[#22aca3] text-2xl text-white rounded-sm py-2 px-4 ">
               CALENDAR
            </button>
            <button className="w-96 h-20 bg-[#22aca3] text-2xl text-white rounded-sm py-2 px-4 mx-2 ">
               EMPLOYEE
            </button>
            <button className="w-96 h-20 bg-[#22aca3] text-2xl text-white rounded-sm py-2 px-4 ">
            SEND AN INVITATION
            </button> */}
            
        MANAGER PANEL
      </div>
      <NavLink className="p-3  text-black" to={"/"}>
        Get Company By Id
      </NavLink>
      <NavLink className=" p-3   text-black" to={"/company"}>
        Add Company
      </NavLink>
    </div>
  );
};