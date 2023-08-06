import React from "react";
import { NavLink } from 'react-router-dom';



export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className=" p-3 text-2xl text-cyan-50 bg-blue-900 text-center">
        ADMIN PANEL
      </div>
      <NavLink className="w-full p-3 text-cyan-50" to={"/"}>
        Get Company By Id
      </NavLink>
      <NavLink className="w-full p-3  text-cyan-50" to={"/company"}>
        Add Company
      </NavLink>
    </div>
  );
};