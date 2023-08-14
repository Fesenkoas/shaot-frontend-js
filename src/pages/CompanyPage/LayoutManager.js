import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "./../../components/Footer";

export const LayoutManadger = ({ children }) => {
  return (
    
      <div>
        <Header />
        {children}
        <Footer/>
      </div>
  );
};
