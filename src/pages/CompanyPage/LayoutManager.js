import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "./../../components/Footer";

export const LayoutManadger = ({ children }) => {
  return (
    <React.Fragment>
      <div className="h-full">
        <Header />
        {children}
        <Footer />
      </div>
    </React.Fragment>
  );
};
