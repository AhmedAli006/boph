import React from 'react'
import Sidebar from '../components/SidebarComp';
import NavbarComp from '../components/NavbarComp';
function MyData() {
  return (
   <>
   <Sidebar/>
<NavbarComp/>

<div class='flex justify-center '>

    
<table class="table p-4 bg-white rounded-lg shadow m-10 border-2">
    <thead>
        <tr>
            <th class="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900">
                S.no
            </th>
            <th class="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900">
                patient name
            </th>
            <th class="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900">
                Transaction ID
            </th>
            <th class="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900">
                Status
            </th>
            <th class="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-bold text-gray-900">
                
            </th>
        </tr>
    </thead>
    <tbody>
        <tr class="text-gray-700">
            <td class="border-b-2 p-4 dark:border-dark-5">
                1
            </td>
            <td class="border-b-2 p-4 dark:border-dark-5">
                Jean Marc
            </td>
            <td class="border-b-2 p-4 dark:border-dark-5">
                ZXCV-9514
            </td>
            <td class="border-b-2 p-4 dark:border-dark-5">
               Approved
            </td>
            <td class="border-b-2 p-4 dark:border-dark-5">
                 <div class="flex place-content-center">
                          <a href="#!">
                            <svg
                              class="w-6 h-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                              ></path>
                            </svg>
                          </a>
                        </div>
            </td>
        </tr>
        <tr class="text-gray-700">
            <td class="border-b-2 p-4 dark:border-dark-5">
                2
            </td>
            <td class="border-b-2 p-4 dark:border-dark-5">
                Eric
            </td>
            <td class="border-b-2 p-4 dark:border-dark-5">
                ONYG-7958
            </td>
            <td class="border-b-2 p-4 dark:border-dark-5">
                rejected
            </td>
            <td class="border-b-2 p-4 dark:border-dark-5">
                 <div class="flex place-content-center">
                          <a href="#!">
                            <svg
                              class="w-6 h-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                              ></path>
                            </svg>
                          </a>
                        </div>
            </td>
        </tr>
        <tr class="text-gray-700">
            <td class="border-b-2 p-4 dark:border-dark-5">
                3
            </td>
            <td class="border-b-2 p-4 dark:border-dark-5">
                Julien
            </td>
            <td class="border-b-2 p-4 dark:border-dark-5">
                FIRB-2354
            </td>
            <td class="border-b-2 p-4 dark:border-dark-5">
                Pending
            </td>
            <td class="border-b-2 p-4 dark:border-dark-5">
                <div class="flex place-content-center">
                          <a href="#!">
                            <svg
                              class="w-6 h-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                              ></path>
                            </svg>
                          </a>
                        </div>
            </td>
        </tr>
        <tr class="text-gray-700">
            <td class="border-b-2 p-4 dark:border-dark-5">
                4
            </td>
            <td class="border-b-2 p-4 dark:border-dark-5">
                Igor
            </td>
            <td class="border-b-2 p-4 dark:border-dark-5">
                ASFA-48432
            </td>
            <td class="border-b-2 p-4 dark:border-dark-5">
                Approved
            </td>
            <td class="border-b-2 p-4 dark:border-dark-5">
                 <div class="flex place-content-center">
                          <a href="#!">
                            <svg
                              class="w-6 h-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                              ></path>
                            </svg>
                          </a>
                        </div>
            </td>
        </tr>
    </tbody>
</table>

</div>
   </>
  )
}

export default MyData