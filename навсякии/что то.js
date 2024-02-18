{/* <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#99C2BD] to-[#22ACA3] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="container mx-auto">
        <div className="relative isolate px-6 pt-14 lg:px-8"> 

         </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#99C2BD] to-[#22ACA3] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>  */}

      
    //   <Dialog
    //   as="div"
    //   className="lg:hidden"
    //   open={mobileMenuOpen}
    //   onClose={setMobileMenuOpen}
    // >
    //   <div className="fixed inset-0 z-10" />
    //   <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
    //     <div className="flex items-center justify-between">
    //       <Link href="#" className="-m-1.5 p-1.5">
    //         <span className="sr-only">Your Company</span>

    //         <svg
    //           width="86"
    //           height="59"
    //           viewBox="0 0 86 59"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             clipRule="evenodd"
    //             d="M42.3944 54.4314C51.1847 49.5602 57.1353 40.1884 57.1353 29.4268C57.1353 18.6651 51.1847 9.29329 42.3944 4.42214C33.604 9.29329 27.6535 18.6651 27.6535 29.4268C27.6535 40.1884 33.6041 49.5602 42.3944 54.4314ZM38.6443 56.1665C29.9582 50.4453 24.2254 40.6055 24.2254 29.4268C24.2254 18.248 29.9582 8.40822 38.6443 2.68704C35.5106 1.50556 32.1146 0.859131 28.5676 0.859131C12.7902 0.859131 0 13.6493 0 29.4268C0 45.2042 12.7902 57.9944 28.5676 57.9944C32.1146 57.9944 35.5106 57.348 38.6443 56.1665Z"
    //             fill="#0A3745"
    //           />
    //           <circle
    //             cx="57"
    //             cy="30"
    //             r="25"
    //             stroke="#0A3745"
    //             strokeWidth="8"
    //           />
    //         </svg>
    //       </Link>
    //       <button
    //         type="button"
    //         className="-m-2.5 rounded-md p-2.5 text-gray-700"
    //         onClick={() => setMobileMenuOpen(false)}
    //       >
    //         <span className="sr-only">Close menu</span>
    //         <XMarkIcon className="h-6 w-6" aria-hidden="true" />
    //       </button>
    //     </div>
    //     <div className="mt-6 flow-root">
    //       <div className="-my-6 divide-y divide-gray-500/10">
    //         <div className="space-y-2 py-6">
    //           {isAuth ? (
    //             <>
    //               {navigation.map((item) => (
    //                 <Link
    //                   key={item.name}
    //                   to={item.href}
    //                   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
    //                 >
    //                   {item.name}
    //                 </Link>
    //               ))}
    //             </>
    //           ) : (
    //             <></>
    //           )}
    //         </div>
    //         <div className="py-6">
    //           {isAuth ? (
    //             <Link
    //               className="text-sm font-semibold leading-6 text-gray-900"
    //               onClick={handleLogout}
    //               to={"/"}
    //             >
    //               Log out <span aria-hidden="true">&rarr;</span>
    //             </Link>
    //           ) : (
    //             <Link
    //               className="text-sm font-semibold leading-6 text-gray-900"
    //               onClick={handleLogout}
    //               to={"/"}
    //             >
    //               Log in <span aria-hidden="true">&rarr;</span>
    //             </Link>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //   </Dialog.Panel>
    // </Dialog>