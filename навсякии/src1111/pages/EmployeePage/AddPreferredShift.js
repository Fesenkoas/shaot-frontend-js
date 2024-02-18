import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import { addPreferredShift } from "../../future/action/preferredShiftActions"; // Adjust the import based on your action functions

export const AddPreferredShift = () => {
  const dispatch = useDispatch();
  const [employeeId, setEmployeeId] = useState("");
  const [shift, setShift] = useState("");

  const handleClickAdd = () => {
    const newPreferredShift = {
      employeeId,
      shift,
    };
    
    dispatch(addPreferredShift(newPreferredShift)); 
    setEmployeeId("");
    setShift("");
  };

  return (
    <div className="content flex flex-row">
      <form onSubmit={(e) => e.preventDefault()} className="p-3 w-1/2">
        <div className="flex flex-col space-y-4">
          <TextField
            label="Employee ID"
            onChange={(e) => setEmployeeId(e.target.value)}
            value={employeeId}
            margin="normal"
            helperText="Please enter Employee ID"
          />

          <TextField
            label="Preferred Shift"
            onChange={(e) => setShift(e.target.value)}
            value={shift}
            margin="normal"
            helperText="Please enter Preferred Shift"
          />

          <div className="flex gap-8 items-center justify-center mt-4">
            <button
              onClick={handleClickAdd}
              className="bg-gray-600 text-white py-2 px-4 rounded-sm"
            >
              ADD PREFERRED SHIFT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
