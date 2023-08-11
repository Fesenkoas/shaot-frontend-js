import React from "react";
import { Route, Routes } from "react-router-dom";
import { Company } from "./Company";
import {AddCompany} from "./AddCompany"
import { LayoutManadger } from "./LayoutManager";



const index = () => {
  return (
    <LayoutManadger>
      <Routes>
        <Route path="/" element={<Company />} />
        <Route path="/company" element={<AddCompany/>} />
      </Routes>
    </LayoutManadger>
  )
}
export default index