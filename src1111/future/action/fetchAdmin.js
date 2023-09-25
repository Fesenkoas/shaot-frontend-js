import { getAllWorkers, loading } from "../redux/adminSlice";

const baseURL = "https://shaotcloud.fly.dev/shaot";

export const getAllWorkersFetch = () => (dispatch) => {
  dispatch(loading(false));
  fetch(`${baseURL}/workers`, { method: "GET" })
    .then((res) => res.json())
    .then((data) => dispatch(getAllWorkers(data)));
  //сделать проверку есть ли такие рабочиу вывод сообщения в мессадж
};
