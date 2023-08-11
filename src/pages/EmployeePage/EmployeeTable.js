import React from "react";
import { BsTrash, BsPencilSquare } from "react-icons/bs";
import { useDispatch } from "react-redux";
//import { deleteItem } from "../../redux/action/itemsSlice";

export const EmployeeTable = ({ employee }) => {
  const dispatch = useDispatch();

  const handleUpdate = () => {
    console.log("update " + employee.id);
  };
  
  const handleDelete = () => {
    try {
      console.log("delete " + employee.id);
      // dispatch(deleteItem({id: employee._id}));
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <tr className="border-b border-gray-300 hover:bg-gray-100">
      <td className="py-2 px-4 border-r">{employee.id}</td>
      <td className="py-2 px-4 border-r">{employee.name}</td>
      <td className="py-2 px-4 border-r">{employee.wage}</td>
      <td className="py-2 px-4 flex space-x-2">
        <BsTrash onClick={handleDelete} className="cursor-pointer text-red-600" />
        <BsPencilSquare onClick={handleUpdate} className="cursor-pointer text-blue-600" />
      </td>
    </tr>
  );
};
