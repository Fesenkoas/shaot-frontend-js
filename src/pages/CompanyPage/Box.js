import React from "react";

export const Box = ({ isActive, onBoxClick, day }) => {
  return (
    <div
      className={`relative bg-white h-[430px] ${
        isActive ? "w-[310px]" : "w-[110px]"
      }`}
      onClick={onBoxClick}
    >
      <div
        className={`bg-[#99C2BD] rounded-t-md h-[50px] ${
          isActive ? "w-[310px]" : "w-[110px]"
        }`}
      >
        <div className=" text-white font-bold leading-5 whitespace-nowrap absolute top-[15px] left-[15px]">
          {day[0].dayName}
        </div>
      </div>

      <div className="flex flex-col w-full">
        {day.map((shift, index) => (
          <div className="flex flex-row mt-2  ">
            <div className="bg-[#99C2BD] h-[115px] w-[42px] flex items-center justify-center ">
              <p className=" text-white leading-6 whitespace-nowrap transform rotate-90">
                <span className="font-light">{shift.shiftStart}</span>
              </p>
            </div>
            <div className="flex flex-col w-full pl-4">
              {day[index].workerNames.map((name) => (
                <div className="flex flex-row mt-2 ">
                  {isActive ? name: name[0]+name[1]}
                  
                  </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
