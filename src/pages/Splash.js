import React from 'react'
import { useNavigate } from 'react-router-dom';


function Splash() {
  const navigate = useNavigate();

  return (
  <>


<div class="bg-white dark:bg-gray-800 " style={{height:"100vh"}}>
    <div class="text-center w-full  mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20" style={{paddingTop:200}}>
        <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span class="block">
                Your request has been submitted
            </span>
            {/* <span class="block text-indigo-500">
                Please wait for it to be processed
            </span> */}
        </h2>
        <p class="text-xl mt-4 max-w-md mx-auto text-gray-400">
            Please wait for your request to be processed and varified by the validators
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md shadow">
                <button onClick={()=>{
                  navigate('/login')
                }} type="button" class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
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