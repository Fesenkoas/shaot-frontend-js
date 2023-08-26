import React from "react";
import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { checkIsAuth } from "./../future/redux/authSlice";

//сделать в отдельном фаиле
const navigation = [
  { name: "Company", href: "/company" },
  { name: "Workers", href: "/company/workers" },
  { name: "Week", href: "/company/new" },
  
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAuth = useSelector(checkIsAuth);
  //const dispatch = useDispatch();
  const handleLogout = () => {
    //dispatch(logout());
    //toast('Logout');
  };
  return (
    <header className="bg-[#E7EFEE]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to={"/"} className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>

            <svg
              width="86"
              height="59"
              viewBox="0 0 86 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M42.3944 54.4314C51.1847 49.5602 57.1353 40.1884 57.1353 29.4268C57.1353 18.6651 51.1847 9.29329 42.3944 4.42214C33.604 9.29329 27.6535 18.6651 27.6535 29.4268C27.6535 40.1884 33.6041 49.5602 42.3944 54.4314ZM38.6443 56.1665C29.9582 50.4453 24.2254 40.6055 24.2254 29.4268C24.2254 18.248 29.9582 8.40822 38.6443 2.68704C35.5106 1.50556 32.1146 0.859131 28.5676 0.859131C12.7902 0.859131 0 13.6493 0 29.4268C0 45.2042 12.7902 57.9944 28.5676 57.9944C32.1146 57.9944 35.5106 57.348 38.6443 56.1665Z"
                fill="#0A3745"
              />
              <circle cx="57" cy="30" r="25" stroke="#0A3745" strokeWidth="8" />
            </svg>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {isAuth ? (
            <>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
            </>
          ) : (
            <></>
          )}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {isAuth ? (
            <>
              <Link
                className="text-sm font-semibold leading-6 text-gray-900"
                onClick={handleLogout}
                to={"/"}
              >
                Log out <span aria-hidden="true">&rarr;</span>
              </Link>
            </>
          ) : (
            <Link
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={handleLogout}
              to={"/"}
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>

              <svg
                width="86"
                height="59"
                viewBox="0 0 86 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M42.3944 54.4314C51.1847 49.5602 57.1353 40.1884 57.1353 29.4268C57.1353 18.6651 51.1847 9.29329 42.3944 4.42214C33.604 9.29329 27.6535 18.6651 27.6535 29.4268C27.6535 40.1884 33.6041 49.5602 42.3944 54.4314ZM38.6443 56.1665C29.9582 50.4453 24.2254 40.6055 24.2254 29.4268C24.2254 18.248 29.9582 8.40822 38.6443 2.68704C35.5106 1.50556 32.1146 0.859131 28.5676 0.859131C12.7902 0.859131 0 13.6493 0 29.4268C0 45.2042 12.7902 57.9944 28.5676 57.9944C32.1146 57.9944 35.5106 57.348 38.6443 56.1665Z"
                  fill="#0A3745"
                />
                <circle
                  cx="57"
                  cy="30"
                  r="25"
                  stroke="#0A3745"
                  strokeWidth="8"
                />
              </svg>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {isAuth ? (
                  <>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="py-6">
                {isAuth ? (
                  <Link
                    className="text-sm font-semibold leading-6 text-gray-900"
                    onClick={handleLogout}
                    to={"/"}
                  >
                    Log out <span aria-hidden="true">&rarr;</span>
                  </Link>
                ) : (
                  <Link
                    className="text-sm font-semibold leading-6 text-gray-900"
                    onClick={handleLogout}
                    to={"/"}
                  >
                    Log in <span aria-hidden="true">&rarr;</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
