import { loading, getCompanyById } from "../redux/managerSlice";

const baseURL = "https://shaotcloud.fly.dev/shaot";

// const instanseGet = {
//   method: "GET"
// };

export const getCompanyByIdFetch = (id) => (dispatch) => {
  dispatch(loading(false));
  fetch(`${baseURL}company/${id}`, {method: "GET"})
    .then((res) => res.json())
    .then((data) => dispatch(getCompanyById(data)));
};

export const addNewCompany = (newData) => (dispatch) =>{
  dispatch(loading(false));
  fetch(`${baseURL}/company`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json', // Указываем, что отправляем JSON
    },
    body: JSON.stringify(newData), // Преобразуем объект в JSON
  })
  .then(response => response.json())
  .then(data => {
    // Обрабатываем ответ от сервера
    if(data.status == 500)
    console.log(data);
  })
}