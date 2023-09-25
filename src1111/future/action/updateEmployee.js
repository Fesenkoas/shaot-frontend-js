import { setLoading, setMessage } from "./employeeSlice";

const baseURL = "https://shaotcloud.fly.dev/shaot";

export const updateEmployee = (id, updatedData) => (dispatch) => {
  dispatch(setLoading(true)); 
  fetch(`${baseURL}/employee/${id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  })
  .then(response => response.json())
  .then(data => {
    dispatch(setMessage(data.message)); 
    dispatch(setLoading(false));
  })
  .catch((error) => {
    console.error("Error updating employee:", error);
    dispatch(setLoading(false)); 
  });
};

export const findEmployee = (id) => (dispatch) => {
  dispatch(setLoading(true)); 
  fetch(`${baseURL}/employee/${id}`, { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
      dispatch(setLoading(false)); 
      return data; 
    })
    .catch((error) => {
      console.error("Error finding employee:", error);
      dispatch(setLoading(false));
    });
};
