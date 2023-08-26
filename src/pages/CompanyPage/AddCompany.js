import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import { postNewCompany } from "../../future/action/fetchManager";
import { getMessage } from "../../future/redux/messageSlice";

export const AddCompany = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.message);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [generalWage, setGeneralWage] = useState("");
  const [password, setPassword] = useState("");

  const handleClickAdd = () => {
    const newComp = {
      id,
      name,
      generalWage,
      password,
    };
    dispatch(postNewCompany(newComp));
    setId("");
    setName("");
    setGeneralWage("");
    setPassword("");
  };
  const handleClickCancel = () => {
    setId("");
    setName("");
    setGeneralWage("");
    setPassword("");
  };

  useEffect(() => {
    if (message) {
      toast(message);
      console.log(message);
      dispatch(getMessage(""));
    }
  }, [message, dispatch]);

  return (
          <addcompany>
            <form onSubmit={(e) => e.preventDefault()}>
              <label className="flex flex-col w-full ">
                <TextField
                  label="ID Company "
                  onChange={(e) => setId(e.target.value)}
                  value={id}
                  margin="normal"
                  helperText="Please enter ID Company"
                />

                <TextField
                  label="Name Company"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  multiline
                  margin="normal"
                  helperText="Please enter Name Company"
                />
                <TextField
                  label="General Wage"
                  onChange={(e) => setGeneralWage(e.target.value)}
                  value={generalWage}
                  multiline
                  margin="normal"
                  helperText="Please enter General Wage"
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
                    onClick={handleClickAdd}
                    className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm py-2 px-4 "
                  >
                    SAVE
                  </button>
                  <button
                    onClick={handleClickCancel}
                    className="flex justify-center items-center bg-red-500 text-xs text-white rounded-sm py-2 px-4 "
                  >
                    CANCEL
                  </button>
                </div>
              </label>
            </form>
          </addcompany>
  );
};
