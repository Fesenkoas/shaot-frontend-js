import React, { useState } from "react";
import s from "../../css_module/employeeBox.module.css";
import { iconNo, iconYes } from "../../unit/icons";

export const Box = ({ day,setSchedule,schedule,indexKey }) => {
  const [change, setChange] = useState(true);

  const handleChange = (i) => {
    const deleteWorkerNames = structuredClone(schedule);
    deleteWorkerNames[indexKey].shifts[i].change ===1?deleteWorkerNames[indexKey].shifts[i].change = 0:deleteWorkerNames[indexKey].shifts[i].change = 1;
    setSchedule(deleteWorkerNames)
    setChange(!change);
  };

  return (
    <div className={s.inactiveBox}>
      <div className={s.boxHeader}>
        <div className="flex items-center justify-between p-2 text-white font-bold">
          <div className="flex items-center justify-center">
            {day.dayDate.slice(-5)}
          </div>
          <div className={s.boxHeaderText}>
            {day.dayName.slice(0, 2)}
          </div>
        </div>
      </div>

      <div className={s.shift}>
        {day.shifts.map((shift, index) => (
          <div className="flex flex-row mt-2" key={index}>
            <div className={s.shiftTime}>
              <p>{shift.shiftTime.slice(0, 5)}</p>
            </div>
            <div className={s.workerChange} onClick={() => handleChange(index)}>
                {shift.change? iconYes:iconNo}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
