// import {getUsers} from "../redux/userSlice";
import { loading, getEmployeeById } from "../redux/employeeSlice";
import { getMessage } from "../redux/messageSlice";

const baseURL = "https://shaotcloud.fly.dev/shaot";

export const getEmployeeByIdFetch = (id) => (dispatch) => {
  dispatch(loading(false));
  fetch(`${baseURL}/employee/${id}`, { method: "GET" })
    .then((res) => res.json())
    .then((data) => dispatch(getEmployeeById(data)));
};

export const postNewEmployee = (newData) => (dispatch) => {
  dispatch(loading(false));
  fetch(`${baseURL}/employee`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newData),
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
};

export const putEmployeeCompany = (companyId, employeeId) => (dispatch) => {
  dispatch(loading(false));
  fetch(`${baseURL}/company/${companyId}/worker/${employeeId}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .then(data => dispatch(getMessage(data.message)));
};

export const getEmployeeSchedule = (id) => (dispatch) => {
  dispatch(loading(false));
  fetch(`${baseURL}/employee/${id}/schedule`, { method: "GET" })
    .then((res) => res.json())
    .then((data) => dispatch(getEmployeeById(data)));
};

export const deleteEmployeeFromCompany = (companyId, employeeId) => (dispatch) => {
  fetch(`${baseURL}/company/${companyId}/worker/${employeeId}`, { method: "DELETE" })
  .then((response) => response.json())
  .then(data => {
    console.log(data);
  });
};
