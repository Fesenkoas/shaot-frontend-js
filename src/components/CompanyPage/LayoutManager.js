import React from "react";
import { Sidebar } from "./SideBar";

export const LayoutManadger = ({ children }) => {
  return (
    <React.Fragment>
      <div className="body">
        <Sidebar />
        {children}
      </div>
    </React.Fragment>
  );
};
