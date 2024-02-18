import React, { useEffect } from "react";
//import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const Login = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const isAuth = "true";
  //const dispatch = useDispatch();
  const { status } = "true";
  const navigate = useNavigate();

  const handleManager = () => {
    try {
      navigate("/company");
      // dispatch(loginUser({ username, password }));
    } catch (error) {
      console.log(error);
    }
  };
  const handleWorker = () => {
    try {
      navigate("/worker");
      // dispatch(loginUser({ username, password }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (status) toast(status);
    if (isAuth) navigate("/");
  }, [status, isAuth, navigate]);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <button
          onClick={handleManager}
          className="w-[380px] h-[80px] bg-[#99C2BD] mb-5 rounded-xl text-3xl font-bold text-white"
        >
          Login as Manager
        </button>

        <button
          // disabled
          onClick={handleWorker}
          className="w-[380px] h-[80px] bg-[#99C2BD] mb-5 rounded-xl text-3xl font-bold text-white"
        >
          Login as Worker
        </button>
      </div>
    </div>
    // <form
    //   onSubmit={(e) => e.preventDefault()}
    //   className="w-1/4 h-60 mx-auto mt-40"
    // >
    //   <h1 className="text-lg text-white text-center">LOGIN</h1>
    //   <label className="text-xs text-gray-400">
    //     Username:
    //     <input
    //       type="text"
    //       placeholder="username"
    //       onChange={(e) => setUsername(e.target.value)}
    //       value={username}
    //       className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
    //     />
    //   </label>
    //   <label className="text-xs text-gray-400">
    //     Password:
    //     <input
    //       type="password"
    //       placeholder="password"
    //       onChange={(e) => setPassword(e.target.value)}
    //       value={password}
    //       className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
    //     />
    //   </label>
    //   <div className="flex gap-8 justify-center mt-4">
    //     <button
    //       type="submit"
    //       onClick={heandleSubmit}
    //       className="flex justify-center items-center text-xs bg-gray-600 text-white rounded-sm py-w px-4"
    //     >
    //       Enter
    //     </button>
    //     <Link
    //       to={"/register"}
    //       className="flex justify-center items-center text-xs"
    //     >
    //       Registration ?
    //     </Link>
    //   </div>
    // </form>
  );
};
