import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import { getCompanyByIdFetch } from "../../future/action/fetchManager"; 
import { setFoundCompany } from "../redux/companySlice"; 

const FindCompanyById = () => {
  const dispatch = useDispatch();
  const [companyId, setCompanyId] = useState("");
  
  
  const foundCompany = useSelector(state => state.company.foundCompany);

  const handleSearch = () => {
    dispatch(getCompanyByIdFetch(companyId)); 
  };

  const handleClear = () => {
    setCompanyId("");
    dispatch(setFoundCompany(null)); 
  };

  return (
    <div className="content flex justify-center items-center h-screen">
      <div className="w-96 p-6 border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Find Company by ID</h2>
        <TextField
          label="Company ID"
          onChange={(e) => setCompanyId(e.target.value)}
          value={companyId}
          margin="normal"
          fullWidth
        />
        <div className="flex gap-4 mt-6">
          <button
            onClick={handleSearch}
            className="bg-gray-600 text-white py-2 px-4 rounded-md"
          >
            SEARCH
          </button>
          <button
            onClick={handleClear}
            className="bg-red-500 text-white py-2 px-4 rounded-md"
          >
            CLEAR
          </button>
        </div>
        {foundCompany && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Found Company:</h2>
            <p>ID: {foundCompany.id}</p>
            <p>Name: {foundCompany.name}</p>
            <p>General Wage: {foundCompany.generalWage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindCompanyById;
