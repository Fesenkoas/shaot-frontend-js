import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPutWeekNames, fetchWeekNames } from "../future/action/fetchManager";
import { ID } from "../unit/const";


export const WeekNames = () => {
  const dispatch = useDispatch();
  const { weekNames, loading } = useSelector((state) => state.manager);

  const handlGetWeek = (period) => {
    const data ={
      period
    }

    dispatch(fetchPutWeekNames(ID, data))
  };
  useEffect(() => {
    dispatch(fetchWeekNames(ID));
  }, [dispatch]);
  return (
    <div className="flex flex-row">
      {loading &&
        weekNames.map((name) => (
          <button
            className="flex justify-center w-[208px] h-[70px] bg-[#D9DCE4] rounded-xl mt-10 m-4 items-center "
            key={name}
            onClick={()=>handlGetWeek(name)}
          >
            {name}
          </button>
        ))}
    </div>
  );
};
