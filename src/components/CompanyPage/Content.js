import React, { useEffect } from "react";
import { Table } from "./Table";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyByIdFetch } from "../../future/action/fetchManager";

export function Content() {
  const { company, loading } = useSelector((state) => state.manager);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanyByIdFetch("1200"));
  }, [dispatch]);
  return (
    <div className="content flex flex-col">
      <div className="p-3 text-2xl">{company.name} workers</div>

      <div>
        <table className="m-5 ">
          <thead className="border-black border-solid border-2">
            <tr>
              <td className="h-4 w-10 border-black border-solid border-r-2 p-2">
                id
              </td>
              <td className="h-4 w-56 border-black border-solid border-r-2 p-2">
                Name
              </td>
              <td className="h-4 w-56 border-black border-solid border-r-2 p-2">
                Wage
              </td>

              <td className="h-4 w-20 p-2">Action</td>
            </tr>
          </thead>
          {loading &&
            company.workers.map((worker) => (
              <Table item={worker} key={worker.id} />
            ))}
        </table>
      </div>
    </div>
  );
}
