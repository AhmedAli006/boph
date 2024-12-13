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
            const response = await axios.get('http://localhost:5050/api/getallemr');
            console.log('EMR data retrieved:', response.data.response);

            // Filter EMR data based on the logged-in user
            const filteredEmrData = response.data.response.filter(item => item.Record.patientInformation.id === userData.response.id);

            setEmrData(filteredEmrData); // Store the filtered EMR data in state
        } catch (error) {
            console.error('Error fetching EMR:', error);
            // Optionally, show an error message to the user
        }
    };
console.log(emrData,'emrDAta')
    useEffect(() => {
        getEmr();
    }, []);

    return (
        <>
            <NavbarComp />
            {/* <Sidebar /> */}
            <div  className='flex justify-center'>
                <table className="table  bg-white rounded-lg shadow m-10 border-2">
                    <thead>
                        <tr>
                            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900">S.no</th>
                            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900">Patient Name</th>
                            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900">Chief Complaint</th>
                            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900">Date</th>
                            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900">Doctor</th>
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
                                        <strong>Dr.</strong> {JSON.parse(item.Record.doctor).name} <br />
                                        <strong>{JSON.parse(item.Record.doctor).specialization}</strong>  
                                        
                                        
                                    </div>
                                </td>
                                <td className="border-b-2 p-4 dark:border-dark-5">
                                    <div className="flex place-content-center">
                                        <button 
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                                            onClick={() => navigate(`/emr/${item.Record.id}`, { state: item })} 
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