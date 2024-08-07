import React from "react";
import DashCards from "./DashCards";

function Table() {
  return (
    <>
      <div class=" max-w-5xl px-2 mx-auto sm:px-8">
        <DashCards />

        <div class="flex flex-row items-center  justify-center w-full p-2  shadow-xs">
          <div class="hidden ml-8 text-lg text-black md:flex"></div>
          <span style={{ width: "460px"}} class="flex h-10 text-sm  rounded-full cursor-pointer ">
            <input
              type="search"
              name="serch"
              placeholder="Search"
              class="flex-grow  px-4 text-sm rounded-l-full border border-gray-500 rounded-r-full focus:outline-none"
            />
          </span>
          <div class="flex flex-row-reverse ml-4 mr-4  ">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-7 h-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="items-center w-full min-h-screen inline-block  ">
          <div class="w-full  px-5 mx-auto lg:container ">
            <div class="max-w-screen-lg mx-auto ">
              <div class="min-w-full my-4 overflow-x-auto border rounded-md shadow-sm dark:border-gray-700">
                <table class="min-w-full bg-white rounded whitespace-nowrap">
                  <thead class="border-b bg-gray-50">
                    <tr class="">
                      <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                        Order ID
                      </th>
                      <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                        Date
                      </th>
                      <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                        Customer
                      </th>
                      <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                        Status
                      </th>
                      <th class="px-3 py-3 text-xs font-normal text-right text-gray-500 uppercase align-middle">
                        time
                      </th>
                      <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle"></th>
                    </tr>
                  </thead>
                  <tbody class="text-sm bg-white divide-y divide-gray-200">
                    <tr>
                      <td class="px-3 py-4 text-gray-600 ">#102-325-2565</td>
                      <td class="px-3 py-4 text-gray-500 ">May 07, 2021</td>
                      <td class="px-3 py-4">
                        <div class="flex items-center w-max">
                          <img
                            width="50"
                            height="50"
                            class="w-10 h-10 rounded-full"
                            src="https://images.unsplash.com/photo-1506085452766-c330853bea50?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;fit=crop&amp;h=200&amp;w=200&amp;s=3e378252a934e660f231666b51bd269a"
                            alt="avatar"
                          />
                          <div class="ml-4">
                            <div>Chase Maxwell</div>
                            <div class="text-sm text-gray-400">
                              chase@anothercompany.com
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-3 py-4">
                        <span class="px-4 py-1 text-sm text-green-500 rounded-full bg-green-50">
                          completed
                        </span>
                      </td>
                      <td class="px-3 py-4 text-right text-gray-500 ">
                        1:00 PM
                      </td>
                      <td class="w-20 px-3 py-2 text-center text-gray-500 ">
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
                    <tr>
                      <td class="px-3 py-4 text-gray-600">#102-325-2565</td>
                      <td class="px-3 py-4 text-gray-600">Oct 30, 2021</td>
                      <td class="px-3 py-4">
                        <div class="flex items-center w-max">
                          <img
                            width="50"
                            height="50"
                            class="w-10 h-10 rounded-full"
                            src="https://images.unsplash.com/photo-1650167214003-ec877a56d03d?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixlib=rb-1.2.1&amp;q=80&amp;&amp;crop=faces&amp;fit=crop&amp;h=200&amp;w=200"
                            alt="avatar"
                          />
                          <div class="ml-4">
                            <div>Cristofer Dorwart</div>
                            <div class="text-sm text-gray-400">
                              chris@ourcompany.com
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-3 py-4">
                        <span class="px-4 py-1 text-sm text-green-500 rounded-full bg-green-50">
                          completed
                        </span>
                      </td>
                      <td class="px-3 py-4 text-right text-gray-600">
                        1:00 PM
                      </td>
                      <td class="w-20 px-3 py-2 text-center text-gray-500">
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
                    <tr>
                      <td class="px-3 py-4 text-gray-600">#102-325-2565</td>
                      <td class="px-3 py-4 text-gray-600">Sep 16, 2021</td>
                      <td class="px-3 py-4">
                        <div class="flex items-center w-max">
                          <img
                            width="50"
                            height="50"
                            class="w-10 h-10 rounded-full"
                            src="https://images.unsplash.com/photo-1509868918748-a554ad25f858?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;fit=crop&amp;h=200&amp;w=200&amp;s=3159ec467959b2aada4b75d565c270aa"
                            alt="avatar"
                          />
                          <div class="ml-4">
                            <div>Zahraa Duncan</div>
                            <div class="text-sm text-gray-400">
                              zahraa@ourcompany.com
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-3 py-4">
                        <span class="px-4 py-1 text-sm text-yellow-500 rounded-full bg-yellow-50">
                          in-progress
                        </span>
                      </td>
                      <td class="px-3 py-4 text-right text-gray-600">1:00 PM</td>
                      <td class="w-20 px-3 py-2 text-center text-gray-500">
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
                    <tr>
                      <td class="px-3 py-4 text-gray-600">#102-325-2565</td>
                      <td class="px-3 py-4 text-gray-600">Aug 14, 2021</td>
                      <td class="px-3 py-4">
                        <div class="flex items-center w-max">
                          <img
                            width="50"
                            height="50"
                            class="w-10 h-10 rounded-full"
                            src="https://randomuser.me/api/portraits/men/10.jpg"
                            alt="avatar"
                          />
                          <div class="ml-4">
                            <div>Viktor Xiong</div>
                            <div class="text-sm text-gray-400">
                              vicktor@supercompany.com
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-3 py-4">
                        <span class="px-4 py-1 text-sm text-green-500 rounded-full bg-green-50">
                          completed
                        </span>
                      </td>
                      <td class="px-3 py-4 text-right text-gray-600">
                        1:00 PM
                      </td>
                      <td class="w-20 px-3 py-2 text-center text-gray-500">
                        <div class="flex place-content-center ">
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
                    <tr>
                      <td class="px-3 py-4 text-gray-600">#102-325-2565</td>
                      <td class="px-3 py-4 text-gray-600">May 10, 2021</td>
                      <td class="px-3 py-4">
                        <div class="flex items-center w-max">
                          <img
                            width="50"
                            height="50"
                            class="w-10 h-10 rounded-full"
                            src="https://randomuser.me/api/portraits/men/18.jpg"
                            alt="avatar"
                          />
                          <div class="ml-4">
                            <div>Cristiano Summers</div>
                            <div class="text-sm text-gray-400">
                              me@ourbestcompany.com
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-3 py-4">
                        <span class="px-4 py-1 text-sm text-red-500 rounded-full bg-red-50">
                          cancelled
                        </span>
                      </td>
                      <td class="px-3 py-4 text-right text-gray-600">
                        1:00 PM
                      </td>
                      <td class="w-20 px-3 py-2 text-center text-gray-500">
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
                    <tr>
                      <td class="px-3 py-4 text-gray-600">#102-325-2565</td>
                      <td class="px-3 py-4 text-gray-600">Jun 28, 2021</td>
                      <td class="px-3 py-4">
                        <div class="flex items-center w-max">
                          <img
                            width="50"
                            height="50"
                            class="w-10 h-10 rounded-full"
                            src="https://randomuser.me/api/portraits/women/17.jpg"
                            alt="avatar"
                          />
                          <div class="ml-4">
                            <div>Kerrie Webster</div>
                            <div class="text-sm text-gray-400">
                              kerrie@ourcompany.com
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-3 py-4">
                        <span class="px-4 py-1 text-sm text-green-500 rounded-full bg-green-50">
                          completed
                        </span>
                      </td>
                      <td class="px-3 py-4 text-right text-gray-600">
                        1:00 PM
                      </td>
                      <td class="w-20 px-3 py-2 text-center text-gray-500">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
