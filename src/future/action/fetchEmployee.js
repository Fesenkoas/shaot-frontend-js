import { getSchedule, loading } from "../redux/employeeSlice";

const baseURL = "https://shaotcloud.fly.dev/shaot";

// export const getEmployeeByIdFetch = (id) => (dispatch) => {
//   dispatch(setLoading(true)); 
//   fetch(`${baseURL}/employee/${id}`, { method: "GET" })
//     .then((res) => res.json())
//     .then((data) => {
//       dispatch(getEmployeeById(data));
//       dispatch(setLoading(false)); 
//     })
//     .catch((error) => {
//       console.error("Error fetching employee data:", error);
//       dispatch(setLoading(false)); 
//     });
// };

// export const postNewEmployee = (newData) => (dispatch) => {
//   dispatch(setLoading(true)); 
//   fetch(`${baseURL}/employee`, {
//     method: "POST",
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newData),
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     dispatch(setLoading(false)); 
//   })
//   .catch((error) => {
//     console.error("Error posting new employee:", error);
//     dispatch(setLoading(false)); 
//   });
// };

// export const putEmployeeCompany = (companyId, employeeId) => (dispatch) => {
//   dispatch(setLoading(true)); 
//   fetch(`${baseURL}/company/${companyId}/worker/${employeeId}`, {
//     method: "PUT",
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//   .then(response => response.json())
//   .then(data => {
//     // dispatch(getMessage(data.message));
//     dispatch(setLoading(false)); 
//   })
//   .catch((error) => {
//     console.error("Error updating employee company:", error);
//     dispatch(setLoading(false)); 
//   });
// };

export const getEmployeeSchedule = (id, comp) => (dispatch) => {
  dispatch(loading(true)); 
  fetch(`${baseURL}/worker/${id}/company/${comp}schedule`, { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
       dispatch(getSchedule(data));
    })
    .catch((error) => {
      console.error("Error fetching employee schedule:", error);
      dispatch(loading(false)); 
    });
};

// export const deleteEmployeeFromCompany = (companyId, employeeId) => (dispatch) => {
//   fetch(`${baseURL}/company/${companyId}/worker/${employeeId}`, { method: "DELETE" })
//   .then((response) => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Error deleting employee from company:", error);
//   });
// };
