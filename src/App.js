import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/AuthPage";
import CompanyPage from "./pages/CompanyPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  EmployeePage  from "./pages/EmployeePage";


const App = () => {
  // const [activeBox, setActiveBox] = useState(0);

  // const handleBoxClick = (boxIndex) => {
  //   console.log(activeBox);
  //   setActiveBox(activeBox === boxIndex ? null : boxIndex);
  // };
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthPage/>} />
        <Route path="/company/*" element={<CompanyPage/>} />
        <Route path="/worker/*" element={<EmployeePage />} />
      </Routes>
      <ToastContainer position="top-center" />
    </div>
  //   <div className="flex flex-col items-center justify-center min-h-screen">
  //   <h1 className="text-3xl font-bold mb-6">Боксы</h1>
  //   <div className="flex space-x-4">
  //     {[0, 1, 2, 3, 4, 5, 6].map((boxIndex) => (
  //       <div
  //         key={boxIndex}
  //         className={`border cursor-pointer ${
  //           activeBox === boxIndex ? 'w-[310px]' : 'w-[110px]'
  //         } h-[430px] p-4 transition-all transform ${
  //           activeBox === boxIndex ? 'scale-125 z-10' : 'z-0'
  //         }`}
  //         onClick={() => handleBoxClick(boxIndex)}
  //       >
  //         Бокс {boxIndex + 1}
  //       </div>
  //     ))}
  //   </div>
  // </div>
  );
};

export default App;
