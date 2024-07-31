function App() {
  return (
    <>
      <div className="container relative min-h-fit max-w-full">
        <div className="container-inner relative grid grid-cols-7">
          <nav className="navbar fixed h-fit max-w-fit border-r-2 border-gray-300">
            <div className="flex gap-3 items-center ps-6 py-7 pe-28 border-b-2 border-gray-300 max-w-fit">
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
                    src="/dashboard-svgrepo-com.svg"
                    alt=""
                  />
                  Dashboard
                </li>

                <li className="flex gap-3 pl-5 mb-8 items-center">
                  <img className="w-6" src="/people-svgrepo-com.svg" alt="" />
                  All Employees
                </li>

                <li className="flex gap-3 pl-5 mb-8 items-center">
                  <img
                    className="w-6"
                    src="/clipboard-text-svgrepo-com.svg"
                    alt=""
                  />
                  Checklist
                </li>

                <li className="flex gap-3 pl-5 mb-8 items-center">
                  <img
                    className="w-6"
                    src="/dollar-sign-round-svgrepo-com.svg"
                    alt=""
                  />
                  Payroll
                </li>

                <li className="flex gap-3 pl-5 mb-8 items-center">
                  <img className="w-6" src="/trend-up-svgrepo-com.svg" alt="" />
                  Expenses Analytics
                </li>

                <li className="flex gap-3 pl-5 mb-8 items-center">
                  <img
                    className="w-6"
                    src="/percentage-label-svgrepo-com.svg"
                    alt=""
                  />
                  Tax Advice
                </li>

                <li className="flex gap-3 pl-5 mb-8 items-center">
                  <img className="w-6" src="/suitcase-svgrepo-com.svg" alt="" />
                  Accounting
                </li>

                <li className="flex gap-3 pl-5 mb-8 items-center">
                  <img
                    className="w-6"
                    src="/group-add-people-svgrepo-com.svg"
                    alt=""
                  />
                  Recruitement
                </li>

                <li className="flex gap-3 pl-5 mb-8 items-center">
                  <img className="w-6" src="/settings-svgrepo-com.svg" alt="" />
                  Settings
                </li>

                <li className="flex gap-3 pl-5 mb-8 items-center">
                  <img
                    className="w-6"
                    src="/headphones-alt-2-svgrepo-com.svg"
                    alt=""
                  />
                  Help & Support
                </li>
              </ul>

              <div className="bottom">
                <div className="p-5 mt-20">
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

                <div className="logout flex gap-3 items-center mx-5 mt-2 w-fit">
                  <img
                    src="/log-out-02-svgrepo-com.svg"
                    className="w-7"
                    alt=""
                  />
                  <span>Log Out</span>
                </div>
              </div>
            </div>
          </nav>

          <div className="right min-h-fit col-span-6 col-start-2">
            <header className="header w-full flex border-b-2 border-gray-300 px-7 py-5 justify-between">
              <div className="border-2 rounded-xl inline-flex items-center gap-3 ps-3.5 py-2.5 pe-36">
                <img className="w-6" src="/search-alt-svgrepo-com.svg" alt="" />
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
                    src="/notification-svgrepo-com.svg"
                    alt=""
                  />
                </div>

                <div className="seperator border-[1px]"></div>

                <div className="flex gap-2">
                  <img src="/Daco_4205588.png" className="w-12" alt="" />

                  <p className="font-semibold">
                    Brian F <br />
                    <span className="font-medium text-gray-500">
                      brianf@mail.com
                    </span>
                  </p>
                </div>

                <img
                  src="/down-arrow-5-svgrepo-com.svg  "
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
                    <img src="/plus-svgrepo-com.svg " className="w-6 " alt="" />
                  </div>
                </div>
                <div className="cards mt-9">
                  <div className="top grid grid-cols-4 grid-rows-1 gap-4 ">
                    <div className="balance flex flex-col gap-3 bg-white p-5 rounded-xl">
                      <div className="head flex gap-2 items-center">
                        <img
                          src="/money.svg"
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
                          src="/note.svg"
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
                          src="/wallet (1).svg"
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
                          src="/coin.svg"
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
                    <div className="status bg-white py-5 px-7 rounded-xl">
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

                  <div className="bottom mt-8 grid grid-cols-3 grid-rows-3 gap-6">
                    <div className="list bg-white py-5 px-7 rounded-xl col-span-2 row-span-3">
                      <div className="head flex justify-between">
                        <div className="border-2 rounded-xl inline-flex items-center gap-3 ps-3.5 py-2.5 pe-14">
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
                          <div className="btn border-2 px-4 py-3 rounded-xl flex items-center">
                            <span> All Employement Type</span>
                            <img
                              className="w-7"
                              src="/down-arrow-5-svgrepo-com.svg"
                              alt=""
                            />
                          </div>

                          <div className="btn border-2 px-4 py-3 rounded-xl flex items-center">
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
                            <th class="bg-gray-50 py-4 text-gray-800 text-left">
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
                            <td className="py-2">Paid</td>
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
                            <td className="py-2">Pending</td>
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
                            <td className="py-2">Paid</td>
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
                            <td className="py-2">Paid</td>
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
                            <td className="py-2">Paid</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="payment bg-white py-5 px-7 rounded-xl">
                      <div className="head flex items-center gap-2">
                        <img
                          className="w-8 rounded-full"
                          src="/bank.svg "
                          alt=""
                        />
                        <h3 className="text-base">Payment Account</h3>
                      </div>

                      <div className="my-4 seperator border-[1px] w-full"></div>

                      <p className="body text-2xl font-bold">
                        Zenith Bank Account <br />
                        <span className="text-base font-normal text-green-600">
                          Connected
                        </span>
                      </p>
                    </div>

                    <div className="client bg-white py-8 px-7 rounded-xl row-span-2">
                      <div className="head mb-8 flex justify-between">
                        <div className="front flex items-start gap-5">
                          <img className="w-8" src="/wallet.svg" alt="" />
                          <p className="text-lg leading-[3rem] text-gray-600">
                            Payment <br />
                            <span className="font-bold text-3xl text-black">
                              $2,670.50
                            </span>
                          </p>
                        </div>

                        <div className="back mt-2.5 flex flex-col items-end">
                          <span className="text-indigo-600 mr-2">
                            April 1, 2024
                          </span>
                          <div className="box mt-2.5 bg-orange-50 text-orange-300 px-4 py-1.5 rounded-xl flex items-center gap-3">
                            <div className="circle bg-orange-300 rounded-full w-2 h-2"></div>
                            PENDING
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col justify-between border-2 px-4 py-3 rounded-2xl">
                        <span className="text-lg mb-3 text-gray-600">
                          Client
                        </span>
                        <div className="client flex gap-6 items-center mb-4">
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
