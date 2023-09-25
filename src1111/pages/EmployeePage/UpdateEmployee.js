import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import { getEmployeeByIdFetch} from "../../future/action/fetchEmployee";
import { updateEmployee } from "../../future/action/updateEmployee";

const UpdateEmployee = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [wage, setWage] = useState("");
  const [password, setPassword] = useState("");
 

  useEffect(() => {
    if (id) {
      dispatch(getEmployeeByIdFetch(id));
    }
  }, [id, dispatch]);

  const handleUpdateClick = () => {
    const updatedEmployee = {
      id,
      name,
      wage,
      password,
    };
    dispatch(updateEmployee(id, updatedEmployee));
    resetFields();
  };

  const handleCancelClick = () => {
    resetFields();
  };

  const resetFields = () => {
    setId("");
    setName("");
    setWage("");
    setPassword("");
  };

  return (
    <div className="content flex flex-row">
      <form onSubmit={(e) => e.preventDefault()} className="p-3 w-1/2">
        <div className="flex flex-col space-y-4">
          <TextField
            label="ID Employee"
            onChange={(e) => setId(e.target.value)}
            value={id}
            margin="normal"
            helperText="Please enter Employee ID"
          />

          <TextField
            label="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            multiline
            margin="normal"
            helperText="Please enter Employee Name"
          />

          <TextField
            label="Wage"
            onChange={(e) => setWage(e.target.value)}
            value={wage}
            multiline
            margin="normal"
            helperText="Please enter Employee Wage"
          />

          <TextField
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            multiline
            margin="normal"
            helperText="Please enter Password"
          />

          <div className="flex gap-8 items-center justify-center mt-4">
            <button
              onClick={handleUpdateClick}
              className="bg-blue-600 text-white py-2 px-4 rounded-sm"
            >
              UPDATE
            </button>

            <button
              onClick={handleCancelClick}
              className="bg-red-500 text-white py-2 px-4 rounded-sm"
            >
              CANCEL
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateEmployee;

