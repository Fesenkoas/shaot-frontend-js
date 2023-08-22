import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/AuthPage";
import CompanyPage from "./pages/CompanyPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// import  EmployeePage  from "./pages/EmployeePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage/>} />
        <Route path="/company/*" element={<CompanyPage/>} />
        {/* <Route path="/worker/:id" element={<EmployeePage />} /> */}
      </Routes>
      <ToastContainer position="top-center" />
    </>
  );
};

export default App;
