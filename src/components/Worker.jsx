import { IconButton, InputBase, Paper } from "@mui/material";
import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { putEmployeeCompany } from "../future/action/fetchManager";
import style from "../css_module/workers.module.css";
import { ID } from "../unit/const";

export const Worker = ({ loading, company }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [employee, setEmployee] = useState("");
  const [wage, setWage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleInvitation = () => {
    dispatch(putEmployeeCompany(ID, employee.id));
  };

  const handleClickSearch = () => {
    if (search) {
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
    <div className={style.conteiner}>
      {/* Left */}
      <div className="m-3 rounded-xl">
        <div className="flex-col w-[430px] h-[547px]">
          {/* <div className="row-span-2 pl-10 pt-5  w-[50%]">
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
          </div> */}
        </div>
      </div>
      {/* Center */}
      <div className="bg-[#E7EFEE] m-3 rounded-xl">
        <div className={style.center}>
          <div className={`p-5`}>
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
        </div>
      </div>
      {/* Right */}
      <div className="flex-col m-3 ">
        {/* <button className="w-[380px] h-[80px] bg-[#99C2BD] mb-5 rounded-xl text-3xl font-bold text-white">
          Send an invitation
        </button> */}
        {isVisible ? (
          <button
            onClick={handleInvitation}
            className="w-[430px] h-[100px] bg-[#99C2BD] mb-5 rounded-xl text-3xl font-bold text-white hover:bg-[#0D1634]"
          >
            Send an invitation
          </button>
        ) : (
          <button
            disabled
            className="w-[430px] h-24 bg-[#99c2bd93] mb-5 rounded-xl text-3xl font-bold text-white"
          >
            Send an invitation
          </button>
        )}
        <div className=" w-[430px] h-[438px] bg-[#E7EFEE] rounded-xl">
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

// ${"rtl" === "rtl" ? style.text_rtl : style.text_ltr}
