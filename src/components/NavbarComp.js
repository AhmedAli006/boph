
import React,{ Fragment }  from 'react'
   
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { logout } from '../redux/features/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const avatar = require('../assets/9434619.jpg');
const logo = require("../assets/logo-removebg-preview.png");
function Navbar() {
 const { userData, isLoading } = useSelector((state) => state.auth);
  console.log("user data Main App ", userData);

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl: avatar,
}
   const dispatch = useDispatch();
  const navigate = useNavigate();

const handleSignout = () => {
  // Add your signout logic here
dispatch(logout())
navigate("/")
  console.log('Signout button clicked');
};

  const userNavigation = (() => {
    if (userData.response.email === "admin@gmail.com") {
      return [
       
        { name: 'Sign out', href: '#', onclick: handleSignout },
      ];
    } else if (userData.response.stakeholder === "doctor") {
      return [
        { name: 'Dashboard', href: '/home' },
        { name: 'Sign out', href: '#', onclick: handleSignout },
      ];
    } else {
      return [
        { name: 'Your Profile', href: '/profile' },
        { name: 'Sign out', href: '#', onclick: handleSignout },
      ];
    }
  })();

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
  return (
    <>
     <div className="min-h-full ">
          


        <Disclosure as="nav" style={{backgroundColor: '#00072D',}} className="bg-gray-800">
          {({ open }) => (
            <>
              <div  className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                 <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    {/* Logo Image on the left */}
                    <img src={logo} onClick={()=>{navigate("/")}} alt="Logo" style={{width:50,height:50,padding:2}} className=" mr-3 bg-white rounded-full" /> {/* Adjust size as needed */}
                  </div>
                  <div className="flex items-center">
                    
                   
                    <h1 style={{ fontWeight: '700', fontSize: '50px', fontFamily: 'meshed',marginTop:20 }} className='text-white'>BOPH</h1>
                  </div>

                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                  onClick={item.onclick}
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                            {/* <Menu.Item>
                              <a className='mt-2 w-48 origin-top-right rounded-md block px-4 py-2 text-sm text-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 '>
                                signout
                              </a>
                            </Menu.Item> */}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
              
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

      
      </div>
      </>
  )
}

export default Navbar