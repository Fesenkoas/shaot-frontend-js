import React, { useEffect, useState } from "react";
import { Box } from "./Box";
import { refresh } from "../../unit/icons";
import { getEmployeeSchedule } from "../../future/action/fetchEmployee";
import { useDispatch, useSelector } from "react-redux";
import { employeeShift } from "../../unit/shift";

export const Shifts = () => {
  const[schedule,setSchedule] = useState(employeeShift)
  // const { schedule, loading } = useSelector((state) => state.employee);
  const dispatch = useDispatch();

const handlePush = () =>{
  const newShifts = schedule.map((day) => {
    const { dayDate, shifts } = day;
    const newDay = {
      dayName: dayDate,
      shifts: shifts.map((shift) => (shift.change !== 0 ? shift.shiftTime : null)).filter(Boolean),
    };
    return newDay;
  });
  
  console.log(newShifts);
}
  useEffect(() => {
    dispatch(getEmployeeSchedule(1, 1800));
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center m-12">
      {/* {!loading && <Loading />} */}
      <div>
        <div className="flex justify-end">
          <div className="flex-col text-right">
            <p className="text-xl font-bold">
              תבדוק את המשמרות שאתה לא יכול לעבוד
            </p>
            <p className="text-xl ">אם אין כאלה, לחץ על הלחצן שלח תוכנית</p>
          </div>
        </div>

        <div className="flex space-x-4 m-4">
          {schedule.map((shift, index) => {
            return (
              <Box
              setSchedule={setSchedule}
              schedule={schedule}
                day={shift}
                indexKey={index}
                key={index}
                
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <button
          className="h-16 w-[950px] bg-red-500 rounded-xl m-1 text-2xl"
           onClick={() => handlePush()}
        >
          מוכן
        </button>
        <button className="h-16 w-52 bg-[#929293] rounded-xl m-1 flex items-center justify-center">
          {refresh}
        </button>
      </div>
      {/* <WeekNames /> */}
    </div>
  );
};
