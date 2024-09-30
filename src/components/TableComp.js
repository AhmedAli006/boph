import React from "react";
import DashCards from "./DashCards";

function Table() {
  const data =[
  {
    "patientId": 1,
    "name": "John Doe",
    "EMR": "123456789",
    "dateTime": "2022-01-01 10:00:00",
    "status": "Active"
  },
  {
    "patientId": 2,
    "name": "Jane Smith",
    "EMR": "987654321",
    "dateTime": "2022-01-05 14:30:00",
    "status": "Inactive"
  },
  {
    "patientId": 3,
    "name": "Bob Johnson",
    "EMR": "111111111",
    "dateTime": "2022-01-10 08:00:00",
    "status": "Active"
  },
  {
    "patientId": 4,
    "name": "Alice Brown",
    "EMR": "222222222",
    "dateTime": "2022-01-12 12:00:00",
    "status": "Inactive"
  },
  {
    "patientId": 5,
    "name": "Mike Davis",
    "EMR": "333333333",
    "dateTime": "2022-01-15 16:00:00",
    "status": "Active"
  },
  {
    "patientId": 6,
    "name": "Emily Taylor",
    "EMR": "444444444",
    "dateTime": "2022-01-18 10:30:00",
    "status": "Inactive"
  },
  {
    "patientId": 7,
    "name": "Sarah Lee",
    "EMR": "555555555",
    "dateTime": "2022-01-20 14:00:00",
    "status": "Active"
  },
  {
    "patientId": 8,
    "name": "Kevin White",
    "EMR": "666666666",
    "dateTime": "2022-01-22 12:30:00",
    "status": "Inactive"
  },
  {
    "patientId": 9,
    "name": "Lisa Nguyen",
    "EMR": "777777777",
    "dateTime": "2022-01-25 16:30:00",
    "status": "Active"
  },
  {
    "patientId": 10,
    "name": "David Kim",
    "EMR": "888888888",
    "dateTime": "2022-01-28 10:00:00",
    "status": "Inactive"
  }
]
  return (
    <>
      <div className=" max-w-5xl px-2 mx-auto sm:px-8">
        {/* <DashCards /> */}

        <div className="flex flex-row items-center  justify-center w-full p-2  shadow-xs">
          <div className="hidden ml-8 text-lg text-black md:flex"></div>
          <span style={{ width: "460px"}} className="flex h-10 text-sm  rounded-full cursor-pointer ">
            <input
              type="search"
              name="serch"
              placeholder="Search"
              className="flex-grow  px-4 text-sm rounded-l-full border border-gray-500 rounded-r-full focus:outline-none"
            />
          </span>
          <div className="flex flex-row-reverse ml-4 mr-4  ">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="items-center w-full min-h-screen inline-block  ">
          <div className="w-full  px-5 mx-auto lg:container ">
            <div className="max-w-screen-lg mx-auto ">
              <div className="min-w-full my-4 overflow-x-auto border rounded-md shadow-sm dark:border-gray-700">
                <table className="min-w-full bg-white rounded whitespace-nowrap">
                  <thead className="border-b bg-gray-50">
                    <tr>
                    <th className="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                      Patient ID
                    </th>
                    <th className="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                      Name
                    </th>
                    <th className="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                      EMR
                    </th>
                    <th className="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                      Date and Time
                    </th>
                    <th className="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                      Status
                    </th>
                  </tr>
                </thead>
                  <tbody className="text-sm bg-white divide-y divide-gray-200">
                   {data.map((item, index) => (
                    <tr key={index}>
                      <td className="px-3 py-4 text-gray-600">{item.patientId}</td>
                      <td className="px-3 py-4">{item.name}</td>
                      <td className="px-3 py-4">{item.EMR}</td>
                      <td className="px-3 py-4">{item.dateTime}</td>
                      <td className="px-3 py-4">
                        <span
                          className={`px-4 py-1 text-sm rounded-full ${
                            item.status === "Active" ? "bg-green-50 text-green-500" : "bg-red-50 text-red-500"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
