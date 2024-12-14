// src/AdminPanel.js
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Ensure axios is imported
import Navbar from '../components/NavbarComp';
import SearchBar from '../components/SearchBar';

function AdminPanel() {

  const [patients, setPatients] = useState([]); // Initialize patients state
  const [loadingId, setLoadingId] = useState(null); // Track loading state for each button
const [searchQuery, setSearchQuery] = useState('');
  // Fetch users from the API
  const handleAccess = async (userId, action) => {
    const params = {
      id: userId,
      action: action
    };
    
    setLoadingId(userId); // Set loading state for the specific userId

    try {
      const result = await axios.put(`http://localhost:5050/api/updateUser/${userId}`, params);
      
      console.log("Changing user access:", result.data);
      // Optionally, you can refetch users to update the state
      fetchUsers();
    } catch (error) {
      console.error('Error changing user access:', error);
    } finally {
      setLoadingId(null); // Reset loading state
    }
  };

  const fetchUsers = async () => {
    try {
      const result = await axios.get('http://localhost:5050/api/getusers');
      const users = JSON.parse(result.data.response);
      console.log(users);
      const filteredPatients = users.filter(user => user.Record.docType === "User" && user.Record.stakeholder === "doctor");
      console.log("Filtered patients for selection:", filteredPatients);
      setPatients(filteredPatients);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Filter patients based on search term
  const filteredPatients = patients.filter(patient =>
    patient.Record.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.Record.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Count requests by status
  const totalPatients = filteredPatients.length;
  const approvedPatients = filteredPatients.filter(p => p.Record.status === 'approved').length;
  const pendingPatients = filteredPatients.filter(p => p.Record.status === 'pending').length;
  const rejectedPatients = filteredPatients.filter(p => p.Record.status === 'rejected').length;

  return (
    <>
      <Navbar />
      <div className="p-5 rounded-lg">
        {/* Card for patient statistics */}
        <div className="flex justify-around mb-5">
          <div className="bg-white border border-gray-300 rounded-lg p-4 text-center shadow">
            <h4 className="text-[#00072D]">Total Patients</h4>
            <p className="text-2xl font-bold text-[#00072D]">{totalPatients}</p>
          </div>
          <div className="bg-white border-l-4 border-green-500 rounded-lg p-4 text-center shadow">
            <h4 className="text-[#00072D]">Approved</h4>
            <p className="text-2xl font-bold text-[#00072D]">{approvedPatients}</p>
          </div>
          <div className="bg-white border-l-4 border-orange-500 rounded-lg p-4 text-center shadow">
            <h4 className="text-[#00072D]">Pending</h4>
            <p className="text-2xl font-bold text-[#00072D]">{pendingPatients}</p>
          </div>
          <div className="bg-white border-l-4 border-red-500 rounded-lg p-4 text-center shadow">
            <h4 className="text-[#00072D]">Rejected</h4>
            <p className="text-2xl font-bold text-[#00072D]">{rejectedPatients}</p>
          </div>
        </div>

        {/* Search bar */}
         <SearchBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    placeholder="Search by name or email..."
                />


        {/* Table for patients */}
        <table className="min-w-full rounded border ">
          <thead>
            <tr className="bg-[#00072D] text-white ">
              <th className="px-3 py-3 font-bold text-white uppercase align-middle">ID</th>
              <th className="px-3 py-3 font-bold text-white uppercase align-middle">Name</th>
              <th className="px-3 py-3 font-bold text-white uppercase align-middle">Email</th>
              <th className="px-3 py-3 font-bold text-white uppercase align-middle">Specialization</th>
              <th className="px-3 py-3 font-bold text-white uppercase align-middle">Status</th>
              <th className="px-3 py-3 font-bold text-white uppercase align-middle"> </th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map(patient => (
              <tr key={patient.Key}>
                <td className="px-3 py-3 text-[#00072D] text-left align-middle">{patient.Record.id.slice(0, 8)}...</td>
                <td className="px-3 py-3 text-[#00072D] text-left align-middle">{patient.Record.name}</td>
                <td className="px-3 py-3 text-[#00072D] text-left align-middle">{patient.Record.email}</td>
                <td className="px-3 py-3 text-[#00072D] text-left align-middle">{patient.Record.specialization}</td>
                <td className={`px-3 py-3 text-left align-middle ${getStatusColorClass(patient.Record.status)}`}>
                  {patient.Record.status}
                </td>
                <td className="px-3 py-3 text-[#00072D] text-left text-white uppercase align-middle">
                  {loadingId === patient.Record.id ? (
                    <span className="flex justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Loading...
                </span>
                  ) : (
                    <>
                      <button 
                        onClick={() => handleAccess(patient.Record.id, 'approved')} 
                        className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                      >
                        Approve
                      </button>
                      <button 
                        onClick={() => handleAccess(patient.Record.id, 'rejected')} 
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

// Function to determine Tailwind CSS class based on status
const getStatusColorClass = (status) => {
  switch (status) {
    case 'approved':
      return 'text-green-500'; // Tailwind class for green text
    case 'pending':
      return 'text-orange-500'; // Tailwind class for orange text
    case 'rejected':
      return 'text-red-500'; // Tailwind class for red text
    default:
      return 'text-black'; // Default text color
  }
};

export default AdminPanel;