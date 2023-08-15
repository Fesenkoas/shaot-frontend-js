import React, { useEffect, useState } from "react";
import { IconButton, InputBase, Paper } from "@mui/material";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { reduxManager } from "../../future/redux/managerSlice";
import { getCompanyByIdFetch } from "../../future/action/fetchManager";
import { CompanyLeft } from "./components/CompanyLeft";

export const Company = () => {
  const [search, setSearch] = useState("");
  const [updateResult, setUpdateResult] = useState("");
  const { company, loading } = useSelector(reduxManager);
  console.log(company);
  const dispatch = useDispatch();

  const handleClickSearch = () => {
    const matchedWorkers = company.workers
      .filter((worker) => worker.name === search)
      .map((worker) => worker);
    setUpdateResult(matchedWorkers[0]);
    setSearch("");
  };

  const handleUpdate = (item) => {
    setUpdateResult(item);
  };

  useEffect(() => {
    dispatch(getCompanyByIdFetch("1700"));
  }, [dispatch]);
  return (
      <company className="flex flex-row justify-center">
        <CompanyLeft employee={updateResult}/>
        
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
              {loading?
                company.workers.map((worker) => (
                  <p key={worker.id} onClick={() => handleUpdate(worker)}>
                    {worker.name}
                  </p>
                )):"Loading....."}
            </div>
          </div>
        </div>
      </company>
  );
};
