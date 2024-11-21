// src/AdminPanel.js
import React, { useState } from 'react';

// Sample data for requests
const sampleRequests = [
  { id: 1, user: 'User  1', status: 'approved' },
  { id: 2, user: 'User  2', status: 'pending' },
  { id: 3, user: 'User  3', status: 'rejected' },
  { id: 4, user: 'User  4', status: 'approved' },
  { id: 5, user: 'User  5', status: 'pending' },
];

function AdminPanel() {
  const [searchTerm, setSearchTerm] = useState('');
  const [requests, setRequests] = useState(sampleRequests);

  // Filter requests based on search term
  const filteredRequests = requests.filter(request =>
    request.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Count requests by status
  const totalRequests = requests.length;
  const approvedRequests = requests.filter(r => r.status === 'approved').length;
  const pendingRequests = requests.filter(r => r.status === 'pending').length;
  const rejectedRequests = requests.filter(r => r.status === 'rejected').length;

  return (
    <div className="p-5 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl text-[#00072D] mb-5">Admin Panel</h1>

      {/* Card for request statistics */}
<div className="flex justify-around mb-5">
  <div className="bg-white border border-gray-300 rounded-lg p-4 text-center shadow">
    <h4 className="text-[#00072D]">Total Requests</h4>
    <p className="text-2xl font-bold text-[#00072D]">{totalRequests}</p>
  </div>
  <div className="bg-white border-l-4 border-green-500 rounded-lg p-4 text-center shadow">
    <h4 className="text-[#00072D]">Approved</h4>
    <p className="text-2xl font-bold text-[#00072D]">{approvedRequests}</p>
  </div>
  <div className="bg-white border-l-4 border-orange-500 rounded-lg p-4 text-center shadow">
    <h4 className="text-[#00072D]">Pending</h4>
    <p className="text-2xl font-bold text-[#00072D]">{pendingRequests}</p>
  </div>
  <div className="bg-white border-l-4 border-red-500 rounded-lg p-4 text-center shadow">
    <h4 className="text-[#00072D]">Rejected</h4>
    <p className="text-2xl font-bold text-[#00072D]">{rejectedRequests}</p>
  </div>
</div>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search by user..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-5 p-2 w-full border border-gray-300 rounded"
      />

      {/* Table for requests */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#00072D] text-white          ">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">User </th>
            <th className="border border-gray-300 p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests.map(request => (
            <tr key={request.id}>
              <td className="border border-gray-300 p-2">{request.id}</td>
              <td className="border border-gray-300 p-2">{request.user}</td>
              <td className={`border border-gray-300 p-2 ${getStatusColorClass(request.status)}`}>
                {request.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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