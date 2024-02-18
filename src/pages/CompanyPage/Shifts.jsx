import React, { useEffect, useState } from "react";
import { Box } from "./Box";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPostSaveSchedule,
  getCompanySchedule,
} from "../../future/action/fetchManager";
import { refresh, seting } from "../../unit/icons";
import { Link } from "react-router-dom";
import { WeekNames } from "../../components/WeekNames";
import { Loading } from "../../components/Loading";
import { ID } from "../../unit/const";

export const Shifts = () => {
  const dispatch = useDispatch();
  const [activeBox, setActiveBox] = useState(0);
  const { schedule, loading } = useSelector((state) => state.manager);

  const handleBoxClick = (boxIndex) => {
    setActiveBox(boxIndex);
  };

  const handleConfigWeek = () => {
   
    dispatch(fetchPostSaveSchedule(ID, schedule));
  };

  useEffect(() => {
    dispatch(getCompanySchedule(ID));
  }, [dispatch]);

  return (
    
    <div className="flex flex-col items-center m-12">
      {!loading && <Loading />}
      <div>
        <div className="flex justify-end">
          <Link to={"/company/setting"} className="text-3xl pr-4">
            {seting}
          </Link>
        </div>

        <div className="flex space-x-4 m-4">
          {
            schedule
              .map((shift, index) => {
                const reversedIndex = index;
                return (
                    <Box
                      load={loading}
                      day={shift}
                      indexKey={reversedIndex}
                      key={reversedIndex}
                      onBoxClick={() => handleBoxClick(index)}
                      isActive={activeBox === index}
                    />
                );
              })}
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <button
          className="h-16 w-[950px] bg-red-500 rounded-xl m-1 text-2xl"
          onClick={() => handleConfigWeek()}
        >
          מוכן
        </button>
        <button className="h-16 w-52 bg-[#929293] rounded-xl m-1 flex items-center justify-center">
          {refresh}
        </button>
      </div>
      <WeekNames />
    </div>
  );
};
