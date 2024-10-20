import React from 'react'
import Sidebar from '../components/SidebarComp'
import NavbarComp from '../components/NavbarComp'


function Profile() {
  return (
    <>
<NavbarComp/>
     <Sidebar/>

                
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
            <tr className="text-gray-700">
                <td className="border-b-2 p-4 dark:border-dark-5">1</td>
                <td className="border-b-2 p-4 dark:border-dark-5">2023-10-01</td> {/* Date */}
                <td className="border-b-2 p-4 dark:border-dark-5">Dr. Smith</td> {/* Doctor Name */}
                <td className="border-b-2 p-4 dark:border-dark-5">sha65492d16531dx6846f</td> {/* EMR Reports */}
                <td className="border-b-2 p-4 dark:border-dark-5">
                    <div className="flex place-content-center">
                        <button className="text-blue-500 hover:underline" onClick={() => {}}>Open Report</button>
                    </div>
                </td>
            </tr>
            <tr className="text-gray-700">
                <td className="border-b-2 p-4 dark:border-dark-5">2</td>
                <td className="border-b-2 p-4 dark:border-dark-5">2023-10-02</td> {/* Date */}
                <td className="border-b-2 p-4 dark:border-dark-5">Dr. Johnson</td> {/* Doctor Name */}
                <td className="border-b-2 p-4 dark:border-dark-5">sha65492d16531dx6846f</td> {/* EMR Reports */}
                <td className="border-b-2 p-4 dark:border-dark-5">
                    <div className="flex place-content-center">
                        <button className="text-blue-500 hover:underline" onClick={() => {}}>Open Report</button>
                    </div>
                </td>
            </tr>
            <tr className="text-gray-700">
                <td className="border-b-2 p-4 dark:border-dark-5">3</td>
                <td className="border-b-2 p-4 dark:border-dark-5">2023-10-03</td> {/* Date */}
                <td className="border-b-2 p-4 dark:border-dark-5">Dr. Lee</td> {/* Doctor Name */}
                <td className="border-b-2 p-4 dark:border-dark-5">sha65492d16531dx6846f</td> {/* EMR Reports */}
                <td className="border-b-2 p-4 dark:border-dark-5">
                    <div className="flex place-content-center">
                        <button className="text-blue-500 hover:underline" onClick={() => {}}>Open Report</button>
                    </div>
                </td>
            </tr>
            <tr className="text-gray-700">
                <td className="border-b-2 p-4 dark:border-dark-5">4</td>
                <td className="border -b-2 p-4 dark:border-dark-5">2023-10-04</td> {/* Date */}
                <td className="border-b-2 p-4 dark:border-dark-5">Dr. Brown</td> {/* Doctor Name */}
                <td className="border-b-2 p-4 dark:border-dark-5">sha65492d16531dx6846f</td> {/* EMR Reports */}
                <td className="border-b-2 p-4 dark:border-dark-5">
                    <div className="flex place-content-center">
                        <button className="text-blue-500 hover:underline" onClick={() => {}}>Open Report</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>

    </>
  )
}

export default Profile