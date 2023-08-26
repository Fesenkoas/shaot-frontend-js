import React from "react";
import { Route, Routes } from "react-router-dom";
import { Company } from "./Company";
import {AddCompany} from "./AddCompany"
import { LayoutManadger } from "../../components/LayoutManager";
import { AllWorkers } from "./AllWorkers";
import { Boxs } from "./Boxs";



const index = () => {
  return (
    <LayoutManadger>
      <Routes>
        <Route path="/" element={<Company />} />
        <Route path="/new" element={<Boxs/>} />
        <Route path="/workers" element={<AllWorkers/>} />
      </Routes>
    </LayoutManadger>
  )
}
export default index