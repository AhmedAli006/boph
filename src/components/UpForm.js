import axios from 'axios';
import React, { useState } from 'react'
const avatar = require('../assets/9434619.jpg');
function UpForm() {
  
 const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit =  (event) => {
    event.preventDefault();
    
    if (!selectedFile) {
      alert('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    console.log(selectedFile);

    // Send the form data to the server using Axios
    // axios.post('http://localhost:8080/api/upload-pdf', formData)
    //   .then(response => {
    //     console.log(response);
    //     // Handle successful upload
    //   })
    //   .catch(error => {
    //     console.error(error);
    //     // Handle upload error
    //   });
  };
  
  return (
    
<section className="h-screen pt-5 bg-gray-100/50 border">
    <form className="container max-w-2xl mx-auto shadow-md md:w-3/4">
        <div className="p-4 border-t-2 border-indigo-400 rounded-lg bg-gray-100/5 ">
            <div className="max-w-sm mx-auto md:w-full md:mx-0">
                <div className="inline-flex items-center space-x-4">
                    <a href="#" className="relative block">
                        <img alt="profil" src={avatar} className="mx-auto object-cover rounded-full h-16 w-16 "/>
                    </a>
                    <h1 className="text-gray-600">
                        Charlie
                    </h1>
                </div>
            </div>
        </div>
        <div className="space-y-6 bg-white">
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm mx-auto md:w-1/3">
                    Report
                </h2>
                <div className="max-w-sm mx-auto md:w-2/3">
                    <div className=" relative ">
                        <input type="file" id="user-info-file" onChange={handleFileChange} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="upload file"/>
                        </div>
                    </div>
                </div>
                <hr/>
                {/* <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                    <h2 className="max-w-sm mx-auto md:w-1/3">
                        Personal info
                    </h2>
                    <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                        <div>
                            <div className=" relative ">
                                <input type="text" id="user-info-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name"/>
                                </div>
                            </div>
                            <div>
                                <div className=" relative ">
                                    <input type="text" id="user-info-phone" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Phone number"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/> */}
                        
                        
                         
                            <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                                <button  onClick={handleSubmit} className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Upload
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
  )
}

export default UpForm