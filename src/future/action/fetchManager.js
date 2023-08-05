import { loading, getCompanyById } from "../redux/managerSlice";

const baseURL = "https://shaotcloud.fly.dev/shaot";

const instanseGet = {
  method: "GET"
};

export const getCompanyByIdFetch = (id) => (dispatch) => {
  dispatch(loading(false));
  fetch(`${baseURL}/company/${id}`, instanseGet)
    .then((res) => res.json())
    .then((data) => dispatch(getCompanyById(data)));
};
