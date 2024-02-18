import React, { useEffect, useState } from "react";
import { IconButton, InputBase, Paper } from "@mui/material";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { getAllWorkersFetch } from "../future/action/fetchAdmin";
import style from "../css_module/workers.module.css";

export const AddWorker = ({ handleShowModal, handleAddWorker }) => {
  const { workers, loading } = useSelector((state) => state.admin);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState(null);
  const dispatch = useDispatch();

  const handleClickSearch = () => {
    if (search) {
      const matchedWorkers = workers.filter((worker) => worker.name === search);
      console.log(matchedWorkers[0].name);
      handleAddWorker(matchedWorkers[0].name);
      setSearch(null);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Escape' && isModalOpen) {
      handleShowModal(null)
      setIsModalOpen(false);
    }
  };

  document.addEventListener('keydown', handleKeyPress);
 
  useEffect(() => {
    setIsModalOpen(true)
    dispatch(getAllWorkersFetch());
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
    
  }, [dispatch, isModalOpen]);


  return (
    <div className={style.fullItem}>
     
        <div>
        <div
          className={style.add_to_card}
          onClick={() => handleShowModal(null)}
        >
          X
        </div>
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
                <p key={worker.id} onClick={() => handleAddWorker(worker.name)}>
                  {worker.name}
                </p>
              ))
            : "Loading....."}
        </div>
        </div>
    </div>
  );
};
