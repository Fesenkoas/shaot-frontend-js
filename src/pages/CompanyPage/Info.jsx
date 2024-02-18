import React, { useEffect } from "react";
import { Worker } from "../../components/Worker";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getMessage } from "../../future/redux/messageSlice";
import { getAllWorkersFetch } from "../../future/action/fetchAdmin";
import { Loading } from "../../components/Loading";

export const Info = () => {
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
    {!loading && <Loading />}
      <Worker company={workers} loading={loading} />
    </>
  );
};
