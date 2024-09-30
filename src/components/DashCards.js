import React from "react";

function DashCards() {
  return (
    <>
      {/* <div  className="flex mb-6  mt-3">
        <div style={{backgroundColor: '#00072D',}} className="p-4  bg-white shadow-lg rounded-2xl w-full dark:bg-gray-800 m-6">
          <div className="flex items-center ">
            <span className="relative w-4 h-4 p-2 bg-green-500 rounded-full">
              <svg
                width="20"
                fill="currentColor"
                height="20"
                className="absolute h-2 text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
              </svg>
            </span>
            <p className="ml-2 text-gray-700 text-md dark:text-gray-50">requests</p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="my-4 text-4xl font-bold text-left text-gray-800 dark:text-white">
              36K
            </p>
          </div>
        </div>
        <div style={{backgroundColor: '#00072D',}} className="p-4  bg-white shadow-lg rounded-2xl w-full dark:bg-gray-800 m-6">
          <div className="flex items-center">
            <span className="relative w-4 h-4 p-2 bg-red-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                                className="absolute h-2.5 text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"

              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                />
              </svg>
            </span>

            <p className="ml-2 text-gray-700 text-md dark:text-gray-50">rejected</p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="my-4 text-4xl font-bold text-left text-gray-800 dark:text-white">
              36K
            </p>
          </div>
        </div>
        <div style={{backgroundColor: '#00072D',}} className="p-4  bg-white shadow-lg rounded-2xl w-full dark:bg-gray-800 m-6">
          <div className="flex items-center">
            <span className="relative w-4 h-4 p-2 bg-green-500 rounded-full">
              <svg
                width="20"
                fill="currentColor"
                height="20"
                className="absolute h-2 text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
              </svg>
            </span>
            <p className="ml-2 text-gray-700 text-md dark:text-gray-50">requests</p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="my-4 text-4xl font-bold text-left text-gray-800 dark:text-white">
              36K
            </p>
          </div>
        </div>
      </div>
       */}
      <div className="flex m-5 ml-96">
        <div style={{backgroundColor: '#00072D',}} className="shadow-lg rounded-2xl bg-white dark:bg-gray-800 p-4 m-5">
          <div className="flex-row gap-4 flex justify-center items-center">
            <div className="flex-shrink-0">
              <a href="#" className="relative block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  classNameName="w-6 h-6 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className=" flex flex-col">
              <span style={{fontFamily:'meshed'}} className="text-lg font-medium text-gray-600 dark:text-white">
                Rejected
              </span>
              <span className="text-xs text-gray-400">7</span>
            </div>
          </div>
        </div>
        <div style={{backgroundColor: '#00072D',}} className="shadow-lg rounded-2xl bg-white dark:bg-gray-800 p-4 m-5">
          <div className="flex-row gap-4 flex justify-center items-center">
            <div className="flex-shrink-0">
              <a href="#" className="relative block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  classNameName="w-6 h-6 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className=" flex flex-col">
              <span style={{fontFamily:'meshed'}} className="text-lg font-medium text-gray-600 dark:text-white">
                Approved
              </span>
              <span className="text-xs text-gray-400">12</span>
            </div>
          </div>
        </div>
        <div style={{backgroundColor: '#00072D',}} className="shadow-lg rounded-2xl bg-white dark:bg-gray-800 p-4 m-5">
          <div className="flex-row gap-4 flex justify-center items-center">
            <div className="flex-shrink-0">
              <a href="#" className="relative block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  classNameName="w-6 h-6 text-white"
                >
                  <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
                  <path
                    fillRule="evenodd"
                    d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className=" flex flex-col">
              <span style={{fontFamily:'meshed'}} className="text-lg font-medium text-gray-600 dark:text-white">
                Pending
              </span>
              <span className="text-xs text-gray-400">3</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashCards;
