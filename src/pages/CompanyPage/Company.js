import React, { useEffect, useState } from "react";
import { IconButton, InputBase, Paper } from "@mui/material";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { reduxManager } from "../../future/redux/managerSlice";
import { getCompanyByIdFetch } from "../../future/action/fetchManager";

export const Company = () => {
  const [search, setSearch] = useState("");
  const [updateResult, setUpdateResult] = useState("");
  const { company, loading } = useSelector(reduxManager);
  const dispatch = useDispatch();
  const handleClickSearch = () => {
    console.log(search);
    setSearch("");
  };

  const handleUpdate = (item) => {
    setUpdateResult(item);
  };

  useEffect(() => {
    dispatch(getCompanyByIdFetch("1200"));
  }, [dispatch]);
  return (
    <div>
    <div className="flex flex-row justify-center h-full">
      <div class="basis-1/2 w-[777px] h-[674px] bg-[#E7EFEE] m-3 rounded-xl">
        <div class="flex flex-row ">
          <div class="row-span-2 pl-10 pt-5  w-[50%]">
            <p className="text-[#99C2BD] text-lg ">Employee Information</p>
            <p className="text-[#99C2BD] text-3xl font-bold pt-8 ">
              {updateResult.name}
            </p>
            <p className="text-[#99C2BD] text-base pt-3">{updateResult.id}</p>
            <p className="text-[#99C2BD] text-lg pt-10">Contact:</p>
            <p className="text-black text-xl pt-2">053 924 0009</p>
            <p className="text-black text-xl pt-1">
              designerfesenko@gmail.com
            </p>
            <p className="text-[#99C2BD] text-lg font-bold pt-10">
              Wage per hour:
            </p>
          </div>
          <div class="row-span-2">
            03
          </div>
        </div>
      </div>
      <div className="flex-col m-3 ">
        <button className="w-[380px] h-[80px] bg-[#99C2BD] mb-5 rounded-xl text-3xl font-bold text-white">
          Send an invitation
        </button>
        <div class="basis-1/4 w-[380px] h-[572px] bg-[#E7EFEE] rounded-xl">
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
            {loading &&
              company.workers.map((worker) => (
                <p key={worker.id} onClick={() => handleUpdate(worker)}>
                  {worker.name}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
