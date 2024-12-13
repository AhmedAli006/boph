import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/features/AuthSlice';


function Splash() {
  const navigate = useNavigate();
   const dispatch = useDispatch();


  return (
  <>


<div className="bg-white dark:bg-gray-800 " style={{height:"100vh"}}>
    <div className="text-center w-full  mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20" style={{paddingTop:200}}>
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">
                Your request has been submitted
            </span>
            {/* <span className="block text-indigo-500">
                Please wait for it to be processed
            </span> */}
        </h2>
        <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
            Please wait for your request to be processed and varified by the validators
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
                <button onClick={()=>{
dispatch(logout())
                  navigate('/')
                }} type="button" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Go Back
                </button>
            </div>
        </div>
    </div>
</div>


 

  </>
  )
}

export default Splash