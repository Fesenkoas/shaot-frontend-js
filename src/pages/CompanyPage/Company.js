import React, { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";

// {
//   "weekStart": "2023-08-27",
//   "weekEnd": "2023-09-02",
//   "shiftsTime": [
//       {
//           "start": "07:00:00",
//           "end": "15:00:00",
//           "workersNumberPerShift": 3
//       },
//       {
//           "start": "15:00:00",
//           "end": "23:00:00",
//           "workersNumberPerShift": 3
//       },
//       {
//           "start": "23:00:00",
//           "end": "07:00:00",
//           "workersNumberPerShift": 3
//       }
//   ]
// }

export const Company = () => {
  const [count, setCount] = useState(0);
  const [table, setTable] = useState([]);
  console.log(table);
  const addTable = () => {
    setTable((prevTable) => [...prevTable, +1]);
  };
  const deleteTable = (key) => {
    const newArr = table.filter((items, index) => index !== key);
    setTable(newArr);
  };
  return (
    <div className="flex flex-row m-auto justify-center">
      <div className="basis-1/2 p-4 m-1 ">
        <table className="border-separate border-spacing-x-16 border-spacing-y-10 ">
          <thead>
            <tr>
              <th className=" w-20 h-12 rounded-xl bg-[#E7EFEE]">Shifts</th>
              <th className=" w-40 h-12 rounded-xl bg-[#E7EFEE]">From</th>
              <th className=" w-40 h-12 rounded-xl bg-[#E7EFEE]">To</th>
              <th className=" w-40 h-12 rounded-xl bg-[#E7EFEE]">
                Number of Employees
              </th>
              <th className=" w-20 h-12"></th>
            </tr>
          </thead>
          <tbody>
            {/* block for map */}
            {table.map((item, key) => (
              <tr>
                <td className=" w-20 h-12 rounded-xl bg-[#E7EFEE] text-center text-2xl">
                  1
                </td>
                <td className="border rounded-xl text-center text-2xl">7:00</td>
                <td className="border rounded-xl text-center text-2xl">
                  15:00
                </td>
                <td>
                  <div className="flex flex-row justify-center ">
                    <button
                      onClick={(e) => setCount(count > 0 ? count - 1 : count)}
                      className="p-2 text-2xl"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={count}
                      onChange={(e) =>
                        setCount(e.target.value <= 10 ? e.target.value : count)
                      }
                      className="border rounded-xl text-center text-2xl w-14"
                    />
                    <button
                      onClick={(e) => setCount(count < 10 ? count + 1 : count)}
                      className="p-2 text-2xl"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="text-center text-2xl">
                  <button onClick={() => deleteTable(key)}>
                    <FaTrashCan />
                  </button>
                </td>
              </tr>
            ))}
            {/* ---------------- */}
            <tr>
              <td className=" w-20 h-12 rounded-xl bg-[#E7EFEE] text-center text-2xl">
                <button onClick={() => addTable()}>+</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="basis-1/4 border  bg-[#E7EFEE] p-4 m-1 ">02</div>
    </div>
  );
};
