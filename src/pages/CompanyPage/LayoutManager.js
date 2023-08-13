import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "./../../components/Footer";

export const LayoutManadger = ({ children }) => {
  return (
    
      <div className="h-screen">
        <Header />
        {children}
        
      </div>
  );
};
