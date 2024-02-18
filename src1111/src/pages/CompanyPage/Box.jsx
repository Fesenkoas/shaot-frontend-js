import React, { useState } from "react";
import { AddWorker } from "../../components/AddWorker";
import { BsCalendar2Plus, BsTrash3 } from "react-icons/bs";
import s from "../../css_module/box.module.css";

export const Box = ({ isActive, onBoxClick, day, load, indexKey }) => {
  const [showItems, setShowItems] = useState(false);

  const [indexD, setIndexD] = useState(null);

  const handleAddWorker = (index) => {
    setIndexD(index);
    setShowItems(!showItems);
  };

  return (
    <div
      className={`${isActive ? s.activeBox : s.inactiveBox}`}
      onClick={onBoxClick}
    >
      <div className={s.boxHeader}>
        <div className="flex items-center justify-between p-2 text-white font-bold">
          <div className="flex items-center justify-center">
            {isActive ? day.dayDate : day.dayDate.slice(-5)}
          </div>
          <div className={s.boxHeaderText}>
            {isActive ? day.dayName : day.dayName.slice(0, 2)}
          </div>
        </div>
      </div>
      {/* Modal Window With List Workers */}
      {showItems && (
        <AddWorker
          day={day}
          indexKey={indexKey}
          index={indexD}
          handleAddWorker={handleAddWorker}
        />
      )}

      <div className={s.shift}>
        {load &&
          day.shifts.map((shift, index) => (
            <div className="flex flex-row mt-2" key={index}>
              <div className={s.shiftTime}>
                <p>{isActive && shift.shiftStart.slice(0, 5)}</p>
              </div>

              <div className={s.workerNames}>
                {day.shifts[index].workerNames

                  .map((name, i) => (
                    <div className={s.workers} key={i}>
                      {isActive ? (
                        <>
                          <button onClick={() => handleAddWorker(index)}>
                          <BsTrash3 />
                          </button>
                          {name}
                        </>
                      ) : (
                        name.slice(0, 2)
                      )}
                    </div>
                  ))
                  .concat(
                    Array(
                      Math.max(
                        0,
                        day.shifts[index].workersNumber -
                          day.shifts[index].workerNames.length
                      )
                    )
                      .fill("פנוי ")
                      .map((placeholder, i) => (
                        <div
                          className={s.placeholder}
                          key={`placeholder_${i}`}
                        >
                          {isActive ? (
                            <>
                            <button onClick={() => handleAddWorker(index)}>
                            <BsCalendar2Plus/>
                            </button>
                            {placeholder}
                          </>
                          ) : (
                            <BsCalendar2Plus/>
                          )}
                        </div>
                      ))
                  )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
