import React, { useEffect, useState } from "react";
import { Box } from "./Box";
import { useDispatch} from "react-redux";
// import { useSelector } from "react-redux";
import { getCompanySchedule } from "../../future/action/fetchManager";
import { shift } from "../../unit/shift";
import { refresh, seting } from "../../unit/icons";
import { Link } from "react-router-dom";

export const Boxs = () => {
  const dispatch = useDispatch();
  const [activeBox, setActiveBox] = useState(0);
  //const { schedule, loading } = useSelector((state) => state.manager);
  const handleBoxClick = (boxIndex) => {
    setActiveBox(boxIndex);
  };
  useEffect(() => {
    dispatch(getCompanySchedule("1800"));
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center p-10">
      <div>
        <div className="flex justify-end">
          <Link to={"/company"} className="text-3xl pr-4">{seting}</Link>
        </div>

        <div className="flex space-x-4 m-4">
          {/* {loading && schedule.map((shift, index) => (
            <Box
              day={schedule}
              key={schedule}
              onBoxClick={() => handleBoxClick(index)}
              isActive={activeBox === index}
            />
          ))} */}
          {shift.map((shift, index) => (
            <Box
              day={shift}
              key={shift}
              onBoxClick={() => handleBoxClick(index)}
              isActive={activeBox === index}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <button className="h-16 w-[960px] bg-red-500 rounded-xl m-1 text-2xl">
        Сonfirm
        </button>
        <button className="h-16 w-52 bg-[#929293] rounded-xl m-1 flex items-center justify-center">
          {refresh}
          
        </button>
      </div>
      <div>
        
      </div>
    </div>
  );
};
