import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Table() {
  const [patients, setPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const result = await axios.get('http://localhost:5000/api/getusers');
      const users = JSON.parse(result.data.response);
      console.log(users);
      const filteredPatients = users.filter(user => user.Record.docType === "User" && user.Record.stakeholder === "patient");
      console.log("Filtered patients for selection:", filteredPatients);
      setPatients(filteredPatients);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Filter patients based on search query
  const filteredPatients = patients.filter(patient => {
    const { name, email, phone } = patient.Record;
    return (
      name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      phone.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <>
      <div className="max-w-5xl px-2 mx-auto sm:px-8">
        <div className="flex flex-row items-center justify-center w-full p-2 shadow-xs">
          <span style={{ width: "460px" }} className="flex h-10 text-sm rounded-full cursor-pointer ">
            <input
              type="search"
              name="search"
              placeholder="Search by name, email, or phone"
              className="flex-grow px-4 text-sm rounded-l-full border border-gray-500 rounded-r-full focus:outline-none"
              value={searchQuery} // Bind the input value to searchQuery
              onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
            />
          </span>
          <div className="flex flex-row-reverse ml-4 mr-4">
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

        <div className="items-center w-full min-h-screen inline-block">
          <div className="w-full px-5 mx-auto lg:container">
            <div className="mx-auto">
              <div className="w-full my-4 overflow-x-auto border rounded-md shadow-sm dark:border-gray-700">
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
                        Email
                      </th>
                      <th className="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                        Phone
                      </th>
                      <th className="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                        Sex
                      </th>
                      <th className="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                        History
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm bg-white divide-y divide-gray-200">
                    {filteredPatients.map((patient, index) => (
                      <tr key={index}>
                        <td className="px-3 py-4 text-gray-600">{patient.Record.id}</td>
                        <td className="px-3 py-4">{patient.Record.name}</td>
                        <td className="px-3 py-4">{patient.Record.email}</td>
                        <td className="px-3 py-4">{patient.Record.phone}</td>
                        <td className="px-3 py-4">{patient.Record.sex}</td>
                        <td className="px-3 py-4">
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() =>  navigate(`/history/${patient.Record.id}`)}
                          >
                            View
                          </button>
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