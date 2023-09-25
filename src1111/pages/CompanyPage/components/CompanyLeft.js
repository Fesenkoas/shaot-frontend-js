import React from 'react'

export const CompanyLeft = ({employee}) => {
  return (
    <div class="basis-1/2 w-[70%] h-[%] bg-[#E7EFEE] m-3 rounded-xl">
    <div class="flex flex-row ">
      <div class="row-span-2 pl-10 pt-5  w-[50%]">
        <p className="text-[#99C2BD] text-lg ">Employee Information</p>
        <p className="text-[#99C2BD] text-3xl font-bold pt-8 ">
          {employee.name}
        </p>
        <p className="text-[#99C2BD] text-base pt-3">{employee.id}</p>
        <p className="text-[#99C2BD] text-lg pt-10">Contact:</p>
        <p className="text-black text-xl pt-2">053 924 0009</p>
        <p className="text-black text-xl pt-1">
          designerfesenko@gmail.com
        </p>
        <p className="text-black text-lg font-bold pt-10">
          Wage per hour: <input type="text" className="border border-black w-14 h-10 text-center text-xl" value={"35"}/>
        </p>
        
      </div>
      <div class="row-span-2">03</div>
    </div>
  </div>
  )
}
