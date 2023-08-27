import React, { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";

// const day = {
//   weekStart: "2023-08-27",
//   weekEnd: "2023-09-02",
//   shiftsTime: [
//     {
//       start: "07:00:00",
//       end: "15:00:00",
//       workersNumberPerShift: 3,
//     },
//     {
//       start: "15:00:00",
//       end: "23:00:00",
//       workersNumberPerShift: 3,
//     },
//     {
//       start: "23:00:00",
//       end: "07:00:00",
//       workersNumberPerShift: 3,
//     },
//   ],
//   workDays: [
//     "monday",
//   ],
// };

export const Company = () => {
  const [count, setCount] = useState(3);
  const [table, setTable] = useState([0]);
  const [start, setStart] = useState("7:00");
  const [end, SetEnd] = useState("15:00");
  const [selectedDays, setSelectedDays] = useState([]);
  console.log(table);
  const addTable = () => {
    setTable((prevTable) => [...prevTable, +1]);
  };
  const deleteTable = (key) => {
    const newArr = table.filter((items, index) => index !== key);
    setTable(newArr);
  };

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (selectedDays.includes(value)) {
      setSelectedDays(selectedDays.filter((day) => day !== value));
    } else {
      setSelectedDays([...selectedDays, value]);
    }
  };
  return (
    <>
      <div className="flex flex-row justify-center">
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
                    {key + 1}
                  </td>
                  <td className="border rounded-xl ">
                    <input
                      type="text"
                      value={start}
                      onChange={(e) => setStart(e.target.value)}
                      className="text-center w-32 h-12 rounded-xl text-2xl"
                    />
                  </td>
                  <td className="border rounded-xl">
                    <input
                      type="text"
                      value={end}
                      onChange={(e) => SetEnd(e.target.value)}
                      className="text-center w-32 h-12 rounded-xl text-2xl"
                    />
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
                        value={count}
                        onChange={(e) =>
                          setCount(
                            e.target.value <= 10 ? e.target.value : count
                          )
                        }
                        className="border rounded-xl text-center text-2xl w-14"
                      />
                      <button
                        onClick={(e) =>
                          setCount(count < 10 ? count + 1 : count)
                        }
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
      <div className="flex flex-row justify-evenly ">
        <div className="basis-1/2 p-4 m-2 bg-[#E7EFEE]">01</div>
        <div className=" flex flex-row basis-1/4 p-4 m-2 bg-[#E7EFEE]">
          <div className="flex flex-col text-center">
            Mon
            <input
              type="checkbox"
              value="monday"
              checked={selectedDays.includes("monday")}
              onChange={handleCheckboxChange}
              className="w-10 h-10 m-1"
            />
          </div>
          <div className="flex flex-col text-center">
            Tu
            <input
              type="checkbox"
              value="tuesday"
              checked={selectedDays.includes("tuesday")}
              onChange={handleCheckboxChange}
              className="w-10 h-10 m-1"
            />
          </div>
          <div className="flex flex-col text-center">
            Wed
            <input
              type="checkbox"
              value="wednesday"
              checked={selectedDays.includes("wednesday")}
              onChange={handleCheckboxChange}
              className="w-10 h-10 m-1"
            />
          </div>
          <div className="flex flex-col text-center">
            Thu
            <input
              type="checkbox"
              value="thursday"
              checked={selectedDays.includes("thursday")}
              onChange={handleCheckboxChange}
              className="w-10 h-10 m-1"
            />
          </div>
          <div className="flex flex-col text-center">
            Fri
            <input
              type="checkbox"
              value="friday"
              checked={selectedDays.includes("friday")}
              onChange={handleCheckboxChange}
              className="w-10 h-10 m-1"
            />
          </div>
          <div className="flex flex-col text-center">
            Sat
            <input
              type="checkbox"
              value="saturday"
              checked={selectedDays.includes("saturday")}
              onChange={handleCheckboxChange}
              className="w-10 h-10 m-1"
            />
          </div>
          <div className="flex flex-col text-center">
            Sun
            <input
              type="checkbox"
              value="sunday"
              checked={selectedDays.includes("sunday")}
              onChange={handleCheckboxChange}
              className="w-10 h-10 m-1"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row p-4 m-1 justify-center text-white text-center text-2xl">
        <button className="w-40 h-12 rounded-xl  m-1   bg-[#99C2BD]">
          Save
        </button>
        <button className="w-40 h-12 rounded-xl  m-1  bg-[#0A3745]">
          Clear
        </button>
      </div>
    </>
  );
};
