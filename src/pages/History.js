
import React, { useEffect, useState } from 'react';
import NavbarComp from '../components/NavbarComp';
import axios from 'axios';
import {  useNavigate, useParams } from 'react-router-dom';

function History() {
  const [emrData, setEmrData] = useState([]);
  const [patientInfo, setPatientInfo] = useState(null); // State to hold patient information
  const [searchQuery, setSearchQuery] = useState('');
  
  const { id } = useParams();

  const navigate = useNavigate();
  

  const fetchEmr = async () => {
    try {
      const result = await axios.get('http://localhost:5050/api/getallemr');
      const users = result.data.response; // Assuming response is an array of EMR records
      console.log(users);

      // Filter for EMR records that match the patient ID
      const filteredPatients = users.filter(user => {
        const record = user.Record.patientInformation;
        return user.Record.docType === "EMR" && record.id === id;
      });

      console.log("Filtered patients for selection:", filteredPatients);
      setEmrData(filteredPatients);
      if (filteredPatients.length > 0) {
        setPatientInfo(filteredPatients[0].Record.patientInformation); // Set patient info from the first EMR record
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
      const [patients, setPatients] = useState([]);
  

  const fetchUsers = async () => {
    try {
      const result = await axios.get('http://localhost:5050/api/getusers');
      const users = JSON.parse(result.data.response);
      const filteredPatients = users.filter(user => user.Record.docType === "User" && user.Record.id === id);
      setPatients(filteredPatients[0].Record);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
   

  useEffect(() => {
    fetchEmr();
    fetchUsers()
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
  const generateAge = (dateOfBirth) => {
  const birthDate = new Date(dateOfBirth);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  // Adjust age if the birthday hasn't occurred yet this year
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

  return (
    <>
      <NavbarComp />

      <div className='flex justify-center'>
        <div className="items-center w-full min-h-screen inline-block">
          <div className="w-full px-5 mx-auto lg:container">
            <div className="mx-auto">
      {/* Patient Information Section */}
              {patients && (
                <div className="p-2 mb-4 border rounded-md shadow-sm bg-gray-50 mt-5">
                  <h2 className="text-md font-semibold">Patient Information</h2>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <p><strong>Name:</strong> {patients.name}</p>
                    <p><strong>Patient ID:</strong> {patients.id}</p>
                    <p><strong>Date of Birth:</strong> {patients.dateOfBirth}</p>
                    <p><strong>Age:</strong> {generateAge(patients.dateOfBirth)}</p>
                    <p><strong>Sex:</strong> {patients.sex}</p>
                    <p><strong>Phone Number:</strong> {patients.phone}</p>
                    <p><strong>Email:</strong> {patients.email}</p>
                  </div>

                
                </div>
              )}
              {/* Search Bar */}
              <div className="flex flex-row items-center justify-center w-full p-2 mt-3 shadow-xs">
                <span style={{ width: "1080px", height: 50 }} className="flex h-10 text-sm rounded-full cursor-pointer ">
                  <input
                    type="search"
                    name="search"
                    placeholder="Search by name, email, or phone"
                    className="flex-grow px-4 text-sm rounded-l-full border border-gray-500 rounded-r-full focus:outline-none"
                    value={searchQuery} // Bind the input value to searchQuery
                    onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
                  />
                </span>
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
                      <th className="py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                        Date of issue
                      </th>
                      <th className="py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                        Complaint
                      </th>
                      <th className="py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                          {/* Create EMR Button */}
                  <div className="flex justify-center ">
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded text-sm"
                      onClick={() => navigate(`/upload/${patients.id}`,{state:patients})} // Adjust the path as needed
                    >
                      Create EMR
                    </button>
                  </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm bg-white divide-y divide-gray-200">
                    {filteredData.map((patient, index) => {
                      const complaint = patient.Record.chiefComplaint;
                      const doctorInfo = JSON.parse(patient.Record.doctor);
                      const dateOfIssue = patient.Record.progressNotes;
                      return (
                        <tr key={index}>
                          <td className="px-3 py-4">{patient.Record.id.slice(0, 8)}...</td>
                          <td className="px-3 py-4">{doctorInfo.name}</td>
                          <td className="px-3 py-4">{doctorInfo.specialization}</td>
                          <td className="px-3 py-4">{dateOfIssue.dateOfIssue}</td>
                          <td className="px-3 py-4">{complaint.chiefComplaint}</td>
                          <td className="px-3 py-4 text-center">
                            <button
                              className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded"
                              onClick={() => navigate(`/emr/${patient.Record.id}`, { state: patient.Record })}
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