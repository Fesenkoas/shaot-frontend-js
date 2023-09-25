import React, { useEffect, useState } from "react";
import { IconButton, InputBase, Paper } from "@mui/material";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { getAllWorkersFetch } from "../future/action/fetchAdmin";
import style from "../css_module/workers.module.css";
import { сompanySchedule } from "../future/redux/managerSlice";

export const AddWorker = ({ day, indexKey, index, handleAddWorker }) => {
  const { workers, loading } = useSelector((state) => state.admin);
  const { schedule } = useSelector((state) => state.manager);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
console.log(indexKey, index);
  const handleClickSearch = () => {
    if (search) {
      const matchedWorkers = workers.filter((worker) => worker.name === search);
      console.log(matchedWorkers[0].name);
        handlItem(matchedWorkers[0].name)
      setSearch("");
    }
  };

  const handlItem = (name) => {
    const updatedWorkerNames = [...day.shifts[index].workerNames, name];

    const updatedShift = {
      ...day.shifts[index],
      workerNames: updatedWorkerNames,
    };

    const updatedDay = {
      ...day,
      shifts: [
        ...day.shifts.slice(0, index),
        updatedShift,
        ...day.shifts.slice(index + 1),
      ],
    };
    const updateAll = [
      ...schedule.slice(0, indexKey),
      updatedDay,
      ...schedule.slice(indexKey + 1),
    ];

    dispatch(сompanySchedule(updateAll));
    handleAddWorker(null);
  };

  useEffect(() => {
    dispatch(getAllWorkersFetch());
  }, [dispatch]);

  return (
    <div className={style.fullItem}>
      
      <div>
      <div className={style.add_to_card} onClick={()=>handleAddWorker(null)}>X</div>
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
            ? workers.map((worker) => (
                <p key={worker.id} onClick={() => handlItem(worker.name)}>
                  {worker.name}
                </p>
              ))
            : "Loading....."}
        </div>
      </div>
    </div>
  );
};
