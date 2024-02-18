import React, { useEffect, useState } from "react";
import { BsCalendar2Plus, BsTrash3 } from "react-icons/bs";
import {
  getWeekConfigurate,
  putConfigurateSchedule,
} from "../../future/action/fetchManager";
import { useDispatch, useSelector } from "react-redux";
import { weekConfigurate } from "../../future/redux/managerSlice";
import { shift_v_2 } from "../../unit/shift";
import { Loading } from "../../components/Loading";
import { ID } from "../../unit/const";

export const Setting = () => {
  const dispatch = useDispatch();
  const { configurate, loading } = useSelector(
    (state) => state.manager
  );
  const [count, setCount] = useState(1);
  const [start, setStart] = useState(0);
  const [day, setDay] = useState(0);
  const [end, SetEnd] = useState(null);
  const [workersNumber, setWorkersNumber] = useState(null);

  const clear = () => {
    setWorkersNumber(0);
    setStart("");
    SetEnd("");
  };
  const addTable = () => {
    const newItem = {
      start: start + ":00:00",
      end: end + ":00:00",
      workersNumberPerShift: workersNumber,
    };
    const newArr = [...configurate.shiftsTime, newItem];
    console.log(newArr);
    newArr.sort((a, b) => parseInt(a.start) - parseInt(b.start));
    console.log(newArr);
    clear();
    setCount(count + 1);
    dispatch(weekConfigurate({ ...configurate, shiftsTime: newArr }));
  };

  const deleteTable = (key) => {
    const newArr = configurate.filter((items, index) => index !== key);

    dispatch(weekConfigurate(newArr));
    setCount(count - 1);
  };

  // const handleCheckboxDay = (key) => {
  
  // };

  // console.log(loading, configurate);

  const handleSave = () => {
    dispatch(putConfigurateSchedule(ID, configurate));
    dispatch(weekConfigurate(configurate));
  };

  useEffect(() => {
    dispatch(getWeekConfigurate(ID));
  }, [dispatch]);

  return (
    <>
      {!loading && <Loading />}
      <div className="flex flex-row justify-center pt-20">
        <div className=" p-4 m-1 overflow-y-auto h-[500px] border">
          <table className="border-separate border-spacing-x-7 border-spacing-y-8 ">
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

              {/* {configurate &&
                configurate.map((item, key) => ( */}
              {shift_v_2[day].shifts.map((item, key) => (
                <tr key={key}>
                  <td className="text-center">
                    <div className=" w-22 h-12 rounded-xl bg-[#E7EFEE] text-center text-2xl">
                      {key}
                    </div>
                  </td>
                  <td className="text-center">
                    <input
                      type="text"
                      disabled
                      value={item.shiftStart}
                      className="border rounded-xl w-28 h-12 text-2xl text-center"
                    />
                  </td>
                  <td className="text-center">
                    <input
                      type="text"
                      disabled
                      value={item.shiftEnd}
                      className="border text-center w-28 h-12 rounded-xl text-2xl"
                    />
                  </td>
                  <td className="text-center">
                    <div className="flex flex-row justify-center ">
                      <input
                        type="text"
                        disabled
                        value={item.workerNeeded}
                        className="border rounded-xl text-center text-2xl w-14"
                      />
                    </div>
                  </td>
                  <td className="text-center text-2xl">
                    <button onClick={() => deleteTable(key)}>
                      <BsTrash3 />
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td className="w-20 h-12 rounded-xl bg-[#E7EFEE] text-center text-2xl">
                  <button onClick={() => addTable()}>
                    <BsCalendar2Plus />
                  </button>
                </td>
                <td className="text-center">
                  <input
                    type="number"
                    min={0}
                    max={24}
                    value={start}
                    onChange={(e) =>
                      setStart(e.target.value <= 24 ? e.target.value : start)
                    }
                    className="border rounded-xl w-28 h-12 text-2xl text-center"
                  />
                </td>
                <td className="text-center">
                  <input
                    type="number"
                    value={end}
                    onChange={(e) =>
                      SetEnd(e.target.value <= 24 ? e.target.value : end)
                    }
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
                      type="number"
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
            </tbody>
          </table>
        </div>
        {/* правый блок */}
        <div className="flex flex-col bg-white justify-between p-4 m-1 border">

          {shift_v_2.map((item, key) => (
            <button className=" w-40 h-12 rounded-xl bg-[#E7EFEE] text-center text-2xl"  onClick={ () => setDay(key)}>
              {item.dayName}
            </button>
          ))}
        </div>
      </div>
      {/* ------------ */}
      <div className="flex flex-row p-4 m-1 justify-center text-white text-center text-2xl">
        <button
          className="w-40 h-12 rounded-xl  m-1   bg-[#99C2BD] hover:bg-[#0A3D45]"
          onClick={handleSave}
        >
          Save
        </button>
        <button className="w-40 h-12 rounded-xl  m-1 bg-[#99C2BD] hover:bg-[#0A3745]">
          Clear
        </button>
      </div>
    </>
  );
};
