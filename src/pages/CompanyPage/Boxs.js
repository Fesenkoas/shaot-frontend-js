import React, { useState } from "react";
import { Box } from "./Box";

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
          {[0, 1, 2, 3, 4, 5, 6].map((boxIndex) => (
            <Box key={boxIndex} onBoxClick={() => handleBoxClick(boxIndex)}  isActive={activeBox === boxIndex}/>
          ))}
        </div>
      </div>
    </div>
  );
};
