import React from "react";
import { Route, Routes } from "react-router-dom";
import { Content } from "./Content";
import { LayoutManadger } from "./LayoutManager";


const index = () => {
  return (
    <LayoutManadger>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/company" element={<Content />} />
      </Routes>
    </LayoutManadger>
  )
}
export default index