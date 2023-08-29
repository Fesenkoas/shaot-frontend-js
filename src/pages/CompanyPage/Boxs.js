import React, { useState } from "react";
import { Box } from "./Box";
import { shift } from "../../unit/shift";

export const Boxs = () => {
  const [activeBox, setActiveBox] = useState(0);

  const handleBoxClick = (boxIndex) => {
    setActiveBox(boxIndex);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="border w-[1100px] h-[499px] relative bg-[#E7EFEE]">
        <h1 className="text-3xl font-bold ml-4 mt-1">Week</h1>
        <div className="flex space-x-4 m-4">
          {shift.map((shift, index) => (
            <Box
              day={shift.day}
              key={shift.day}
              onBoxClick={() => handleBoxClick(index)}
              isActive={activeBox === index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
