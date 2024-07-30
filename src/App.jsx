function App() {
  return (
    <>
      <div className="container min-h-fit max-w-full overflow-hidden  ">
        <div className="container-inner grid grid-cols-7">
          <nav className="navbar min-h-screen max-w-fit border-r-2 border-gray-300">
            <div className="flex gap-3 items-center ps-6 py-7 pe-32 border-b-2 border-gray-300 max-w-fit">
              <img
                className=" w-7"
                src="/dashboard-layout-svgrepo-com.png"
                alt=""
              />
              <h1 className=" font-bold text-2xl">PayTide</h1>
            </div>

            <div className="main">
              <ul className=" pt-10">
                <li className="flex gap-3 pl-5 mb-8 items-center">
                  <img
                    className="w-6"
                    src="assets/dashboard-svgrepo-com.svg"
                    alt=""
                  />
                  Dashboard
                </li>

                <li className="flex gap-3 pl-5 mb-8 items-center">
                  <img
                    className="w-6"
                    src="assets/people-svgrepo-com.svg"
                    alt=""
                  />
                  All Employees
                </li>

                <li className="flex gap-3 pl-5 mb-8 items-center">
                  <img
                    className="w-6"
                    src="assets/clipboard-text-svgrepo-com.svg"
                    alt=""
                  />
                  Checklist
                </li>

                <li className="flex gap-3 pl-5 mb-8 items-center">
                  <img
                    className="w-6"
                    src="assets/dollar-sign-round-svgrepo-com.svg"
                    alt=""
                  />
                  Payroll
                </li>

                <li className="flex gap-3 pl-5 mb-8 items-center">
                  <img
                    className="w-6"
                    src="assets/trend-up-svgrepo-com.svg"
                    alt=""
                  />
                  Expenses Analytics
                </li>

                <li className="flex gap-3 pl-5 mb-8 items-center">
                  <img
                    className="w-6"
                    src="assets/percentage-label-svgrepo-com.svg"
                    alt=""
                  />
                  Tax Advice
                </li>

                <li className="flex gap-3 pl-5 mb-8 items-center">
                  <img
                    className="w-6"
                    src="assets/suitcase-svgrepo-com.svg"
                    alt=""
                  />
                  Accounting
                </li>

                <li className="flex gap-3 pl-5 mb-8 items-center">
                  <img
                    className="w-6"
                    src="assets/group-add-people-svgrepo-com.svg"
                    alt=""
                  />
                  Recruitement
                </li>

                <li className="flex gap-3 pl-5 mb-8 items-center">
                  <img
                    className="w-6"
                    src="assets/settings-svgrepo-com.svg"
                    alt=""
                  />
                  Settings
                </li>

                <li className="flex gap-3 pl-5 mb-8 items-center">
                  <img
                    className="w-6"
                    src="assets/headphones-alt-2-svgrepo-com.svg"
                    alt=""
                  />
                  Help & Support
                </li>
              </ul>

              <div className="bottom fixed">
                <div className="p-5 mt-20">
                  <div className="flex flex-col gap-3 border-2 items-center p-3 rounded-lg">
                    <img
                      src="assets/shield.svg"
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
                        src="assets/right-arrow-svgrepo-com.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="logout flex gap-3 items-center mx-5 mt-2 w-fit">
                  <img
                    src="assets/log-out-02-svgrepo-com.svg"
                    className="w-7"
                    alt=""
                  />
                  <span>Log Out</span>
                </div>
              </div>
            </div>
          </nav>

          <div className="right min-h-fit col-span-6">
            <header className="header w-full flex border-b-2 border-gray-300 px-7 py-5 justify-between">
              <div className="border-2 rounded-xl inline-flex items-center gap-3 ps-3.5 py-2.5 pe-36">
                <img
                  className="w-6"
                  src="assets/search-alt-svgrepo-com.svg"
                  alt=""
                />
                <span
                  className="text-gray-400
              "
                >
                  Search something here
                </span>
              </div>

              <div className="flex gap-8">
                <div className="flex items-center py-1 px-2.5 border-2 rounded-full">
                  <img
                    className="w-6"
                    src="assets/notification-svgrepo-com.svg"
                    alt=""
                  />
                </div>

                <div className="seperator border-[1px]"></div>

                <div className="flex gap-2">
                  <img src="assets/Daco_4205588.png" className="w-12" alt="" />

                  <p className="font-semibold">
                    Brian F <br />
                    <span className="font-medium text-gray-500">
                      brianf@mail.com
                    </span>
                  </p>
                </div>

                <img
                  src="assets/down-arrow-5-svgrepo-com.svg  "
                  alt=""
                  className="w-8"
                />
              </div>
            </header>

            <div className="main h-full bg-gray-200">
              <div className="wrapper h-full px-8 py-12">
                <div className="head flex justify-between ">
                  <h2 className="font-bold text-5xl leading-9">
                    Hi There, <br />
                    <span className="font-thin text-lg text-gray-500">
                      Welcome To Paytide.
                    </span>
                  </h2>

                  <div className="button h-fit rounded-xl py-3.5 px-7 flex gap-2 items-center justify-center bg-violet-600">
                    <span className="text-white ">Create Reports</span>
                    <img
                      src="assets/plus-svgrepo-com.svg "
                      className="w-6 "
                      alt=""
                    />
                  </div>
                </div>
                <div className="cards mt-9">
                  <div className="top grid grid-cols-4 grid-rows-1 gap-4 ">
                    <div className="balance flex flex-col gap-3 bg-white p-5 rounded-xl">
                      <div className="head flex gap-2 items-center">
                        <img
                          src="assets/money.svg"
                          alt=""
                          className="w-6 rounded-full"
                        />
                        <h3 className="text-lg">Company Balance</h3>
                      </div>

                      <div className="seperator border-[1px] w-full"></div>

                      <p className="body font-bold text-2xl leading-7">
                        $123,350,00.56 <br />
                        <span className="font-normal text-base text-gray-500">
                          30% increase since last month.
                        </span>
                      </p>
                    </div>

                    <div className="expense flex flex-col gap-3 bg-white p-5 rounded-xl">
                      <div className="head flex gap-2 items-center">
                        <img
                          src="assets/note.svg"
                          alt=""
                          className="w-6 rounded-full"
                        />
                        <h3 className="text-lg">Company Expense</h3>
                      </div>

                      <div className="seperator border-[1px] w-full"></div>

                      <p className="body font-bold text-2xl leading-7">
                        $55,000.00 <br />
                        <span className="font-normal text-base text-gray-500">
                          10% increase since last month.
                        </span>
                      </p>
                    </div>

                    <div className="salary flex flex-col gap-3 bg-white p-5 rounded-xl">
                      <div className="head flex gap-2 items-center">
                        <img
                          src="assets/wallet (1).svg"
                          alt=""
                          className="w-6 rounded-full"
                        />
                        <h3 className="text-lg">Upcoming Salary Amount</h3>
                      </div>

                      <div className="seperator border-[1px] w-full"></div>

                      <p className="body font-bold text-2xl leading-7">
                        $4,350,00.89 <br />
                        <span className="font-normal text-base text-gray-500">
                          3,121 employees
                        </span>
                      </p>
                    </div>

                    <div className="date flex flex-col gap-3 bg-white p-5 rounded-xl">
                      <div className="head flex gap-2 items-center">
                        <img
                          src="assets/coin.svg"
                          alt=""
                          className="w-6 rounded-full"
                        />
                        <h3 className="text-lg">Upcoming Salary Date</h3>
                      </div>

                      <div className="seperator border-[1px] w-full"></div>

                      <p className="body font-bold text-2xl leading-7">
                        July 5th, 2024 <br />
                        <span className="font-normal text-base text-gray-500">
                          In 4 days time
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="middle mt-7 grid grid-cols-3 grid-rows-1 gap-6">
                    <div className="activities col-span-2 bg-white py-5 px-7 rounded-xl">
                      <div className="head flex justify-between items-center">
                        <h3 className="text-gray-600 text-xl">
                          All activities <br />
                          <span className="text-black font-bold">
                            Payroll Expenses
                          </span>
                        </h3>

                        <div className="btn border-2 px-4 py-3 rounded-xl flex items-center">
                          <img
                            src="assets/calendar-week-svgrepo-com.svg"
                            alt=""
                            className="w-7 mr-3"
                          />
                          <span> 01 Jan - 01 Dec</span>
                          <img
                            className="w-7"
                            src="assets/down-arrow-5-svgrepo-com.svg"
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
                    <div className="status bg-white py-5 px-7 rounded-xl">
                      <div className="head flex justify-between">
                        <h3 className="font-bold text-xl">Employment Status</h3>
                        <img
                          className="w-7"
                          src="assets/three-dots-line-svgrepo-com.svg"
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
                          <li className="flex justify-between border-2 px-4 py-3 rounded-2xl">
                            <div className="front flex items-center gap-2">
                              <div className="dot bg-orange-400 w-2 h-2 rounded-full"></div>
                              <span className="text-lg">Intern Employee</span>
                            </div>
                            <span className="flex gap-2 items-center">
                              21
                              <div className="seperator border-[0.125rem] rounded-full h-[60%]"></div>{" "}
                              15%
                            </span>
                          </li>

                          <li className="flex justify-between border-2 px-4 py-3 rounded-2xl">
                            <div className="front flex items-center gap-2">
                              <div className="dot bg-violet-700 w-2 h-2 rounded-full"></div>
                              <span className="text-lg">
                                Permanent Employee
                              </span>
                            </div>
                            <span className="flex gap-2 items-center">
                              84
                              <div className="seperator border-[0.125rem] rounded-full h-[60%]"></div>{" "}
                              60%
                            </span>
                          </li>

                          <li className="flex justify-between border-2 px-4 py-3 rounded-2xl">
                            <div className="front flex items-center gap-2">
                              <div className="dot bg-blue-700 w-2 h-2 rounded-full"></div>
                              <span className="text-lg">Intern Employee</span>
                            </div>
                            <span className="flex gap-2 items-center">
                              45
                              <div className="seperator border-[0.125rem] rounded-full h-[60%]"></div>{" "}
                              25%
                            </span>
                          </li>
                        </ul>
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
