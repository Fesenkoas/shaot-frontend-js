import React from "react";


export const Box = ({ isActive, onBoxClick, day, load }) => {
 
  return (
    <div
      className={`relative bg-white h-[430px] border border-[#1F8A83] rounded-md ${
        isActive ? "w-[410px]" : "w-[110px]"
      }`}
      onClick={onBoxClick}
    >
      <div
        className={`bg-[#1F8A83] rounded-t-md h-14 ${
          isActive ? "w-[410px]" : "w-[110px]"
        }`}
      >
        <div className="flex items-center justify-between p-2 text-white font-bold">
        <div className="flex items-center justify-center">
          {isActive ? day.dayDate : day.dayDate.slice(-5)}
        </div>
        <div className="flex items-center justify-center ">
          {isActive ? day.dayName : day.dayName.slice(0,2)}
        </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        {load && day.shifts.map((shift, index) => (
          <div className="flex flex-row mt-2" key={index}>
            <div className="bg-[#99C2BD] h-[115px] w-[42px] flex items-center justify-center rounded-r-md">
              <p className=" text-white leading-6 whitespace-nowrap transform rotate-90">
                <span className="font-light">{isActive && shift.shiftStart}</span>
              </p>
            </div>
            <div className="flex flex-col w-full pl-4">
              {/* {day.shifts[index].workerNames.length===0? "add":"+"} */}
              {day.shifts[index].workerNames.map((name) => (
                <div className="flex flex-row mt-2 ">
                  {isActive ? name: name.slice(0,2)}
                  
                  </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
