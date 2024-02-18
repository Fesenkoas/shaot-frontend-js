import { getAllWorkers, loading } from "../redux/adminSlice";

const baseURL = "https://shaotcloud.fly.dev/shaot";

export const getAllWorkersFetch = () => (dispatch) => {
  dispatch(loading(false));
  fetch(`${baseURL}/workers`, { method: "GET" })
    .then((res) => res.json())
    .then((data) => dispatch(getAllWorkers(data)));
  //сделать проверку есть ли такие рабочиу вывод сообщения в мессадж
};

//проверка на ошибки ответов с сервера 1
// function handleErrors(response) {
//   if (!response.ok) {
//     if (response.status === 400) {
//       throw new Error('Bad Request: The request was invalid.');
//     } else if (response.status === 404) {
//       throw new Error('Not Found: The requested resource was not found.');
//     } else {
//       throw new Error('Network response was not ok');
//     }
//   }
//   return response;
// }

// fetch('https://api.example.com/data')
//   .then(handleErrors)
//   .then(response => response.json())
//   .then(data => {
//     // Обработка успешных результатов
//     console.log(data);
//   })
//   .catch(error => {
//     // Обработка ошибок
//     console.error('Fetch error:', error.message);
//   });

//проверка на ошибки ответов с сервера 2
// function handleFetchErrors(response) {
//   if (!response.ok) {
//     let errorMessage = 'Network response was not ok';

//     if (response.status === 400) {
//       errorMessage = 'Bad Request: The request was invalid.';
//     } else if (response.status === 404) {
//       errorMessage = 'Not Found: The requested resource was not found.';
//     } else if (response.status === 500) {
//       errorMessage = 'Internal Server Error: Something went wrong on the server.';
//     }

//     throw new Error(errorMessage);
//   }

//   return response.json();
// }

// function fetchEmployeeSchedule(id, comp, dispatch) {
//   const baseURL = "ваш_базовый_адрес"; // Замените на свой базовый адрес

//   fetch(`${baseURL}/worker/${id}/company/${comp}schedule`, { method: "GET" })
//     .then(handleFetchErrors)
//     .then((data) => {
//       console.log(data);
//       dispatch(getSchedule(data));
//     })
//     .catch((error) => {
//       console.error("Error fetching employee schedule:", error);
//       dispatch(loading(false));
//     });
// }

// // Использование функции
// fetchEmployeeSchedule('employeeId', 'companyId', dispatch);