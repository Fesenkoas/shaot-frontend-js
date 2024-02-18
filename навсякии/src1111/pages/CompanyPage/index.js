import React from "react";
import { Route, Routes } from "react-router-dom";
import { Company } from "./Company.js";
//import {AddCompany} from "./AddCompany"
import { AllWorkers } from "./AllWorkers";
import { Boxs } from "./Boxs";



const index = () => {
  return (
      <Routes>
        <Route path="/" element={<Company/>} />
        <Route path="/new" element={<Boxs/>} />
        <Route path="/workers" element={<AllWorkers/>} />
      </Routes>
  )
}
export default index