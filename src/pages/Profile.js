import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../components/SidebarComp';
import NavbarComp from '../components/NavbarComp';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const [emrData, setEmrData] = useState([]); // State to hold EMR data of the user Patient logged in
    const { userData, isLoading } = useSelector(state => state.auth); // Access user data from Redux
    const navigate = useNavigate();

    const getEmr = async () => {
        try {
            // Send data to the API
            const response = await axios.get('http://localhost:8080/api/getallemr');
            console.log('EMR data retrieved:',response.data.response[0].Record.emrData);
            // Filter EMR data based on the logged-in user
            const filteredEmrData = response.data.response.filter(item => item.Record.id === userData.id);

            setEmrData(filteredEmrData); // Store the filtered EMR data in state
        } catch (error) {
            console.error('Error fetching EMR:', error);
            // Optionally, show an error message to the user
        }
    };

    useEffect(() => {
        if (userData) {
            getEmr();
        }
    }, [userData]);

    if (isLoading) {
        return <div>Loading...</div>; // Show loading indicator while fetching data
    }

    return (
        <>
            <NavbarComp />
            <Sidebar />
            <div style={{ marginLeft: 230 }} className='flex justify-center'>
                <table className="table p-4 bg-white rounded-lg shadow m-10 border-2">
                    <thead>
                        <tr>
                            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900">S.no</th>
                            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900">Date</th>
                            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900">Doctor Name</th>
                            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900">EMR Reports</th>
                            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {emrData.map((item, index) => (
                            <tr className="text-gray-700" key={item.Key}>
                                <td className="border-b-2 p-4 dark:border-dark-5">{index + 1}</td>
                                <td className="border-b-2 p-4 dark:border-dark-5">{item.Record.date || 'N/A'}</td> {/* Replace with actual date if available */}
                                <td className="border-b-2 p-4 dark:border-dark-5">{item.Record.doctorName || 'N/A'}</td> {/* Replace with actual doctor name if available */}
                                <td className="border-b-2 p-4 dark:border-dark-5">{item.Record.id}</td> {/* EMR Reports */}
                                <td className="border-b-2 p-4 dark:border-dark-5">
                                    <div className="flex place-content-center">
                                        <button className="text-blue-500 hover:underline" onClick={() => { navigate('/emr') }}>Open Report</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Profile;