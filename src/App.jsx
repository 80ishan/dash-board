function App() {
  return (
    <>
      <div className="container relative min-h-fit max-w-full">
        <div className="container-inner relative flex items-start">
          <header className="bottom-mobile fixed bottom-0 px-10 z-10 bg-white w-screen shadow-[0_-35px_60px_-15px_rgba(0,0,0,0.1)] md:hidden max-[425px]:px-6">
            <ul className="pt-4 flex justify-between">
              <li className="leading-[35px] flex flex-col mb-3 mt-1 items-center max-[375px]:mb-5">
                <img className="w-6" src="/dashboard-svgrepo-com.svg" alt="" />
                <span className="max-[375px]:hidden">Dashboard</span>
              </li>

              <li className="leading-[35px] flex flex-col mb-3 mt-1 items-center max-[375px]:mb-5">
                <img
                  className="w-6"
                  src="/dollar-sign-round-svgrepo-com.svg"
                  alt=""
                />
                <span className="max-[375px]:hidden">Payroll</span>
              </li>

              <li className="leading-[35px] flex flex-col mb-3 mt-1 items-center max-[375px]:mb-5">
                <img
                  className="w-6"
                  src="/percentage-label-svgrepo-com.svg"
                  alt=""
                />
                <span className="max-[375px]:hidden">Tax Advice</span>
              </li>

              <li className="leading-[35px] flex flex-col mb-3 mt-1 items-center max-[375px]:mb-5">
                <img className="w-6" src="/suitcase-svgrepo-com.svg" alt="" />
                <span className="max-[375px]:hidden">Accounting</span>
              </li>
            </ul>
          </header>

          <nav className="navbar top-0 sticky h-screen max-w-fit border-r-2 border-gray-300 max-md:hidden">
            <div className="flex gap-3 items-center ps-6 py-7 pe-28 border-b-2 border-gray-300 max-w-fit max-xl:pe-6 max-xl:py-8">
              <img
                className=" w-7"
                src="/dashboard-layout-svgrepo-com.svg"
                alt=""
              />
              <h1 className="font-bold text-2xl max-xl:hidden">PayTide</h1>
            </div>

            <div className="main flex flex-col justify-between h-[90%]">
              <ul className=" pt-4 flex flex-col items-start max-xl:items-center">
                <li className="flex gap-3 pl-5 leading-[51px] mb-2 items-center max-xl:py-3.5 max-xl:pl-0">
                  <img
                    className="w-6"
                    src="/dashboard-svgrepo-com.svg"
                    alt=""
                  />
                  <span className="max-xl:hidden">Dashboard</span>
                </li>

                <li className="flex gap-3 pl-5 leading-[51px] mb-2 items-center max-xl:py-3.5 max-xl:pl-0">
                  <img className="w-6" src="/people-svgrepo-com.svg" alt="" />
                  <span className="max-xl:hidden">All Employees</span>
                </li>

                <li className="flex gap-3 pl-5 leading-[51px] mb-2 items-center max-xl:py-3.5 max-xl:pl-0">
                  <img
                    className="w-6"
                    src="/clipboard-text-svgrepo-com.svg"
                    alt=""
                  />
                  <span className="max-xl:hidden">Checklist</span>
                </li>

                <li className="flex gap-3 pl-5 leading-[51px] mb-2 items-center max-xl:py-3.5 max-xl:pl-0">
                  <img
                    className="w-6"
                    src="/dollar-sign-round-svgrepo-com.svg"
                    alt=""
                  />
                  <span className="max-xl:hidden">Payroll</span>
                </li>

                <li className="flex gap-3 pl-5 leading-[51px] mb-2 items-center max-xl:py-3.5 max-xl:pl-0">
                  <img className="w-6" src="/trend-up-svgrepo-com.svg" alt="" />
                  <span className="max-xl:hidden">Expenses Analytics</span>
                </li>

                <li className="flex gap-3 pl-5 leading-[51px] mb-2 items-center max-xl:py-3.5 max-xl:pl-0">
                  <img
                    className="w-6"
                    src="/percentage-label-svgrepo-com.svg"
                    alt=""
                  />
                  <span className="max-xl:hidden">Tax Advice</span>
                </li>

                <li className="flex gap-3 pl-5 leading-[51px] mb-2 items-center max-xl:py-3.5 max-xl:pl-0">
                  <img className="w-6" src="/suitcase-svgrepo-com.svg" alt="" />
                  <span className="max-xl:hidden">Accounting</span>
                </li>

                <li className="flex gap-3 pl-5 leading-[51px] mb-2 items-center max-xl:py-3.5 max-xl:pl-0">
                  <img
                    className="w-6"
                    src="/group-add-people-svgrepo-com.svg"
                    alt=""
                  />
                  <span className="max-xl:hidden">Recruitment</span>
                </li>

                <li className="flex gap-3 pl-5 leading-[51px] mb-2 items-center max-xl:py-3.5 max-xl:pl-0">
                  <img className="w-6" src="/settings-svgrepo-com.svg" alt="" />
                  <span className="max-xl:hidden">Settings</span>
                </li>

                <li className="flex gap-3 pl-5 leading-[51px] mb-2 items-center max-xl:py-3.5 max-xl:pl-0">
                  <img
                    className="w-6"
                    src="/headphones-alt-2-svgrepo-com.svg"
                    alt=""
                  />
                  <span className="max-xl:hidden">Help & Support</span>
                </li>
              </ul>

              <div className="bottom">
                <div className="p-5 max-xl:hidden">
                  <div className="flex flex-col gap-3 border-2 items-center p-3 rounded-lg">
                    <img
                      src="/shield.svg"
                      alt=""
                      className="w-12 rounded-full"
                    />

                    <p className="text-sm">
                      Additional features to <br />
                      enhance your security.
                    </p>

                    <div className="flex gap-3 justify-center items-center py-3 px-12 bg-violet-600 rounded-lg">
                      <span className="text-xs text-white whitespace-nowrap">
                        Upgrade Pro
                      </span>
                      <img
                        className="w-4"
                        src="/right-arrow-svgrepo-com.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="logout flex gap-3 items-center mx-5 w-fit">
                  <img
                    src="/log-out-02-svgrepo-com.svg"
                    className="w-7"
                    alt=""
                  />
                  <span className="max-xl:hidden">Log Out</span>
                </div>
              </div>
            </div>
          </nav>

          <div className="right min-h-fit w-full col-span-6 col-start-2">
            <header className="header w-[full] flex items-center border-b-2 border-gray-300 px-7 py-5 justify-between max-lg:py-4">
              <label htmlFor="check" className="menu h-fit">
                <img
                  className="w-10 md:hidden my-auto"
                  src="/burger-menu.svg"
                  alt=""
                />
              </label>

              <input type="checkbox" id="check" />
              <div className="mobile-drop border-gray-300 py-5 px-8 h-screen text-center fixed left-0 top-0 bg-white shadow-lg z-10 w-[75%] max-[425px]:text-xs">
                <div className="top flex justify-between">
                  <label htmlFor="check" className="menu">
                    <img className="w-8" src="/close.svg" alt="" />
                  </label>

                  <img
                    className="w-8"
                    src="/dashboard-layout-svgrepo-com.svg"
                    alt=""
                  />
                </div>

                <ul className="flex flex-col justify-center gap-14 h-[80%]">
                  <li className="flex items-cente gap-3">
                    <img className="w-7" src="/people-svgrepo-com.svg" alt="" />
                    All Employees
                  </li>

                  <li className="flex items-center gap-3">
                    <img
                      className="w-7"
                      src="/clipboard-text-svgrepo-com.svg  "
                      alt=""
                    />
                    Checklist
                  </li>

                  <li className="flex items-center gap-3">
                    <img
                      className="w-7"
                      src="/trend-up-svgrepo-com.svg"
                      alt=""
                    />
                    Expense Analytics
                  </li>

                  <li className="flex items-center gap-3">
                    <img
                      className="w-7"
                      src="/group-add-people-svgrepo-com.svg"
                      alt=""
                    />
                    Recruitment
                  </li>
                </ul>
              </div>

              <div className="big-head flex justify-between w-full max-md:justify-end">
                <div className="border-2 rounded-xl inline-flex items-center gap-3 ps-3.5 py-2.5 pe-36 max-md:hidden max-lg:p-3.5">
                  <img
                    className="w-6"
                    src="/search-alt-svgrepo-com.svg"
                    alt=""
                  />
                  <span
                    className="text-gray-400 max-lg:hidden
              "
                  >
                    Search something here
                  </span>
                </div>

                <div className="flex gap-8 max-md:gap-3">
                  <div className="flex items-center py-1 px-2.5 border-2 rounded-full max-lg:px-3.5 max-md:px-2.5">
                    <img
                      className="w-6"
                      src="/notification-svgrepo-com.svg"
                      alt=""
                    />
                  </div>

                  <div className="seperator border-[1px]"></div>

                  <div className="flex gap-2 items-center">
                    <img src="/Daco_4205588.png" className="w-12 h-12" alt="" />

                    <p className="font-semibold max-md:hidden">
                      Brian F <br />
                      <span className="font-medium text-gray-500">
                        brianf@mail.com
                      </span>
                    </p>
                  </div>

                  <img
                    src="/down-arrow-5-svgrepo-com.svg  "
                    alt=""
                    className="w-8 max-[320px]:hidden"
                  />
                </div>
              </div>
            </header>

            <div className="main h-full bg-gray-100">
              <div className="wrapper h-full px-8 py-12">
                <div className="head flex justify-between ">
                  <h2 className="font-bold text-5xl leading-10">
                    Hi There, <br />
                    <span className="font-thin text-lg text-gray-500">
                      Welcome To Paytide.
                    </span>
                  </h2>

                  <div className="button h-fit rounded-xl py-3.5 px-7 flex gap-2 items-center justify-center bg-violet-600 max-md:p-4">
                    <span className="text-white max-md:hidden">
                      Create Reports
                    </span>
                    <img src="/plus-svgrepo-com.svg " className="w-6" alt="" />
                  </div>
                </div>
                <div className="cards mt-9">
                  <div className="top grid grid-cols-4 grid-rows-1 gap-4 max-md:grid-cols-2">
                    <div className="balance flex flex-col gap-3 bg-white p-5 rounded-xl">
                      <div className="head flex gap-2 items-center">
                        <img
                          src="/money.svg"
                          alt=""
                          className="w-6 rounded-full max-[320px]:hidden"
                        />
                        <h3 className="text-lg max-sm:text-base">
                          Company Balance
                        </h3>
                      </div>

                      <div className="seperator border-[1px] w-full"></div>

                      <p className="body font-bold text-2xl leading-7 sm: max-sm:text-lg break-all">
                        $123,350,00.56 <br />
                        <span className="font-normal text-base text-gray-500">
                          30% increase since last month.
                        </span>
                      </p>
                    </div>

                    <div className="expense flex flex-col gap-3 bg-white p-5 rounded-xl">
                      <div className="head flex gap-2 items-center">
                        <img
                          src="/note.svg"
                          alt=""
                          className="w-6 rounded-full max-[320px]:hidden"
                        />
                        <h3 className="text-lg max-sm:text-base">
                          Company Expense
                        </h3>
                      </div>

                      <div className="seperator border-[1px] w-full"></div>

                      <p className="body font-bold text-2xl leading-7 max-sm:text-lg break-all">
                        $55,000.00 <br />
                        <span className="font-normal text-base text-gray-500">
                          10% increase since last month.
                        </span>
                      </p>
                    </div>

                    <div className="salary flex flex-col gap-3 bg-white p-5 rounded-xl">
                      <div className="head flex gap-2 items-center">
                        <img
                          src="/wallet (1).svg"
                          alt=""
                          className="w-6 rounded-full max-[320px]:hidden"
                        />
                        <h3 className="text-lg max-sm:text-base">
                          Upcoming Salary Amount
                        </h3>
                      </div>

                      <div className="seperator border-[1px] w-full"></div>

                      <p className="body font-bold text-2xl leading-7 max-sm:text-lg break-all">
                        $4,350,00.89 <br />
                        <span className="font-normal text-base text-gray-500">
                          3,121 employees
                        </span>
                      </p>
                    </div>

                    <div className="date flex flex-col gap-3 bg-white p-5 rounded-xl">
                      <div className="head flex gap-2 items-center">
                        <img
                          src="/coin.svg"
                          alt=""
                          className="w-6 rounded-full max-[320px]:hidden"
                        />
                        <h3 className="text-lg max-sm:text-base">
                          Upcoming Salary Date
                        </h3>
                      </div>

                      <div className="seperator border-[1px] w-full"></div>

                      <p className="body font-bold text-2xl leading-7 max-sm:text-lg break-all">
                        July 5th, 2024 <br />
                        <span className="font-normal text-base text-gray-500">
                          In 4 days time
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="middle mt-7 grid grid-cols-3 grid-rows-1 gap-6">
                    <div className="activities col-span-2 bg-white py-2 px-7 rounded-xl flex flex-col justify-around max-lg:hidden">
                      <div className="head flex justify-between items-center">
                        <h3 className="text-gray-600 text-xl">
                          All activities <br />
                          <span className="text-black font-bold">
                            Payroll Expenses
                          </span>
                        </h3>

                        <div className="btn border-2 px-4 py-3 rounded-xl flex items-center">
                          <img
                            src="/calendar-week-svgrepo-com.svg"
                            alt=""
                            className="w-7 mr-3"
                          />
                          <span> 01 Jan - 01 Dec</span>
                          <img
                            className="w-7"
                            src="/down-arrow-5-svgrepo-com.svg"
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="body relative mt-7 flex justify-between text-gray-600">
                        <div className="vertical h-fit w-fit">
                          <ul className="h-full">
                            <li className="mb-[1.86rem]">$800k</li>
                            <li className="mb-[1.86rem]">$600k</li>
                            <li className="mb-[1.86rem]">$400k</li>
                            <li className="mb-[1.86rem]">$200k</li>
                            <li>$100k</li>
                          </ul>
                        </div>

                        <div className="bottom mx-auto relative  w-[90%] h-[270px]">
                          <div className="horizontal mt-[0.55rem] h-fit w-full absolute">
                            <div className="dash border-2 border-dashed mb-[3.15rem]"></div>
                            <div className="dash border-2 border-dashed mb-[3.15rem]"></div>
                            <div className="dash border-2 border-dashed mb-[3.15rem]"></div>
                            <div className="dash border-2 border-dashed mb-[3.15rem]"></div>
                            <div className="dash border-2 border-dashed"></div>
                          </div>
                          <div className="chart relative w-full h-full grid grid-cols-11 gap-8 items-end text-gray-600">
                            <div className="container flex flex-col justify-end h-full">
                              <div className="bar bg-gradient-to-t from-violet-600 to-purple-400 opacity-85 rounded-lg h-1/3"></div>
                              <span className="mx-auto mt-4">Jan</span>
                            </div>

                            <div className="container flex flex-col justify-end h-full">
                              <div className="bar bg-gradient-to-t from-violet-600 to-purple-400 opacity-85 rounded-lg h-1/5"></div>
                              <span className="mx-auto mt-4">Feb</span>
                            </div>

                            <div className="container flex flex-col justify-end h-full">
                              <div className="bar bg-gradient-to-t from-violet-600 to-purple-400 opacity-85  rounded-lg h-1/3"></div>
                              <span className="mx-auto mt-4">Mar</span>
                            </div>

                            <div className="container flex flex-col justify-end h-full">
                              <div className="bar bg-gradient-to-t from-violet-600 to-purple-400 opacity-85  rounded-lg h-1/3"></div>
                              <span className="mx-auto mt-4">Apr</span>
                            </div>

                            <div className="container flex flex-col justify-end h-full">
                              <div className="bar bg-gradient-to-t from-violet-600 to-purple-400 opacity-85  rounded-lg h-1/5"></div>
                              <span className="mx-auto mt-4">May</span>
                            </div>

                            <div className="container flex flex-col justify-end h-full">
                              <div className="bar bg-gradient-to-t from-violet-600 to-purple-400 opacity-85  rounded-lg h-4/6"></div>
                              <span className="mx-auto mt-4">Jun</span>
                            </div>

                            <div className="container flex flex-col justify-end h-full">
                              <div className="bar bg-gradient-to-t from-violet-600 to-purple-400 opacity-85  rounded-lg h-1/3"></div>
                              <span className="mx-auto mt-4">Jul</span>
                            </div>

                            <div className="container flex flex-col justify-end h-full">
                              <div className="bar bg-gradient-to-t from-violet-600 to-purple-400 opacity-85  rounded-lg h-1/2"></div>
                              <span className="mx-auto mt-4">Aug</span>
                            </div>

                            <div className="container flex flex-col justify-end h-full">
                              <div className="bar bg-gradient-to-t from-violet-600 to-purple-400 opacity-85  rounded-lg h-1/3"></div>
                              <span className="mx-auto mt-4">Sep</span>
                            </div>

                            <div className="container flex flex-col justify-end h-full">
                              <div className="bar bg-gradient-to-t from-violet-600 to-purple-400 opacity-85  rounded-lg h-1/2"></div>
                              <span className="mx-auto mt-4">Oct</span>
                            </div>

                            <div className="container flex flex-col justify-end h-full">
                              <div className="bar bg-gradient-to-t from-violet-600 to-purple-400 opacity-85  rounded-lg h-1/3"></div>
                              <span className="mx-auto mt-4">Nov</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="status bg-white py-5 px-7 rounded-xl max-lg:col-span-3">
                      <div className="head flex justify-between">
                        <h3 className="font-bold text-xl">Employment Status</h3>
                        <img
                          className="w-7"
                          src="/three-dots-line-svgrepo-com.svg"
                          alt=""
                        />
                      </div>

                      <div className="mt-5 bar relative h-3">
                        <div className="purple absolute w-[65%] rounded-full h-full bg-gradient-to-r from-purple-400 to-violet-600"></div>
                        <div className="orange absolute w-[30%] rounded-full h-full bg-gradient-to-r from-yellow-500 to-orange-500"></div>
                        <div className="blue h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                      </div>

                      <div className="mt-3 text flex justify-between text-lg">
                        <span>15%</span>
                        <span>60%</span>
                        <span>25%</span>
                      </div>

                      <div className="my-4 seperator border-[1px] w-full"></div>

                      <div className="total text-lg flex justify-between">
                        <span className=" font-bold">Total</span>
                        <span>150</span>
                      </div>

                      <div className="count">
                        <ul className="flex flex-col gap-6">
                          <li className="flex justify-between border-2 px-4 py-3 rounded-2xl max-sm:justify-center">
                            <div className="front flex items-center gap-2">
                              <div className="dot bg-orange-400 w-2 h-2 rounded-full"></div>
                              <span className="text-lg">
                                Intern
                                <span className="max-sm:hidden"> Employee</span>
                              </span>
                            </div>
                            <span className="flex gap-2 items-center max-sm:hidden">
                              21
                              <div className="seperator border-[0.125rem] rounded-full h-[60%]"></div>
                              15%
                            </span>
                          </li>

                          <li className="flex justify-between border-2 px-4 py-3 rounded-2xl max-sm:justify-center">
                            <div className="front flex items-center gap-2">
                              <div className="dot bg-violet-700 w-2 h-2 rounded-full"></div>
                              <span className="text-lg">
                                Permanent
                                <span className="max-sm:hidden"> Employee</span>
                              </span>
                            </div>
                            <span className="flex gap-2 items-center max-sm:hidden">
                              84
                              <div className="seperator border-[0.125rem] rounded-full h-[60%]"></div>
                              60%
                            </span>
                          </li>

                          <li className="flex justify-between border-2 px-4 py-3 rounded-2xl max-sm:justify-center">
                            <div className="front flex items-center gap-2">
                              <div className="dot bg-blue-700 w-2 h-2 rounded-full"></div>
                              <span className="text-lg">
                                Probationary
                                <span className="max-sm:hidden"> Employee</span>
                              </span>
                            </div>
                            <span className="flex gap-2 items-center max-sm:hidden">
                              45
                              <div className="seperator border-[0.125rem] rounded-full h-[60%]"></div>
                              25%
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bottom mt-8 grid grid-cols-3 grid-rows-3 gap-6 max-md:grid-cols-1 max-xl:grid-rows-2 max-xl:grid-cols-2">
                    <div className="list bg-white py-5 px-7 rounded-xl col-span-2 row-span-3 flex flex-col justify-around max-xl:hidden">
                      <div className="head flex justify-between">
                        <div className="border-2 rounded-xl inline-flex items-center gap-3 ps-3.5 py-2.5 pe-14 max-lg:w-full">
                          <img
                            className="w-6"
                            src="/search-alt-svgrepo-com.svg"
                            alt=""
                          />
                          <span className="text-gray-400">
                            Search something here
                          </span>
                        </div>

                        <div className="buttons flex gap-4">
                          <div className="btn border-2 px-4 py-3 rounded-xl flex items-center max-[1600px]:hidden">
                            <span> All Employement Type</span>
                            <img
                              className="w-7"
                              src="/down-arrow-5-svgrepo-com.svg"
                              alt=""
                            />
                          </div>

                          <div className="btn border-2 px-4 py-3 rounded-xl flex items-center max-lg:hidden">
                            <img
                              src="/calendar-week-svgrepo-com.svg"
                              alt=""
                              className="w-7 mr-3"
                            />
                            <span>1 Jul 2024 - 1 Aug 2024</span>
                            <img
                              className="w-7"
                              src="/down-arrow-5-svgrepo-com.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>

                      <table class="w-full mt-8">
                        <thead className="border-b-2">
                          <tr>
                            <th class="bg-gray-50 px-5 py-4 text-gray-800 text-left">
                              Employee
                            </th>
                            <th class="bg-gray-50 px-5 py-4 text-gray-800 text-left">
                              Role
                            </th>
                            <th class="bg-gray-50 px-5 py-4 text-gray-800 text-left">
                              Hours
                            </th>
                            <th class="bg-gray-50 px-5 py-4 text-gray-800 text-left">
                              Total Salary
                            </th>
                            <th class="bg-gray-50 py-4 text-gray-800 text-left max-[1260px]:hidden">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b-2">
                            <td class="flex items-center gap-3 px-5 py-4">
                              <img
                                className="w-7"
                                src="/Daco_4205588.png"
                                alt=""
                              />
                              <span>Aisha Doe</span>
                            </td>
                            <td className="px-5 py-4">HR Manager</td>
                            <td className="px-5 py-2">160</td>
                            <td className="px-5 py-2">$1,200.00</td>
                            <td className="py-2 max-[1260px]:hidden">Paid</td>
                          </tr>

                          <tr className="border-b-2">
                            <td class="flex items-center gap-3 px-5 py-4">
                              <img
                                className="w-7"
                                src="/Daco_4205588.png"
                                alt=""
                              />
                              <span>Chukeweumeka</span>
                            </td>
                            <td className="px-5 py-2">Software Eng.</td>
                            <td className="px-5 py-2">176</td>
                            <td className="px-5 py-2">$2,000.00</td>
                            <td className="py-2 max-[1260px]:hidden">
                              Pending
                            </td>
                          </tr>

                          <tr className="border-b-2">
                            <td class="flex items-center gap-3 px-5 py-4">
                              <img
                                className="w-7"
                                src="/Daco_4205588.png"
                                alt=""
                              />
                              <span>Mohammed</span>
                            </td>
                            <td className="px-5 py-2">Marketing EX.</td>
                            <td className="px-5 py-2">150</td>
                            <td className="px-5 py-2">$1,500.00</td>
                            <td className="py-2 max-[1260px]:hidden">Paid</td>
                          </tr>

                          <tr className="border-b-2">
                            <td class="flex items-center gap-3 px-5 py-4">
                              <img
                                className="w-7"
                                src="/Daco_4205588.png"
                                alt=""
                              />
                              <span>Afolyan</span>
                            </td>
                            <td className="px-5 py-2">UI/UX Designer</td>
                            <td className="px-5 py-2">168</td>
                            <td className="px-5 py-2">$1,800.00</td>
                            <td className="py-2 max-[1260px]:hidden">Paid</td>
                          </tr>

                          <tr className="border-b-2">
                            <td class="flex items-center gap-3 px-5 py-4">
                              <img
                                className="w-7"
                                src="/Daco_4205588.png"
                                alt=""
                              />
                              <span>Bhagvad</span>
                            </td>
                            <td className="px-5 py-2">Back End Developer</td>
                            <td className="px-5 py-2">200</td>
                            <td className="px-5 py-2">$4,400.00</td>
                            <td className="py-2 max-[1260px]:hidden">Paid</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="payment bg-white py-5 px-7 rounded-xl flex flex-col justify-between max-md:justify-around max-md:py-2">
                      <div className="wrapper">
                        <div className="head flex items-center gap-2">
                          <img
                            className="w-8 rounded-full"
                            src="/bank.svg "
                            alt=""
                          />
                          <h3 className="text-base">Payment Account</h3>
                        </div>
                        <div className="my-4 seperator border-[1px] w-full"></div>
                      </div>

                      <p className="body text-2xl font-bold max-md:hidden">
                        Zenith Bank Account <br />
                        <span className="text-base font-normal text-green-600">
                          Connected
                        </span>
                      </p>

                      <div className="flex flex-col justify-between border-2 px-4 py-3 rounded-2xl max-sm:items-center md:hidden">
                        <div className="client flex gap-6 items-center mb-4 max-sm:flex-col">
                          <img
                            className="w-20"
                            src="/deposit-safe-savings-svgrepo-com.svg"
                            alt=""
                          />
                          <div className="text font-bold flex flex-col">
                            <p className="body text-lg font-bold">
                              Zenith Bank Account <br />
                              <span className="text-base font-normal text-green-600">
                                Connected
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="client bg-white py-8 px-7 rounded-xl row-span-2 max-md:mb-16 flex flex-col justify-between">
                      <div className="head flex justify-between">
                        <div className="front flex items-start gap-5">
                          <img
                            className="w-9 max-[1600px]:hidden"
                            src="/calendar.svg"
                            alt=""
                          />
                          <p className="text-lg leading-[2rem] text-gray-600">
                            Payment <br />
                            <span className="font-bold text-3xl text-black">
                              $2,670.50
                            </span>
                          </p>
                        </div>

                        <div className="back mt-2.5 flex flex-col items-end max-xl:hidden">
                          <span className="text-indigo-600 mr-2">
                            April 1, 2024
                          </span>
                          <div className="box mt-2.5 bg-orange-50 text-orange-300 px-4 py-1.5 rounded-xl flex items-center gap-3">
                            <div className="circle bg-orange-300 rounded-full w-2 h-2"></div>
                            PENDING
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col justify-between border-2 px-4 py-3 rounded-2xl max-sm:items-center">
                        <span className="text-lg mb-3 text-gray-600">
                          Client
                        </span>
                        <div className="client flex gap-6 items-center mb-4 max-sm:flex-col">
                          <img
                            className="w-20"
                            src="/Daco_4205588.png"
                            alt=""
                          />
                          <div className="text font-bold flex flex-col">
                            <span>Angela Nagelsman</span>
                            <span className="font-normal text-gray-600">
                              Saphore Inc
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
