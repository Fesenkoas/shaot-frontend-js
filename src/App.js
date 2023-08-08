import React from "react";
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import  CompanyPage  from "./components/CompanyPage";
//import  EmployeePage  from "./components/EmployeePage";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<CompanyPage />} />
      {/* <Route path="" element={<EmployeePage />} /> */}
    </Routes>
  );
};

export default App;
