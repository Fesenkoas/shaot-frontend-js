import React from "react";
import { BsTrash, BsPencilSquare } from "react-icons/bs";
//import { useDispatch } from "react-redux";
//import { deleteItem } from "../../redux/action/itemsSlice";

export const Table = ({ item }) => {
  //const dispatch = useDispatch();

  const handleUpdate = () => {
      console.log("update" + item.id);
  };
  const handleDelete = () => {
    try {
      console.log("delete" + item.id);
     // dispatch(deleteItem({id:item._id}));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <tbody className="hover:bg-sky-200">
      <tr className="border-black border-solid border-2">
        <td className=" border-black border-solid border-r-2 p-2">{item.id}</td>
        <td className=" border-black border-solid border-r-2 p-2">
          {item.name}
        </td>
        <td className=" border-black border-solid border-r-2 p-2">
          {item.wage}
        </td>
        <td className=" p-5 flex flex-row">
          <BsTrash onClick={handleDelete} />{" "}
          <BsPencilSquare onClick={handleUpdate} />
        </td>
      </tr>
    </tbody>
  );
};
