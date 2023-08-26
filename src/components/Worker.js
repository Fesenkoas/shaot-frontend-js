import { IconButton, InputBase, Paper } from "@mui/material";
import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { putEmployeeCompany } from "../future/action/fetchManager";

export const Worker = ({ loading, company }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [employee, setEmployee] = useState("");
  const [wage, setWage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleInvitation = () => {
   dispatch(putEmployeeCompany(1700,employee.id))
  };

  const handleClickSearch = () => {
    if(search){
    const matchedWorkers = company.filter((worker) => worker.name === search);
    setEmployee(matchedWorkers[0]);
    setSearch("");
    }
  };

  const handleUpdate = (item) => {
    if (item.companies && item.companies.length >= 1) setIsVisible(false);
    else setIsVisible(true);
    setEmployee(item);
    setWage(item.wage);
  };
  return (
    <div className="flex flex-row justify-center">
      <div className="basis-1/2 w-[70%] bg-[#E7EFEE] m-3 rounded-xl">
        <div className="flex flex-row ">
          <div className="row-span-2 pl-10 pt-5  w-[50%]">
            <p className="text-[#99C2BD] text-lg ">Employee Information</p>
            <p className="text-[#99C2BD] text-3xl font-bold pt-8 ">
              {employee.name}
            </p>
            <p className="text-[#99C2BD] text-base pt-3">{employee.id}</p>
            <p className="text-[#99C2BD] text-lg pt-10">Contact:</p>
            <p className="text-black text-xl pt-2">053 924 0009</p>
            <p className="text-black text-xl pt-1">designerfesenko@gmail.com</p>
            <p className="text-black text-lg font-bold pt-10">
              Wage per hour:
              <input
                type="text"
                className="border border-black w-14 h-10 text-center text-xl"
                onChange={(e) => setWage(e.target.value)}
                value={wage}
              />
            </p>
          </div>
          <div className="row-span-2">03</div>
        </div>
      </div>

      <div className="flex-col m-3 ">
        {/* <button className="w-[380px] h-[80px] bg-[#99C2BD] mb-5 rounded-xl text-3xl font-bold text-white">
          Send an invitation
        </button> */}
        {isVisible ? (
          <button
            onClick={handleInvitation}
            className="w-[380px] h-[80px] bg-[#99C2BD] mb-5 rounded-xl text-3xl font-bold text-white"
          >
            Send an invitation
          </button>
        ) : (
          <button
            disabled
            className="w-[380px] h-[80px] bg-[#99c2bd93] mb-5 rounded-xl text-3xl font-bold text-white"
          >
            Send an invitation
          </button>
        )}
        <div className="basis-1/4 w-[380px] h-[572px] bg-[#E7EFEE] rounded-xl">
          <div className="p-11 ">
            <Paper
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                width: 295,
                height: 46,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
              <IconButton
                type="button"
                sx={{ p: "10px" }}
                aria-label="search"
                onClick={handleClickSearch}
              >
                <FaMagnifyingGlass />
              </IconButton>
            </Paper>
          </div>
          <div className="px-11 h-[295px]">
            {loading
              ? company.map((worker) => (
                  <p key={worker.id} onClick={() => handleUpdate(worker)}>
                    {worker.name}
                  </p>
                ))
              : "Loading....."}
          </div>
        </div>
      </div>
    </div>
  );
};
