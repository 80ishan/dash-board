function App() {
  return (
    <>
      <div className="container font-medium relative min-h-fit max-w-full">
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
                <span className="max-[375px]:hidden     ">Payroll</span>
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

          <nav className="navbar overflow-y-scroll scroll top-0 sticky h-screen w-[300px] border-r-2 border-gray-300 max-md:hidden max-[1280px]:max-w-fit">
            <div className="top">
              <div className="flex max-w-full ps-6 py-7 pe-20 gap-3 items-center border-b-2 border-gray-300 max-xl:pe-6 max-xl:py-8">
                <img
                  className="h-6 w-6"
                  src="/dashboard-layout-svgrepo-com.svg"
                  alt=""
                />
                <h1 className="font-bold text-2xl max-xl:hidden">PayTide</h1>
              </div>
            </div>

            <div className="main flex flex-col justify-between h-[90%]">
              <ul className=" pt-4 flex flex-col items-start max-xl:items-center">
                <a
                  className="group flex hover:bg-gradient-to-r from-indigo-50 to-white w-full mb-2"
                  href=""
                >
                  <div className="bar my-auto invisible rounded-full w-1 h-[90%] bg-indigo-400 group-hover:visible"></div>
                  <li className="flex w-full gap-3 pl-4 leading-[60px] items-center max-xl:py-[0.97rem]">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="group-hover:fill-indigo-600"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.8 1L2.74967 0.99997C2.52122 0.999752 2.32429 0.999564 2.14983 1.04145C1.60136 1.17312 1.17312 1.60136 1.04145 2.14983C0.999564 2.32429 0.999752 2.52122 0.99997 2.74967L1 2.8V5.2L0.99997 5.25033C0.999752 5.47878 0.999564 5.67572 1.04145 5.85017C1.17312 6.39864 1.60136 6.82688 2.14983 6.95856C2.32429 7.00044 2.52122 7.00025 2.74967 7.00003L2.8 7H5.2L5.25033 7.00003C5.47878 7.00025 5.67572 7.00044 5.85017 6.95856C6.39864 6.82688 6.82688 6.39864 6.95856 5.85017C7.00044 5.67572 7.00025 5.47878 7.00003 5.25033L7 5.2V2.8L7.00003 2.74967C7.00025 2.52122 7.00044 2.32429 6.95856 2.14983C6.82688 1.60136 6.39864 1.17312 5.85017 1.04145C5.67572 0.999564 5.47878 0.999752 5.25033 0.99997L5.2 1H2.8ZM2.38328 2.01382C2.42632 2.00348 2.49222 2 2.8 2H5.2C5.50779 2 5.57369 2.00348 5.61672 2.01382C5.79955 2.05771 5.94229 2.20045 5.98619 2.38328C5.99652 2.42632 6 2.49222 6 2.8V5.2C6 5.50779 5.99652 5.57369 5.98619 5.61672C5.94229 5.79955 5.79955 5.94229 5.61672 5.98619C5.57369 5.99652 5.50779 6 5.2 6H2.8C2.49222 6 2.42632 5.99652 2.38328 5.98619C2.20045 5.94229 2.05771 5.79955 2.01382 5.61672C2.00348 5.57369 2 5.50779 2 5.2V2.8C2 2.49222 2.00348 2.42632 2.01382 2.38328C2.05771 2.20045 2.20045 2.05771 2.38328 2.01382ZM9.8 1L9.74967 0.99997C9.52122 0.999752 9.32429 0.999564 9.14983 1.04145C8.60136 1.17312 8.17312 1.60136 8.04145 2.14983C7.99956 2.32429 7.99975 2.52122 7.99997 2.74967L8 2.8V5.2L7.99997 5.25033C7.99975 5.47878 7.99956 5.67572 8.04145 5.85017C8.17312 6.39864 8.60136 6.82688 9.14983 6.95856C9.32429 7.00044 9.52122 7.00025 9.74967 7.00003L9.8 7H12.2L12.2503 7.00003C12.4788 7.00025 12.6757 7.00044 12.8502 6.95856C13.3986 6.82688 13.8269 6.39864 13.9586 5.85017C14.0004 5.67572 14.0003 5.47878 14 5.25033L14 5.2V2.8L14 2.74967C14.0003 2.52122 14.0004 2.32429 13.9586 2.14983C13.8269 1.60136 13.3986 1.17312 12.8502 1.04145C12.6757 0.999564 12.4788 0.999752 12.2503 0.99997L12.2 1H9.8ZM9.38328 2.01382C9.42632 2.00348 9.49222 2 9.8 2H12.2C12.5078 2 12.5737 2.00348 12.6167 2.01382C12.7995 2.05771 12.9423 2.20045 12.9862 2.38328C12.9965 2.42632 13 2.49222 13 2.8V5.2C13 5.50779 12.9965 5.57369 12.9862 5.61672C12.9423 5.79955 12.7995 5.94229 12.6167 5.98619C12.5737 5.99652 12.5078 6 12.2 6H9.8C9.49222 6 9.42632 5.99652 9.38328 5.98619C9.20045 5.94229 9.05771 5.79955 9.01382 5.61672C9.00348 5.57369 9 5.50779 9 5.2V2.8C9 2.49222 9.00348 2.42632 9.01382 2.38328C9.05771 2.20045 9.20045 2.05771 9.38328 2.01382ZM2.74967 7.99997L2.8 8H5.2L5.25033 7.99997C5.47878 7.99975 5.67572 7.99956 5.85017 8.04145C6.39864 8.17312 6.82688 8.60136 6.95856 9.14983C7.00044 9.32429 7.00025 9.52122 7.00003 9.74967L7 9.8V12.2L7.00003 12.2503C7.00025 12.4788 7.00044 12.6757 6.95856 12.8502C6.82688 13.3986 6.39864 13.8269 5.85017 13.9586C5.67572 14.0004 5.47878 14.0003 5.25033 14L5.2 14H2.8L2.74967 14C2.52122 14.0003 2.32429 14.0004 2.14983 13.9586C1.60136 13.8269 1.17312 13.3986 1.04145 12.8502C0.999564 12.6757 0.999752 12.4788 0.99997 12.2503L1 12.2V9.8L0.99997 9.74967C0.999752 9.52122 0.999564 9.32429 1.04145 9.14983C1.17312 8.60136 1.60136 8.17312 2.14983 8.04145C2.32429 7.99956 2.52122 7.99975 2.74967 7.99997ZM2.8 9C2.49222 9 2.42632 9.00348 2.38328 9.01382C2.20045 9.05771 2.05771 9.20045 2.01382 9.38328C2.00348 9.42632 2 9.49222 2 9.8V12.2C2 12.5078 2.00348 12.5737 2.01382 12.6167C2.05771 12.7995 2.20045 12.9423 2.38328 12.9862C2.42632 12.9965 2.49222 13 2.8 13H5.2C5.50779 13 5.57369 12.9965 5.61672 12.9862C5.79955 12.9423 5.94229 12.7995 5.98619 12.6167C5.99652 12.5737 6 12.5078 6 12.2V9.8C6 9.49222 5.99652 9.42632 5.98619 9.38328C5.94229 9.20045 5.79955 9.05771 5.61672 9.01382C5.57369 9.00348 5.50779 9 5.2 9H2.8ZM9.8 8L9.74967 7.99997C9.52122 7.99975 9.32429 7.99956 9.14983 8.04145C8.60136 8.17312 8.17312 8.60136 8.04145 9.14983C7.99956 9.32429 7.99975 9.52122 7.99997 9.74967L8 9.8V12.2L7.99997 12.2503C7.99975 12.4788 7.99956 12.6757 8.04145 12.8502C8.17312 13.3986 8.60136 13.8269 9.14983 13.9586C9.32429 14.0004 9.52122 14.0003 9.74967 14L9.8 14H12.2L12.2503 14C12.4788 14.0003 12.6757 14.0004 12.8502 13.9586C13.3986 13.8269 13.8269 13.3986 13.9586 12.8502C14.0004 12.6757 14.0003 12.4788 14 12.2503L14 12.2V9.8L14 9.74967C14.0003 9.52122 14.0004 9.32429 13.9586 9.14983C13.8269 8.60136 13.3986 8.17312 12.8502 8.04145C12.6757 7.99956 12.4788 7.99975 12.2503 7.99997L12.2 8H9.8ZM9.38328 9.01382C9.42632 9.00348 9.49222 9 9.8 9H12.2C12.5078 9 12.5737 9.00348 12.6167 9.01382C12.7995 9.05771 12.9423 9.20045 12.9862 9.38328C12.9965 9.42632 13 9.49222 13 9.8V12.2C13 12.5078 12.9965 12.5737 12.9862 12.6167C12.9423 12.7995 12.7995 12.9423 12.6167 12.9862C12.5737 12.9965 12.5078 13 12.2 13H9.8C9.49222 13 9.42632 12.9965 9.38328 12.9862C9.20045 12.9423 9.05771 12.7995 9.01382 12.6167C9.00348 12.5737 9 12.5078 9 12.2V9.8C9 9.49222 9.00348 9.42632 9.01382 9.38328C9.05771 9.20045 9.20045 9.05771 9.38328 9.01382Z"
                        fill="#000000"
                      />
                    </svg>
                    <span className="group-hover:text-indigo-500 max-xl:hidden">
                      Dashboard
                    </span>
                  </li>
                </a>

                <a
                  className="group flex hover:bg-gradient-to-r from-indigo-50 to-white w-full mb-2"
                  href=""
                >
                  <div className="bar my-auto invisible rounded-full w-1 h-[90%] bg-indigo-400 group-hover:visible"></div>
                  <li className="flex w-full gap-3 pl-4 leading-[60px] items-center max-xl:py-[0.97rem]">
                    <svg
                      fill="#292D32"
                      className="w-6 h-6 group-hover:fill-indigo-600"
                      viewBox="0 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        <path d="M23.313 26.102l-6.296-3.488c2.34-1.841 2.976-5.459 2.976-7.488v-4.223c0-2.796-3.715-5.91-7.447-5.91-3.73 0-7.544 3.114-7.544 5.91v4.223c0 1.845 0.78 5.576 3.144 7.472l-6.458 3.503s-1.688 0.752-1.688 1.689v2.534c0 0.933 0.757 1.689 1.688 1.689h21.625c0.931 0 1.688-0.757 1.688-1.689v-2.534c0-0.994-1.689-1.689-1.689-1.689zM23.001 30.015h-21.001v-1.788c0.143-0.105 0.344-0.226 0.502-0.298 0.047-0.021 0.094-0.044 0.139-0.070l6.459-3.503c0.589-0.32 0.979-0.912 1.039-1.579s-0.219-1.32-0.741-1.739c-1.677-1.345-2.396-4.322-2.396-5.911v-4.223c0-1.437 2.708-3.91 5.544-3.91 2.889 0 5.447 2.44 5.447 3.91v4.223c0 1.566-0.486 4.557-2.212 5.915-0.528 0.416-0.813 1.070-0.757 1.739s0.446 1.267 1.035 1.589l6.296 3.488c0.055 0.030 0.126 0.063 0.184 0.089 0.148 0.063 0.329 0.167 0.462 0.259v1.809zM30.312 21.123l-6.39-3.488c2.34-1.841 3.070-5.459 3.070-7.488v-4.223c0-2.796-3.808-5.941-7.54-5.941-2.425 0-4.904 1.319-6.347 3.007 0.823 0.051 1.73 0.052 2.514 0.302 1.054-0.821 2.386-1.308 3.833-1.308 2.889 0 5.54 2.47 5.54 3.941v4.223c0 1.566-0.58 4.557-2.305 5.915-0.529 0.416-0.813 1.070-0.757 1.739 0.056 0.67 0.445 1.267 1.035 1.589l6.39 3.488c0.055 0.030 0.126 0.063 0.184 0.089 0.148 0.063 0.329 0.167 0.462 0.259v1.779h-4.037c0.61 0.46 0.794 1.118 1.031 2h3.319c0.931 0 1.688-0.757 1.688-1.689v-2.503c-0.001-0.995-1.689-1.691-1.689-1.691z" />
                      </g>
                    </svg>
                    <span className="group-hover:text-indigo-500 max-xl:hidden">
                      All Employees
                    </span>
                  </li>
                </a>

                <a
                  className="group flex hover:bg-gradient-to-r from-indigo-100 to-white w-full mb-2"
                  href=""
                >
                  <div className="bar my-auto invisible rounded-full w-1 h-[90%] bg-indigo-400 group-hover:visible"></div>
                  <li className="flex gap-3 pl-4 leading-[60px] items-center max-xl:py-[0.97rem]">
                    <svg
                      fill="#000000"
                      className="w-6 h-6 group-hover:fill-indigo-600"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17,4H15.82A3,3,0,0,0,13,2H11A3,3,0,0,0,8.18,4H7A3,3,0,0,0,4,7V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V7A3,3,0,0,0,17,4ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm8,14a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V7A1,1,0,0,1,7,6H8V7A1,1,0,0,0,9,8h6a1,1,0,0,0,1-1V6h1a1,1,0,0,1,1,1Z" />
                    </svg>
                    <span className="max-xl:hidden group-hover:text-indigo-500">
                      Checklist
                    </span>
                  </li>
                </a>

                <a
                  className="group flex hover:bg-gradient-to-r from-indigo-100 to-white w-full mb-2"
                  href=""
                >
                  <div className="bar my-auto invisible rounded-full w-1 h-[90%] bg-indigo-400 group-hover:visible"></div>
                  <li className="flex gap-3 pl-4 leading-[60px] items-center max-xl:py-[0.97rem]">
                    <svg
                      fill="#000000"
                      className="w-6 h-6 group-hover:fill-indigo-500"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14,11H10a2,2,0,0,1,0-4h5a1,1,0,0,1,1,1,1,1,0,0,0,2,0,3,3,0,0,0-3-3H13V3a1,1,0,0,0-2,0V5H10a4,4,0,0,0,0,8h4a2,2,0,0,1,0,4H9a1,1,0,0,1-1-1,1,1,0,0,0-2,0,3,3,0,0,0,3,3h2v2a1,1,0,0,0,2,0V19h1a4,4,0,0,0,0-8Z" />
                    </svg>
                    <span className="max-xl:hidden group-hover:text-indigo-500">
                      Payroll
                    </span>
                  </li>
                </a>

                <a
                  className="group flex hover:bg-gradient-to-r from-indigo-100 to-white w-full mb-2"
                  href=""
                >
                  <div className="bar my-auto invisible rounded-full w-1 h-[90%] bg-indigo-400 group-hover:visible"></div>
                  <li className="flex gap-3 pl-4 leading-[60px] items-center max-xl:py-[0.97rem]">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5 5C5 4.44772 4.55228 4 4 4C3.44772 4 3 4.44772 3 5L3 13.9998C3 13.9999 3 14.0001 3 14.0002V19C3 19.5523 3.44772 20 4 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V14.4142L9 10.4142L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071L19 8.41421V11C19 11.5523 19.4477 12 20 12C20.5523 12 21 11.5523 21 11V6C21 5.44772 20.5523 5 20 5H15C14.4477 5 14 5.44772 14 6C14 6.55228 14.4477 7 15 7H17.5858L13 11.5858L9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289L5 11.5858V5Z"
                          fill="#292D32"
                          className="group-hover:fill-indigo-500"
                        />
                      </g>
                    </svg>
                    <span className="max-xl:hidden group-hover:text-indigo-500">
                      Expenses Analytics
                    </span>
                  </li>
                </a>

                <a
                  className="group flex hover:bg-gradient-to-r from-indigo-100 to-white w-full mb-2"
                  href=""
                >
                  <div className="bar my-auto invisible rounded-full w-1 h-[90%] bg-indigo-400 group-hover:visible"></div>
                  <li className="flex gap-3 pl-4 leading-[60px] items-center max-xl:py-[0.97rem]">
                    <svg
                      fill="#292D32"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      className="w-6 h-6 group-hover:fill-indigo-500"
                      viewBox="0 0 606.492 606.492"
                      xml:space="preserve"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        <g>
                          <path d="M606.492,303.246l-86.598-70.38l28.702-107.896l-111.506-5.998L397.005,14.749l-93.759,60.772l-93.758-60.772 l-40.086,104.224l-111.506,5.998l28.703,107.896L0,303.246l86.598,70.38L57.896,481.521l111.506,5.998l40.086,104.224 l93.758-60.771l93.759,60.771l40.086-104.224l111.506-5.998l-28.702-107.896L606.492,303.246z M407.959,447.372l-31.396,81.519 l-73.317-47.491l-73.317,47.552l-31.396-81.518l-87.271-4.651l22.521-84.456l-67.749-55.08l67.749-55.08l-22.46-84.395 l87.271-4.651l31.396-81.519l73.256,47.491l73.317-47.552l31.396,81.519l87.271,4.651l-22.521,84.456l67.748,55.08l-67.748,55.08 l22.46,84.395L407.959,447.372z M412.06,223.87L223.87,412.06l-29.437-29.438l188.189-188.189L412.06,223.87z M239.782,291.251 c28.397,0,51.469-23.072,51.469-51.469s-23.072-51.469-51.469-51.469s-51.469,23.072-51.469,51.469 S211.446,291.251,239.782,291.251z M239.782,229.929c5.447,0,9.853,4.406,9.853,9.853s-4.406,9.853-9.853,9.853 s-9.853-4.406-9.853-9.853S234.335,229.929,239.782,229.929z M366.711,315.241c-28.397,0-51.47,23.072-51.47,51.47 c0,28.396,23.072,51.469,51.47,51.469c28.396,0,51.469-23.072,51.469-51.469C418.18,338.313,395.046,315.241,366.711,315.241z M366.711,376.563c-5.447,0-9.854-4.406-9.854-9.853c0-5.447,4.406-9.854,9.854-9.854c5.446,0,9.853,4.406,9.853,9.854 C376.563,372.157,372.157,376.563,366.711,376.563z" />
                        </g>
                      </g>
                    </svg>
                    <span className="max-xl:hidden group-hover:text-indigo-500">
                      Tax Advice
                    </span>
                  </li>
                </a>

                <a
                  className="group flex hover:bg-gradient-to-r from-indigo-100 to-white w-full mb-2"
                  href=""
                >
                  <div className="bar my-auto invisible rounded-full w-1 h-[90%] bg-indigo-400 group-hover:visible"></div>
                  <li className="flex gap-3 pl-4 leading-[60px] items-center max-xl:py-[0.97rem]">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        <path
                          opacity="0.15"
                          d="M4 8C4 6.89543 4.89543 6 6 6H18C19.1046 6 20 6.89543 20 8V12C20 13.1046 19.1046 14 18 14H6C4.89543 14 4 13.1046 4 12V8Z"
                          fill="#292D32"
                        />
                        <path
                          d="M12 14V12M12 14V16M12 14H18C19.1046 14 20 13.1046 20 12M12 14H6C4.89543 14 4 13.1046 4 12M20 12V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V12M20 12V8C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8V12M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6"
                          stroke="#292D32"
                          className="group-hover:stroke-indigo-500"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                    <span className="max-xl:hidden group-hover:text-indigo-500">
                      Accounting
                    </span>
                  </li>
                </a>

                <a
                  className="group flex hover:bg-gradient-to-r from-indigo-100 to-white w-full mb-2"
                  href=""
                >
                  <div className="bar my-auto invisible rounded-full w-1 h-[90%] bg-indigo-400 group-hover:visible"></div>
                  <li className="flex gap-3 pl-4 leading-[60px] items-center max-xl:py-[0.97rem]">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.83333 11.8333C8.44167 11.8333 9.75 10.525 9.75 8.91667C9.75 7.30833 8.44167 6 6.83333 6C5.225 6 3.91667 7.30833 3.91667 8.91667C3.91667 10.525 5.225 11.8333 6.83333 11.8333ZM21 15.3333V12.8333H23.5V11.1667H21V8.66666H19.3333V11.1667H16.8333V12.8333H19.3333V15.3333H21ZM6.83333 13.2917C4.88333 13.2917 1 14.2667 1 16.2083V17.6667H12.6667V16.2083C12.6667 14.2667 8.78333 13.2917 6.83333 13.2917ZM6.83333 14.9583C5.34166 14.9583 3.65 15.5167 2.95 16H10.7167C10.0167 15.5167 8.325 14.9583 6.83333 14.9583ZM8.08333 8.91667C8.08333 8.225 7.525 7.66667 6.83333 7.66667C6.14167 7.66667 5.58333 8.225 5.58333 8.91667C5.58333 9.60833 6.14167 10.1667 6.83333 10.1667C7.525 10.1667 8.08333 9.60833 8.08333 8.91667ZM11 11.8333C12.6083 11.8333 13.9167 10.525 13.9167 8.91667C13.9167 7.30833 12.6083 6 11 6C10.8 6 10.6 6.01667 10.4083 6.05833C11.0417 6.84167 11.4167 7.83333 11.4167 8.91667C11.4167 10 11.025 10.9833 10.3917 11.7667C10.5917 11.8083 10.7917 11.8333 11 11.8333ZM14.3333 16.2083C14.3333 15.075 13.7667 14.1917 12.9333 13.5167C14.8 13.9083 16.8333 14.8 16.8333 16.2083V17.6667H14.3333V16.2083Z"
                          fill="#292D32"
                          className="group-hover:fill-indigo-500"
                        />
                      </g>
                    </svg>
                    <span className="max-xl:hidden group-hover:text-indigo-500">
                      Recruitement
                    </span>
                  </li>
                </a>

                <a
                  className="group flex hover:bg-gradient-to-r from-indigo-100 to-white w-full mb-2"
                  href=""
                >
                  <div className="bar my-auto invisible rounded-full w-1 h-[90%] bg-indigo-400 group-hover:visible"></div>
                  <li className="flex gap-3 pl-4 leading-[60px] items-center max-xl:py-[0.97rem]">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 30 30"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                      fill="#292D32"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        <defs> </defs>
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                          sketch:type="MSPage"
                        >
                          <g
                            id="Icon-Set"
                            sketch:type="MSLayerGroup"
                            transform="translate(-101.000000, -360.000000)"
                            fill="#292D32"
                            className="group-hover:fill-indigo-500"
                          >
                            <path
                              d="M128.52,381.134 L127.528,382.866 C127.254,383.345 126.648,383.508 126.173,383.232 L123.418,381.628 C122.02,383.219 120.129,384.359 117.983,384.799 L117.983,387 C117.983,387.553 117.54,388 116.992,388 L115.008,388 C114.46,388 114.017,387.553 114.017,387 L114.017,384.799 C111.871,384.359 109.98,383.219 108.582,381.628 L105.827,383.232 C105.352,383.508 104.746,383.345 104.472,382.866 L103.48,381.134 C103.206,380.656 103.369,380.044 103.843,379.769 L106.609,378.157 C106.28,377.163 106.083,376.106 106.083,375 C106.083,373.894 106.28,372.838 106.609,371.843 L103.843,370.232 C103.369,369.956 103.206,369.345 103.48,368.866 L104.472,367.134 C104.746,366.656 105.352,366.492 105.827,366.768 L108.582,368.372 C109.98,366.781 111.871,365.641 114.017,365.201 L114.017,363 C114.017,362.447 114.46,362 115.008,362 L116.992,362 C117.54,362 117.983,362.447 117.983,363 L117.983,365.201 C120.129,365.641 122.02,366.781 123.418,368.372 L126.173,366.768 C126.648,366.492 127.254,366.656 127.528,367.134 L128.52,368.866 C128.794,369.345 128.631,369.956 128.157,370.232 L125.391,371.843 C125.72,372.838 125.917,373.894 125.917,375 C125.917,376.106 125.72,377.163 125.391,378.157 L128.157,379.769 C128.631,380.044 128.794,380.656 128.52,381.134 L128.52,381.134 Z M130.008,378.536 L127.685,377.184 C127.815,376.474 127.901,375.749 127.901,375 C127.901,374.252 127.815,373.526 127.685,372.816 L130.008,371.464 C130.957,370.912 131.281,369.688 130.733,368.732 L128.75,365.268 C128.203,364.312 126.989,363.983 126.041,364.536 L123.694,365.901 C122.598,364.961 121.352,364.192 119.967,363.697 L119.967,362 C119.967,360.896 119.079,360 117.983,360 L114.017,360 C112.921,360 112.033,360.896 112.033,362 L112.033,363.697 C110.648,364.192 109.402,364.961 108.306,365.901 L105.959,364.536 C105.011,363.983 103.797,364.312 103.25,365.268 L101.267,368.732 C100.719,369.688 101.044,370.912 101.992,371.464 L104.315,372.816 C104.185,373.526 104.099,374.252 104.099,375 C104.099,375.749 104.185,376.474 104.315,377.184 L101.992,378.536 C101.044,379.088 100.719,380.312 101.267,381.268 L103.25,384.732 C103.797,385.688 105.011,386.017 105.959,385.464 L108.306,384.099 C109.402,385.039 110.648,385.809 112.033,386.303 L112.033,388 C112.033,389.104 112.921,390 114.017,390 L117.983,390 C119.079,390 119.967,389.104 119.967,388 L119.967,386.303 C121.352,385.809 122.598,385.039 123.694,384.099 L126.041,385.464 C126.989,386.017 128.203,385.688 128.75,384.732 L130.733,381.268 C131.281,380.312 130.957,379.088 130.008,378.536 L130.008,378.536 Z M116,378 C114.357,378 113.025,376.657 113.025,375 C113.025,373.344 114.357,372 116,372 C117.643,372 118.975,373.344 118.975,375 C118.975,376.657 117.643,378 116,378 L116,378 Z M116,370 C113.261,370 111.042,372.238 111.042,375 C111.042,377.762 113.261,380 116,380 C118.739,380 120.959,377.762 120.959,375 C120.959,372.238 118.739,370 116,370 L116,370 Z"
                              id="settings"
                              sketch:type="MSShapeGroup"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span className="max-xl:hidden group-hover:text-indigo-500">
                      Settings
                    </span>
                  </li>
                </a>

                <a
                  className="group flex hover:bg-gradient-to-r from-indigo-100 to-white w-full mb-2"
                  href=""
                >
                  <div className="bar my-auto invisible rounded-full w-1 h-[90%] bg-indigo-400 group-hover:visible"></div>
                  <li className="flex gap-3 pl-4 leading-[60px] items-center max-xl:py-[0.97rem]">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#292D32"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M3 11.3C3 6.32949 7.02944 2.30005 12 2.30005C16.9706 2.30005 21 6.32949 21 11.3M3 11.3H5C6.10457 11.3 7 12.1955 7 13.3V15.3C7 16.4046 6.10457 17.3 5 17.3M3 11.3V16.3C3 16.8523 3.44772 17.3 4 17.3H5M21 11.3H19C17.8954 11.3 17 12.1955 17 13.3V15.3C17 16.4046 17.8954 17.3 19 17.3H20C20.5523 17.3 21 16.8523 21 16.3V11.3ZM5 17.3V18.3C5 19.4046 5.89543 20.3 7 20.3H9M9 20.3C9 21.1285 9.67157 21.8 10.5 21.8H11.5C12.3284 21.8 13 21.1285 13 20.3C13 19.4716 12.3284 18.8 11.5 18.8H10.5C9.67157 18.8 9 19.4716 9 20.3Z"
                          className="group-hover:stroke-indigo-500"
                          stroke="#292D32"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </g>
                    </svg>
                    <span className="max-xl:hidden group-hover:text-indigo-500">
                      Help & Support
                    </span>
                  </li>
                </a>
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

                    <a
                      href=""
                      className="group flex gap-3 justify-center items-center py-3 px-10 bg-violet-600 rounded-lg hover:bg-violet-500"
                    >
                      <span className="text-xs text-white whitespace-nowrap">
                        Upgrade Pro
                      </span>
                      <svg
                        className="w-4 h-4"
                        viewBox="0 -6.5 36 36"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        fill="#000000"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0" />

                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />

                        <g id="SVGRepo_iconCarrier">
                          <g
                            id="icons"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              id="ui-gambling-website-lined-icnos-casinoshunter"
                              transform="translate(-212.000000, -159.000000)"
                              fill="#ffffff"
                              fill-rule="nonzero"
                            >
                              <g
                                id="square-filled"
                                transform="translate(50.000000, 120.000000)"
                              >
                                <path
                                  d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z"
                                  id="right-arrow"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>

                <a
                  href=""
                  className="group logout ps-5 rounded-xl h-fit flex gap-3 items-center leading-[50px] hover:bg-red-50"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M16 17L21 12M21 12L16 7M21 12H9M12 17C12 17.93 12 18.395 11.8978 18.7765C11.6204 19.8117 10.8117 20.6204 9.77646 20.8978C9.39496 21 8.92997 21 8 21H7.5C6.10218 21 5.40326 21 4.85195 20.7716C4.11687 20.4672 3.53284 19.8831 3.22836 19.1481C3 18.5967 3 17.8978 3 16.5V7.5C3 6.10217 3 5.40326 3.22836 4.85195C3.53284 4.11687 4.11687 3.53284 4.85195 3.22836C5.40326 3 6.10218 3 7.5 3H8C8.92997 3 9.39496 3 9.77646 3.10222C10.8117 3.37962 11.6204 4.18827 11.8978 5.22354C12 5.60504 12 6.07003 12 7"
                        stroke="#292D32"
                        className="group-hover:stroke-red-600"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>

                  <span className="max-xl:hidden group-hover:text-red-600">
                    Log Out
                  </span>
                </a>
              </div>
            </div>
          </nav>

          <input className="md:hidden" type="checkbox" id="check" />
          <div className="mobile-drop fixed flex h-screen w-screen z-10">
            <div className="w-[40%] h-full overflow-y-scroll border-gray-300 py-5 px-6 text-center left-0 top-0 bg-white shadow-lg w-screen text-sm">
              <div className="w-full flex gap-3 items-center mt-2 mb-14">
                <img
                  className="h-6 w-6"
                  src="/dashboard-layout-svgrepo-com.svg"
                  alt=""
                />
                <h1 className="font-bold text-2xl">PayTide</h1>
              </div>

              <ul className="flex flex-col justify-center gap-12">
                <a href="">
                  <li>
                    <div className="flex items-center gap-3">
                      <img
                        className="w-5"
                        src="/dashboard-svgrepo-com.svg"
                        alt=""
                      />
                      <span className="text-left">Dashboard</span>
                    </div>
                  </li>
                </a>

                <a href="">
                  <li>
                    <div className="flex items-center gap-3">
                      <img
                        className="w-5"
                        src="/people-svgrepo-com.svg    "
                        alt=""
                      />
                      <span className="text-left">All Employees</span>
                    </div>
                  </li>
                </a>

                <a href="">
                  <li>
                    <div className="flex items-center gap-3">
                      <img
                        className="w-5"
                        src="/clipboard-text-svgrepo-com.svg  "
                        alt=""
                      />
                      <span className="text-left">Checklist</span>
                    </div>
                  </li>
                </a>

                <a href="">
                  <li>
                    <div className="flex items-center gap-3">
                      <img
                        className="w-5"
                        src="/dollar-sign-round-svgrepo-com.svg"
                        alt=""
                      />
                      <span className="text-left">Payroll</span>
                    </div>
                  </li>
                </a>

                <a href="">
                  <li>
                    <div className="flex items-center gap-3">
                      <img
                        className="w-5"
                        src="/trend-up-svgrepo-com.svg"
                        alt=""
                      />
                      <span className="text-left">Expenses Analytics</span>
                    </div>
                  </li>
                </a>

                <a href="">
                  <li>
                    <div className="flex items-center gap-3">
                      <img
                        className="w-5"
                        src="/percentage-label-svgrepo-com.svg"
                        alt=""
                      />
                      <span className="text-left">Tax Advice</span>
                    </div>
                  </li>
                </a>

                <a href="">
                  <li>
                    <div className="flex items-center gap-3">
                      <img
                        className="w-5"
                        src="/suitcase-svgrepo-com.svg"
                        alt=""
                      />
                      <span className="text-left">Accounting</span>
                    </div>
                  </li>
                </a>

                <a href="">
                  <li>
                    <div className="flex items-center gap-3">
                      <img
                        className="w-5"
                        src="/group-add-people-svgrepo-com.svg"
                        alt=""
                      />
                      <span className="text-left">Recruitment</span>
                    </div>
                  </li>
                </a>

                <a href="">
                  <li>
                    <div className="flex items-center gap-3">
                      <img
                        className="w-5"
                        src="/settings-svgrepo-com.svg"
                        alt=""
                      />
                      <span className="text-left">Settings</span>
                    </div>
                  </li>
                </a>

                <a href="">
                  <li>
                    <div className="flex items-center gap-3">
                      <img
                        className="w-5"
                        src="/headphones-alt-2-svgrepo-com.svg  "
                        alt=""
                      />
                      <span className="text-left">Help & Support</span>
                    </div>
                  </li>
                </a>
              </ul>
              <div className="logout h-[24%] w-full flex items-end">
                <a
                  href=""
                  className="group w-full logout rounded-xl h-fit flex gap-3 items-center leading-[50px] hover:bg-red-50"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M16 17L21 12M21 12L16 7M21 12H9M12 17C12 17.93 12 18.395 11.8978 18.7765C11.6204 19.8117 10.8117 20.6204 9.77646 20.8978C9.39496 21 8.92997 21 8 21H7.5C6.10218 21 5.40326 21 4.85195 20.7716C4.11687 20.4672 3.53284 19.8831 3.22836 19.1481C3 18.5967 3 17.8978 3 16.5V7.5C3 6.10217 3 5.40326 3.22836 4.85195C3.53284 4.11687 4.11687 3.53284 4.85195 3.22836C5.40326 3 6.10218 3 7.5 3H8C8.92997 3 9.39496 3 9.77646 3.10222C10.8117 3.37962 11.6204 4.18827 11.8978 5.22354C12 5.60504 12 6.07003 12 7"
                        stroke="#292D32"
                        className="group-hover:stroke-red-600"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>

                  <span className="group-hover:text-red-600">Log Out</span>
                </a>
              </div>
            </div>
            <label
              htmlFor="check"
              className="touch w-full h-full cursor-pointer"
            >
              <div></div>
            </label>
          </div>

          <div className="right min-h-fit w-full col-span-6 col-start-2F">
            <header className="header w-[full] flex items-center border-b-2 border-gray-300 px-7 py-5 justify-between">
              <label
                htmlFor="check"
                className="menu h-fit md:hidden cursor-pointer"
              >
                <img className="w-10 my-auto" src="/burger-menu.svg" alt="" />
              </label>

              <div className="big-head flex justify-between w-full max-md:justify-end">
                <div className="transition-all duration-100 border-2 rounded-lg flex items-center gap-3 px-3.5 py-2.5 max-md:hidden hover:border-violet-400">
                  <img
                    className="w-6"
                    src="/search-alt-svgrepo-com.svg"
                    alt=""
                  />
                  <input
                    className="w-[287px] leading-5 flex justify-center text-gray-400 outline-none max-[856px]:w-fit"
                    type="text"
                    placeholder="Search something here"
                  />
                </div>

                <div className="flex gap-8 max-md:gap-3">
                  <a
                    href=""
                    className="transition-all duration-100 flex items-center py-1 px-2.5 border-2 rounded-full max-md:px-2.5 hover:border-violet-500"
                  >
                    <img
                      className="w-6"
                      src="/notification-svgrepo-com.svg"
                      alt=""
                    />
                  </a>

                  <div className="seperator border-[1px]"></div>

                  <div className="group flex gap-1">
                    <a href="" className="flex relative gap-2 items-center">
                      <img
                        src="/Daco_4205588.png"
                        className="w-12 h-12"
                        alt=""
                      />

                      <p className="max-md:hidden">
                        Ishan C <br />
                        <span className="font-medium text-gray-400">
                          ishanc@mail.com
                        </span>
                      </p>

                      <a
                        href=""
                        className="dropdown flex items-center gap-2 opacity-0 translate-y-[50px] transition-all duration-100 drop-shadow-sm rounded-lg group-hover:opacity-100 fixed p-4 bg-gray-100 max-md:hidden"
                      >
                        <img
                          className="w-5 h-5"
                          src="/settings-svgrepo-com.svg"
                          alt=""
                        />
                        Manage your accounts
                      </a>
                    </a>

                    <img
                      src="/down-arrow-5-svgrepo-com.svg  "
                      alt=""
                      className="w-8 "
                    />
                  </div>
                </div>
              </div>
            </header>

            <div className="main h-full bg-gray-100">
              <div className="wrapper h-full px-8 py-12">
                <div className="head flex justify-between ">
                  <h2 className="font-bold text-5xl leading-10">
                    Hi There, <br />
                    <span className="font-regular text-lg text-gray-400">
                      Welcome To Paytide.
                    </span>
                  </h2>

                  <a
                    href=""
                    className="group h-fit flex gap-3 justify-center items-center py-3 px-10 bg-violet-600 rounded-xl py-3.5 px-7 max-md:p-3.5 hover:bg-violet-500"
                  >
                    <span className=" text-white whitespace-nowrap max-md:hidden">
                      Create Reports
                    </span>
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M6 12H18M12 6V18"
                          stroke="#ffffff"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                  </a>
                </div>

                <div className="cards mt-9">
                  <div className="top grid grid-cols-4 grid-rows-1 gap-4 max-[1024px]:grid-cols-2 max-[320px]:grid-cols-1">
                    <div className="balance flex flex-col gap-3 bg-white p-5 rounded-xl">
                      <div className="head flex gap-2 items-center">
                        <img
                          src="/money.svg"
                          alt=""
                          className="w-6 rounded-full"
                        />
                        <h3 className="text-lg max-sm:text-base">
                          Company Balance
                        </h3>
                      </div>

                      <div className="seperator border-[1px] w-full"></div>

                      <p className="body font-bold text-2xl leading-7 sm: max-sm:text-lg break-all">
                        $123,350,00.56 <br />
                        <span className="font-regular text-base text-gray-400">
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
                        <h3 className="text-lg max-sm:text-base">
                          Company Expense
                        </h3>
                      </div>

                      <div className="seperator border-[1px] w-full"></div>

                      <p className="body font-bold text-2xl leading-7 max-sm:text-lg break-all">
                        $55,000.00 <br />
                        <span className="font-regular text-base text-gray-400">
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
                        <h3 className="text-lg max-sm:text-base">
                          Upcoming Salary Amount
                        </h3>
                      </div>

                      <div className="seperator border-[1px] w-full"></div>

                      <p className="body font-bold text-2xl leading-7 max-sm:text-lg break-all">
                        $4,350,00.89 <br />
                        <span className="font-regular text-base text-gray-400">
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
                        <h3 className="text-lg max-sm:text-base">
                          Upcoming Salary Date
                        </h3>
                      </div>

                      <div className="seperator border-[1px] w-full"></div>

                      <p className="body font-bold text-2xl leading-7 max-sm:text-lg break-all">
                        July 5th, 2024 <br />
                        <span className="font-regular text-base text-gray-400">
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

                  <div className="bottom mt-8 grid grid-cols-3 grid-rows-3 gap-6 max-md:grid-cols-1 max-xl:grid-rows-2 max-xl:grid-cols-2 max-md:grid-rows-2 max-md:mb-20">
                    <div className="list bg-white py-5 px-7 rounded-xl col-span-2 row-span-3 flex flex-col justify-around max-xl:hidden">
                      <div className="head flex justify-between items-center">
                        <div className="transition-all duration-100 h-fit border-2 rounded-xl flex items-center gap-3 px-3.5 py-2.5 max-md:hidden hover:border-violet-400">
                          <img
                            className="w-6"
                            src="/search-alt-svgrepo-com.svg"
                            alt=""
                          />
                          <input
                            className="text-gray-400 outline-none w-fit"
                            type="text"
                            placeholder="Search something here"
                          />
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
                      <div className="wrapper max-md:mt-5">
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
                        <span className="text-base font-regular text-green-600">
                          Connected
                        </span>
                      </p>

                      <div className="flex flex-col justify-between border-2 px-4 py-3 rounded-2xl max-sm:items-center md:hidden max-md:mb-5">
                        <div className="client flex gap-6 items-center mb-4 max-sm:flex-col">
                          <img
                            className="w-20"
                            src="/deposit-safe-savings-svgrepo-com.svg"
                            alt=""
                          />
                          <div className="text font-bold flex flex-col">
                            <p className="body text-lg font-bold">
                              Zenith Bank Account <br />
                              <span className="text-base font-regular text-green-600">
                                Connected
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="client h-fit bg-white py-8 px-7 rounded-xl row-span-2 flex flex-col justify-between">
                      <div className="head flex justify-between mb-6">
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

                        <div className="back flex flex-col items-end max-xl:hidden">
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
                            <span className="font-regular text-gray-600">
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
