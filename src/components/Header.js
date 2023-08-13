import React from "react";
import { Link, NavLink } from "react-router-dom";
//import { useSelector } from "react-redux";
//import { toast } from "react-toastify";
//import { checkIsAuth, logout } from "./../redux/future/auth/authSlice";
//import { useDispatch } from "react-redux";
import { Fade, IconButton, Menu, MenuItem } from "@mui/material";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";

export const Header = () => {
  const isAuth = true;
  //const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    //dispatch(logout());
    //toast('Logout');
  };
  return (
    <div className="flex  h-20 py-4 justify-between items-center bg-[#E7EFEE]">
      <span className="flex jutify-center text-xl   text-white font-extrabold  pl-[134px] py-2">
        <svg
          width="86"
          height="59"
          viewBox="0 0 86 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42.3944 54.4314C51.1847 49.5602 57.1353 40.1884 57.1353 29.4268C57.1353 18.6651 51.1847 9.29329 42.3944 4.42214C33.604 9.29329 27.6535 18.6651 27.6535 29.4268C27.6535 40.1884 33.6041 49.5602 42.3944 54.4314ZM38.6443 56.1665C29.9582 50.4453 24.2254 40.6055 24.2254 29.4268C24.2254 18.248 29.9582 8.40822 38.6443 2.68704C35.5106 1.50556 32.1146 0.859131 28.5676 0.859131C12.7902 0.859131 0 13.6493 0 29.4268C0 45.2042 12.7902 57.9944 28.5676 57.9944C32.1146 57.9944 35.5106 57.348 38.6443 56.1665Z"
            fill="#0A3745"
          />
          <circle cx="57" cy="30" r="25" stroke="#0A3745" stroke-width="8" />
        </svg>
      </span>

      <div className="flex jutify-center items-center text-2xl  px-4 py-2 mr-9 ">
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <div className="text-4xl">
            {open ? <FaBars /> : <FaBarsStaggered />}
          </div>
        </IconButton>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem>
            <NavLink
              className="w-80 h-11 rounded-md border-solid border-2 border-[#22aca3] text-2xl text-black text-center p-1"
              to={"/"}
            >
              Get Company By Id
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              className="w-80 h-11 rounded-md border-solid border-2 border-[#22aca3] text-2xl text-black text-center p-1"
              to={"/company"}
            >
              Add Company
            </NavLink>
          </MenuItem>
          <MenuItem>
            {isAuth ? (
              <Link
                className="w-80 h-11 rounded-md border-solid border-2 border-[#22aca3] text-2xl text-black text-center p-1"
                onClick={handleLogout}
                to={"/login"}
              >
                Logout
              </Link>
            ) : (
              <Link to={"/login"}>Login</Link>
            )}
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};
