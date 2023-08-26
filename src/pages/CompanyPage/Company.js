import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduxManager } from "../../future/redux/managerSlice";
import { getCompanyByIdFetch } from "../../future/action/fetchManager";
import { toast } from "react-toastify";
import { getMessage } from "../../future/redux/messageSlice";
import { Worker } from "../../components/Worker";

export const Company = () => {
  const { loading, company } = useSelector(reduxManager);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  if (message) {
    toast(message);
    dispatch(getMessage(""));
  }
  useEffect(() => {
    dispatch(getCompanyByIdFetch("1700"));
  }, [dispatch]);

  return (
      <Worker company={company.workers} loading={loading} />
  );
};
