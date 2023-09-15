import React from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { checkIsAuth } from "./../future/redux/authSlice";
import { calendar, home, logo } from "../unit/icons";


export const Header = () => {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const isAuth = useSelector(checkIsAuth);
  // //const dispatch = useDispatch();
  // const handleLogout = () => {
  //   //dispatch(logout());
  //   //toast('Logout');
  // };
  return (
    <header className="bg-[#E7EFEE]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6"
        aria-label="Global"
      >
        <div >
          <Link to={"/"} >
            {logo}
          </Link>
        </div>
        <div >
          <Link to={"/company/new"} >
          {calendar}
          </Link>
        </div>
        
        <div className="text-2xl">
          <Link to={"/workers"} >
          {home}
          </Link>
        </div>
      </nav>
    </header>
  );
};
