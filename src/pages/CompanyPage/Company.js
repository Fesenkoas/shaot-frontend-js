import React, { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { dayWeek } from "../../unit/variables";



export const Company = () => {
  const [count, setCount] = useState(1);
  const [table, setTable] = useState([]);
  const [start, setStart] = useState();
  const [end, SetEnd] = useState();
  const [selectedDays, setSelectedDays] = useState([]);
  const [workersNumber, setWorkersNumber] = useState(0);

  const clear = () => {
    setWorkersNumber(0);
    setStart("");
    SetEnd("");
  };
  const addTable = () => {
    const newItem = {
      start,
      end,
      workersNumberPerShift: workersNumber,
    };
    clear();
    setCount(count + 1);
    setTable((prevTable) => [...prevTable, newItem]);
  };
  const deleteTable = (key) => {
    const newArr = table.filter((items, index) => index !== key);
    setTable(newArr);
    setCount(count - 1);
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
        <div className=" p-4 m-1 overflow-y-auto h-96">
          <table className="border-separate border-spacing-x-7 border-spacing-y-10 ">
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
                  <td className="text-center">
                    <div className=" w-20 h-12 rounded-xl bg-[#E7EFEE] text-center text-2xl">
                      {key + 1}
                    </div>
                  </td>
                  <td className="text-center">
                    <input
                      type="text"
                      disabled
                      value={item.start}
                      className="border rounded-xl w-28 h-12 text-2xl text-center"
                    />
                  </td>
                  <td className="text-center">
                    <input
                      type="text"
                      disabled
                      value={item.end}
                      className="border text-center w-28 h-12 rounded-xl text-2xl"
                    />
                  </td>
                  <td className="text-center">
                    <div className="flex flex-row justify-center ">
                      <input
                        type="text"
                        disabled
                        value={item.workersNumberPerShift}
                        className="border rounded-xl text-center text-2xl w-14"
                      />
                    </div>
                  </td>
                  <td className="text-center text-2xl">
                    <button onClick={() => deleteTable(key)}>
                      <FaTrashCan />
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td className="text-center">
                  <div className=" w-20 h-12 rounded-xl bg-[#E7EFEE] text-center text-2xl">
                    {count}
                  </div>
                </td>
                <td className="text-center">
                  <input
                    type="text"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                    className="border rounded-xl w-28 h-12 text-2xl text-center"
                  />
                </td>
                <td className="text-center">
                  <input
                    type="text"
                    value={end}
                    onChange={(e) => SetEnd(e.target.value)}
                    className="border text-center w-28 h-12 rounded-xl text-2xl"
                  />
                </td>
                <td className="text-center">
                  <div className="flex flex-row justify-center ">
                    <button
                      onClick={(e) =>
                        setWorkersNumber(
                          workersNumber > 0 ? workersNumber - 1 : workersNumber
                        )
                      }
                      className="p-2 text-2xl"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={workersNumber}
                      onChange={(e) =>
                        setWorkersNumber(
                          e.target.value <= 10 ? e.target.value : workersNumber
                        )
                      }
                      className="border rounded-xl text-center text-2xl w-14"
                    />
                    <button
                      onClick={(e) =>
                        setWorkersNumber(
                          workersNumber < 10 ? workersNumber + 1 : workersNumber
                        )
                      }
                      className="p-2 text-2xl"
                    >
                      +
                    </button>
                  </div>
                </td>
              </tr>
              {/* ---------------- */}
              <tr>
                <td className=" w-20 h-12 rounded-xl bg-[#E7EFEE] text-center text-2xl">
                  <button onClick={() => addTable()}>+</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col basis-1/4 border justify-between p-4 m-1 ">
          <div className="p-4 m-2 bg-[#E7EFEE]">
            <>02</>
          </div>
          <div className=" p-4 m-2 bg-[#E7EFEE]">
            <h1 className=" text-center ">What are the working days?</h1>
            <div className="flex flex-row">
              {dayWeek.map((d, key) => (
                <div key={key} className="flex flex-col text-center">
                  {d.short}
                  <input
                    type="checkbox"
                    value={d.full}
                    checked={selectedDays.includes(d.full)}
                    onChange={handleCheckboxChange}
                    className=" w-10 h-10 m-1"
                  />
                </div>
              ))}
            </div>
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
