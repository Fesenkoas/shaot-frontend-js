import React from "react";
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import  CompanyPage  from "./pages/CompanyPage";
//import  EmployeePage  from "./pages/EmployeePage";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<CompanyPage />} />
      {/* <Route path="" element={<EmployeePage />} /> */}
    </Routes>
  );
};

export default App;
