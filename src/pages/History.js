import React from 'react'
import Sidebar from '../components/SidebarComp';
import NavbarComp from '../components/NavbarComp';
function History() {
  const [emrData, setEmrData] = useState([]);

    const fetchEmr = async () => {
    try {
      const result = await axios.get('http://localhost:5000/api/getallemr');
      const users = JSON.parse(result.data.response);
      console.log(users);
      const filteredPatients = users.filter(user => user.Record.docType === "EMR" );
      console.log("Filtered patients for selection:", filteredPatients);
      setEmrData(filteredPatients);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchEmr();
  }, []);
  return (
   <>
   <Sidebar/>
<NavbarComp/>

<div className='flex justify-center '>

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
                        Doctor
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
                            onClick={() => console.log(`Button clicked for patient ${patient.Record.id}`)}
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
  )
}

export default History