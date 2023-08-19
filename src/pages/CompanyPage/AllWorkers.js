import React, { useEffect } from "react";
import { Worker } from "../../components/Worker";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getMessage } from "../../future/redux/messageSlice";
import { getAllWorkersFetch } from "../../future/action/fetchAdmin";

export const AllWorkers = () => {
  const { workers, loading } = useSelector((state) => state.admin);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  if (message) {
    toast(message);
    dispatch(getMessage(""));
  }

  useEffect(() => {
    dispatch(getAllWorkersFetch());
  }, [dispatch]);
  return (
    <>
      <Worker company={workers} loading={loading} />
    </>
  );
};
