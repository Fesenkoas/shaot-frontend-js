import React from "react";
import { Route, Routes } from "react-router-dom";
import { Setting } from "./Setting.jsx";
import { Info } from "./Info.jsx";
import { Shifts } from "./Shifts.jsx";



const index = () => {
  return (
      <Routes>
        <Route path="/setting" element={<Setting/>} />
        <Route path="/" element={<Shifts/>} />
        <Route path="/info" element={<Info/>} />
      </Routes>
  )
}
export default index