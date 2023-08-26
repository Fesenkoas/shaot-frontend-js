import React from "react";
import "./style.css";

export const Box = ({ isActive, onBoxClick }) => {
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
        <div className=" text-white font-bold leading-5 whitespace-nowrap absolute top-[15px] left-[20px]">
          ВТ
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex flex-row mt-2 border  ">
          <div className="bg-[#99C2BD] h-[115px] w-[42px] flex items-center justify-center ">
            <p className=" text-white leading-6 whitespace-nowrap transform rotate-90">
              <span className="font-bold">1 </span>
              <span className="font-light">смена</span>
            </p>
          </div>

          <div>1</div>
        </div>
        <div className="flex flex-row mt-2 border">
          <div className="bg-[#99C2BD] h-[115px] w-[42px] flex items-center justify-center ">
            <p className=" text-white leading-6 whitespace-nowrap transform rotate-90">
              <span className="font-bold">2 </span>
              <span className="font-light">смена</span>
            </p>
          </div>
          <div>1</div>
        </div>
        <div className="flex flex-row mt-2 border ">
          <div className="bg-[#99C2BD] h-[115px] w-[42px] flex items-center justify-center ">
            <p className=" text-white leading-6 whitespace-nowrap transform rotate-90">
              <span className="font-bold">3 </span>
              <span className="font-light">смена</span>
            </p>
          </div>
          <div>1</div>
        </div>
      </div>
    </div>
  );
};
