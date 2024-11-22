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
        const record = JSON.parse(user.Record.patientInformation);
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

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filtered data based on search query
  const filteredData = emrData.filter(patient => {
   
    const doctorInfo = JSON.parse(patient.Record.doctor);
    return (
     
      doctorInfo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctorInfo.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.Record.chiefComplaint.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <>
      <Sidebar />
      <NavbarComp />

      <div style={{ marginLeft: 250 }} className='flex justify-center'>
        <div className="items-center w-full min-h-screen inline-block">
          <div className="w-full px-5 mx-auto lg:container">
            <div className="mx-auto">
              <div className="my-4">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="border rounded-md p-2 w-full"
                />
              </div>
              <div className="w-full my-4 overflow-x-auto border rounded-md shadow-sm dark:border-gray-700">
                <table className="min-w-full bg-white rounded whitespace-nowrap">
                  <thead className="border-b bg-gray-50">
                    <tr>
                      <th className="py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                        EMR ID
                      </th>
                      <th className="py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                        Doctor
                      </th>
                      <th className="py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                        Specialization
                      </th>
                      <th className="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                        Date of issue
                      </th>
                      <th className="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                        Complaint
                      </th>
                      <th className="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm bg-white divide-y divide-gray-200">
                    {filteredData.map((patient, index) => {
                
                      const complaint = JSON.parse(patient.Record.chiefComplaint)
                      const doctorInfo = JSON.parse(patient.Record.doctor);
                      const dateOfIssue = JSON.parse(patient.Record.progressNotes);
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