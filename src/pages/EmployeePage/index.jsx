import React from "react";
import { Route, Routes} from "react-router-dom";
import { Shifts } from "./Shifts";

const index = () => {
  return (
      <Routes>
       <Route path="/" element={<Shifts/>} />
      </Routes>
  )
}
export default index


