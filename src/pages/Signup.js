import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectComp from "../components/SelectComp";
// import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/features/AuthSlice";


const bg = require('../assets/background-removebg-preview.png');


function Signup() {
  const navigate = useNavigate();
 const [isRevealPassword, setIsRevealPassword] = useState(false);
 const dispatch = useDispatch()

  const togglePassword = () => {
    setIsRevealPassword((prevState) => !prevState);
  }
   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [stakeholder, setstakeholder] = useState('');

// const getId  = async ()=>{
//  await axios.get('/api/getusers')
//     .then(response => {
//       console.log(response);
      

//     })
//     .catch(error => {
//       console.error(error);
    
//     });
// }

 

const handleSubmit = async (event) => {
  event.preventDefault();
    const newUserId = uuidv4();
  const userVal = {
    id: newUserId,
    name: username,
    email: email,
    password: password,
    stakeholder: stakeholder,
  }


console.log(userVal);
  // Email validation using regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email address. Please try again.");
    return;
  }

  // Password validation using regex
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  if (!passwordRegex.test(password)) {
    alert("Invalid password. Please enter a password with at least 8 characters, including at least one letter, one number, and one special character.");
    return;
  }

   if (stakeholder === '' ) {
    alert("Please select a stakeholder");
    return;
  }
   if (username === '' ) {
    alert("Please select a user name");
    return;
  }

  dispatch(signup(userVal))


  // // Add Axios to handle registration
  // await axios.post('http://localhost:8080/api/registerUser/', userVal)
  //   .then(response => {
  //     console.log(response);
  //     // Handle successful registration
  //     navigate("/login"); // Redirect to login page
  //   })
  //   .catch(error => {
  //     console.log(error);
  //     // Handle registration error
  //     alert("Registration failed. Please try again.");
  //   });
}

   const handleDropdownChange = (event) => {
    setstakeholder(event.target.value);
  }
  return (
    <div className="flex flex-wrap w-full">
      <div className="flex flex-col w-full md:w-1/2">
       
        <div className="flex flex-col justify-center px-8 mt-20 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
          <p style={{ fontSize: 70 }} className="text-3xl text-center montserrat">
            Welcome.
          </p>
          <p style={{ fontSize: 18 }} className="poppins text-center pt-4 ">
            we are glad to see you with us
          </p>
          <form className="flex flex-col pt-3 md:pt-8 mx-9" onSubmit={handleSubmit}>
            <div className="flex flex-col pt-5">
              <div className="flex relative ">
                <span className=" absolute inline-flex  items-center  px-3 py-2.5 text-gray-500  text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  id="design-login-username"
                  className="pl-11 flex-1 appearance-none border rounded-xl  border-gray-300 w-full h-12 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Username"
                  style={{ textIndent:25}}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col pt-5 ">
              <div className="flex relative ">
                <span className="  absolute inline-flex  items-center px-3 py-2.5 text-gray-500  text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  id="design-login-Email"
                  className="poppins pl-11 rounded-xl flex-1 appearance-none border h-12 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Email"
                  style={{ textIndent:25}}

                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col pt-5 mb-8">
              <div className="flex relative ">
                <span className="  absolute inline-flex  items-center px-3 py-2.5 text-gray-500  text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                   
                </span>
                 <input
                  type={isRevealPassword ? 'text' : 'password'}
                  id="design-login-password"
                  className="poppins pl-11 rounded-xl flex-1 appearance-none border h-12 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Password"
                  style={{ textIndent:25}}

                  onChange={(event) => setPassword(event.target.value)}
                />
                <span onClick={togglePassword} className=" end-1  absolute inline-flex   items-center px-3 py-3 text-gray-500  text-sm">
                 {isRevealPassword ? <svg
                    //eye
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg> : <svg
                  // noeye
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>}
                  
                  
                  
                </span>
              </div>
            </div>
            <SelectComp  value={stakeholder} onChange={handleDropdownChange}/>
            <button
              type="submit"
              className="w-full px-4 py-2 text-base rounded-xl h-12 font-semibold poppins text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2"
            >
              <span className="w-full">Submit</span>
            </button>
          </form>
          <div className="pt-12 pb-12 text-center">
            <p className="poppins">
              have an account?
              <p
                onClick={() => {
                  navigate("/login");
                }}
                style={{ fontWeight: 600, color: "#0466c8" }}
                className="font-semibold   poppins ml-1 inline hover:cursor-pointer "
              >
                Login here.
              </p>
            </p>
          </div>
        </div>
      </div>
     <div style={{backgroundColor: '#EDF2FB',}} className="w-1/2  shadow-2xl">
        <img
          className="hidden object-scale-down w-full h-screen md:block"
          src={bg}
        />
      </div>
    </div>
  );
}

export default Signup;
