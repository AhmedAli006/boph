import React, { useEffect, useState } from 'react';
import Sidebar from '../components/SidebarComp';
import NavbarComp from '../components/NavbarComp';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function History() {
  const [emrData, setEmrData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchEmr = async () => {
    try {
      const result = await axios.get('http://localhost:5000/api/getallemr');
      const users = result.data.response; // Assuming response is an array of EMR records
      console.log(users);

      // Filter for EMR records that match the patient ID
      const filteredPatients = users.filter(user => {
        const record = user.Record.patientInformation;
        return user.Record.docType === "EMR" && record.patientId === id;
      });

      console.log("Filtered patients for selection:", filteredPatients);
      setEmrData(filteredPatients);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchEmr();
  }, []);



  // Filtered data based on search query
  const filteredData = emrData.filter(patient => {
   
    const doctorInfo = JSON.parse(patient.Record.doctor);
    
    return (
     
      doctorInfo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctorInfo.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.Record.chiefComplaint.chiefComplaint.toLowerCase().includes(searchQuery.toLowerCase()) 
    );
  });

  return (
    <>
      {/* <Sidebar /> */}
      <NavbarComp />

      <div className='flex justify-center'>
        <div className="items-center w-full min-h-screen inline-block">
          <div className="w-full px-5 mx-auto lg:container">
            <div className="mx-auto">
             <div className="flex flex-row items-center justify-center w-full p-2 mt-3 shadow-xs">
          <span style={{ width: "1080px" ,height:50}} className="flex h-10 text-sm rounded-full cursor-pointer ">
            <input
              type="search"
              name="search"
              placeholder="Search by name, email, or phone"
              className="flex-grow px-4 text-sm rounded-l-full border border-gray-500 rounded-r-full focus:outline-none"
              value={searchQuery} // Bind the input value to searchQuery
              onChange={(e) =>  setSearchQuery(e.target.value)} // Update searchQuery on input change
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
              <div className="w-full my-4 overflow-x-auto border rounded-md shadow-sm dark:border-gray-700">
                <table className="min-w-full bg-white rounded whitespace-nowrap">
                  <thead className="border-b bg-gray-50">
                    <tr>
                      <th className="py-3 pl-5 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                        EMR ID
                      </th>
                      <th className="py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                        Doctor
                      </th>
                      <th className="py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                        Specialization
                      </th>
                      <th className=" py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                        Date of issue
                      </th>
                      <th className=" py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                        Complaint
                      </th>
                      <th className=" py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm bg-white divide-y divide-gray-200">
                    {filteredData.map((patient, index) => {
                
                      const complaint = patient.Record.chiefComplaint
                      const doctorInfo = JSON.parse(patient.Record.doctor);
                      const dateOfIssue = patient.Record.progressNotes;
                      return (
                        <tr key={index}>
                          <td className="px-3 py-4">{patient.Record.id.slice(0, 8)}...</td>
                          <td className="px-3 py-4">{doctorInfo.name}</td>
                          <td className="px-3 py-4">{doctorInfo.specialization}</td>
                          <td className="px-3 py-4">{dateOfIssue.dateOfIssue}</td>
                          <td className="px-3 py-4">{complaint.chiefComplaint}</td>
                          <td className="px-3 py-4">
                            <button
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                              onClick={() =>  navigate(`/emr/${patient.Record.id}`, { state: patient.Record })}
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      );
                    })}
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

export default History;