export const findEmployee = (employeeId) => {
    
    return (dispatch) => {
      findEmployee(employeeId)
         .then((response) => {
           dispatch({ type: "FIND_EMPLOYEE_SUCCESS", payload: response.data });
        })
         .catch((error) => {
         dispatch({ type: "FIND_EMPLOYEE_FAILURE", error });
       });
    };
  };