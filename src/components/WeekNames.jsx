import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPutWeekNames, fetchWeekNames } from "../future/action/fetchManager";


export const WeekNames = () => {
  const dispatch = useDispatch();
  const { weekNames, loading } = useSelector((state) => state.manager);

  const handlGetWeek = (period) => {
    const data ={
      period
    }

    dispatch(fetchPutWeekNames(1800, data))
  };
  useEffect(() => {
    dispatch(fetchWeekNames(1800));
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
