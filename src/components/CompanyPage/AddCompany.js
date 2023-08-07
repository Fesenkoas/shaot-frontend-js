import React, { useState } from "react";
import { useDispatch } from "react-redux";
//import FileBase64 from "react-file-base64";
import TextField from "@mui/material/TextField"
import { postNewCompany } from "../../future/action/fetchManager";

export const AddCompany = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [generalWage, setGeneralWage] = useState("");
  const [password, setPassword] = useState("");
  //const [image, setImage] = useState("");
 

  const handleClickAdd = () => {
    const newComp = {
        id,
        name,
        generalWage,
        password
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

  return (
    <div className="content flex flex-row">
      <form onSubmit={(e) => e.preventDefault()} className=" p-3 basis-1/2">
        <label className="flex flex-col w-full ">
          <TextField
            label="ID Company "
            onChange={(e) => setId(e.target.value)}
            value={id}
            margin="normal"
            helperText="Please enter ID Company"
          />

          {/* <label className="text-gray-300 py2 bg-gray-600 text-xsmt-3 flex items-center justify-center border-2 border-dotted cursor-pointer">
            <FileBase64
              multiple={false}
              onDone={({ base64 }) => setImage({ image: base64 })}
            />
          </label> */}

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
              className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm py-2 px-4"
            >
              SAVE
            </button>
            <button
              onClick={handleClickCancel}
              className="flex justify-center items-center bg-red-500 text-xs text-white rounded-sm py-2 px-4"
            >
              CANCEL
            </button>
          </div>
        </label>
      </form>
      {/* <div className="h-screen p-3 basis-1/4">
        {image && <img src={image.image} alt={image.name} />}
      </div> */}
    </div>
  );
};