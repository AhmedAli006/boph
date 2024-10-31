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
            console.log('EMR data retrieved:', response.data.response);

            // Filter EMR data based on the logged-in user
            const filteredEmrData = response.data.response.filter(item => item.Record.patientInformation.patientId === userData.response.id);

            setEmrData(filteredEmrData); // Store the filtered EMR data in state
        } catch (error) {
            console.error('Error fetching EMR:', error);
            // Optionally, show an error message to the user
        }
    };

    useEffect(() => {
        getEmr();
    }, []);

    return (
        <>
            <NavbarComp />
            <Sidebar />
            <div style={{ marginLeft: 230 }} className='flex justify-center'>
                <table className="table p-4 bg-white rounded-lg shadow m-10 border-2">
                    <thead>
                        <tr>
                            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900">S.no</th>
                            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900">Patient Name</th>
                            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900">Chief Complaint</th>
                            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900">Date of Birth</th>
                            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900">Vital Signs</th>
                            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {emrData.map((item, index) => (
                            <tr className="text-gray-700" key={item.Key}>
                                <td className="border-b-2 p-4 dark:border-dark-5">{index + 1}</td>
                                <td className="border-b-2 p-4 dark:border-dark-5">{item.Record.patientInformation.name || 'N/A'}</td>
                                <td className="border-b-2 p-4 dark:border-dark-5">{item.Record.chiefComplaint.chiefComplaint || 'N/A'}</td>
                                <td className="border-b-2 p-4 dark:border-dark-5">{item.Record.patientInformation.dateOfBirth || 'N/A'}</td>
                                <td className="border-b-2 p-4 dark:border-dark-5">
                                    <div>
                                        <strong>BP:</strong> {item.Record.vitalSigns.bloodPressure} <br />
                                        <strong>Pulse:</strong> {item.Record.vitalSigns.pulse} <br />
                                        <strong>Temp:</strong> {item.Record.vitalSigns.temperature} <br />
                                    </div>
                                </td>
                                <td className="border-b-2 p-4 dark:border-dark-5">
                                    <div className="flex place-content-center">
                                        <button 
                                            className="text-blue- 500 hover:underline" 
                                            onClick={() => navigate('/emr', { state: item })} 
                                        >Open Report</button>
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