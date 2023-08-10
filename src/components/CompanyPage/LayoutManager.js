import React from "react";
import { Sidebar } from "./SideBar";
import { Header } from "./Header";

export const LayoutManadger = ({ children }) => {
  return (
    <React.Fragment>
      <div className="body">
        <Header/>
        {/* <Sidebar /> */}
        {children}
      </div>
    </React.Fragment>
  );
};
