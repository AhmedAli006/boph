import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectComp from "../components/SelectComp";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch,useSelector } from "react-redux";
import { signup } from "../redux/features/AuthSlice";

const bg = require('../assets/background-removebg-preview.png');

function Signup() {
  const navigate = useNavigate();
  const [isRevealPassword, setIsRevealPassword] = useState(false);
  const dispatch = useDispatch();
  const {userData, isLoading} = useSelector(state => state.auth);
    console.log("user data Signup page", userData ? userData.response : "No user data");

  const togglePassword = () => {
    setIsRevealPassword((prevState) => !prevState);
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [stakeholder, setStakeholder] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [sex, setSex] = useState('');
  const [phone, setPhone] = useState('');
    const [specialization, setSpecialization] = useState('');
   // New state for user type
const handleSubmit = async (event) => {
  event.preventDefault();

  // Define validation rules
  const validationRules = [
    { value: username, message: "Please enter a username." },
    { value: email, message: "Please enter an email." },
    { value: password, message: "Please enter a password." },
    { value: stakeholder, message: "Please select a stakeholder." },
  ];

  // Check for general required fields
  for (const rule of validationRules) {
    if (!rule.value) {
      alert(rule.message);
      return;
    }
  }

  // Check for stakeholder-specific required fields
  if (stakeholder === "patient") {
    const patientValidationRules = [
      { value: dateOfBirth, message: "Please enter your date of birth." },
      { value: sex, message: "Please select your sex." },
      { value: phone, message: "Please enter your phone number." },
    ];

    for (const rule of patientValidationRules) {
      if (!rule.value) {
        alert(rule.message);
        return;
      }
    }
  }

  if (stakeholder === "doctor" && !specialization) {
    alert("Please enter your specialization.");
    return;
  }
  if (stakeholder === "doctor" && !phone) {
    alert("Please enter your phone.");
    return;
  }

  const newUser  = uuidv4();
  const userVal = {
    id: newUser ,
    name: username,
    email: email,
    password: password,
    stakeholder: stakeholder,
    dateOfBirth: stakeholder === "patient" ? dateOfBirth : "",
    sex:  sex ,
    phone: phone,
    specialization: stakeholder === "doctor" ? specialization : "",
  };

  try {
    const resultAction = await dispatch(signup(userVal));
    if (signup.fulfilled.match(resultAction)) {
      // Handle successful signup
      // alert("Registration successful!");
      navigate("/");
      
    } else {
      // Handle errors (e.g., user already exists)
      alert(resultAction.payload || "An error occurred during registration.");
    }
  } catch (error) {
    console.error("Error during registration:", error);
    alert("An error occurred while processing your request.");
  }
};

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const newUser = uuidv4();
  //   const userVal = {
  //     id: newUser,
  //     name: username,
  //     email: email,
  //     password: password,
  //     stakeholder: stakeholder,
  //     dateOfBirth: stakeholder==="patient" ? dateOfBirth : "", // Include only if patient
  //     sex: stakeholder==="patient" ? sex : "", // Include only if patient
  //     phone: stakeholder==="patient" ? phone : "", // Include only if patient
  //     specialization: stakeholder==="doctor" ? specialization : "", // Include only if patient
  //   }

  //   console.log( "user values ----",userVal);
  //   // Email validation using regex
  //   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //   if (!emailRegex.test(email)) {
  //     alert("Invalid email address. Please try again.");
  //     return;
  //   }

  //   // Password validation using regex
  //   const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  //   if (!passwordRegex.test(password)) {
  //     alert("Invalid password. Please enter a password with at least 8 characters, including at least one letter, one number, and one special character.");
  //     return;
  //   }

  //   if (stakeholder === '') {
  //     alert("Please select a stakeholder");
  //     return;
  //   }
  //   if (username === '') {
  //     alert("Please select a user name");
  //     return;
  //   }

  //   dispatch(signup(userVal));
    
  // }

  const handleDropdownChange = (event) => {
    setStakeholder(event.target.value);
  }

  return (
    <div className="flex flex-wrap w-full">
      <div className="flex flex-col w-full md:w-1/2">
        <div className="flex flex-col justify-center px-8 mt-20 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
          <p style={{ fontSize: 70 }} className="text-3xl text-center montserrat pt-5">
            Welcome.
          </p>
          <p style={{ fontSize: 18 }} className="poppins text-center pt-2 ">
            We are glad to see you with us
          </p>
          <form className="flex flex-col pt-3 md:pt-8 mx-9" onSubmit={handleSubmit}>
            <div className="flex flex-col pt-2">
              <div className="flex relative ">
                <span className=" absolute inline-flex  items-center  px-3 py-2.5 text-gray-500  text-sm">
                  {/* Username Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </span>
                <input
                  type="text"
                  id="design-login-username"
                  className="pl-11 flex-1 appearance-none border rounded-xl  border-gray-300 w-full h-12 py-2 px-4 bg-white text-gray -700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Username"
                  style={{ textIndent: 25 }}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col pt-4 ">
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
                  style={{ textIndent: 25 }}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col pt-4 mb-8">
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
                  </svg>
                  }
                  </span>

              </div>
            </div>
             <div className="flex flex-col ">
  <div className="flex items-center pb-3">
    <span className="inline-flex items-center px-3 py-2.5 text-gray-500 text-sm">
      {/* Sex Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    </span>
    <label className="font-semibold text-gray-700 mr-4">Sex:</label>
    <div className="flex space-x-4">
      <label className="flex items-center">
        <input type="radio" name="sex" value="Male" required onChange={(event) => setSex(event.target.value)} className="mr-2" />
        Male
      </label>
      <label className="flex items-center">
        <input type="radio" name="sex" value="Female" required onChange={(event) => setSex(event.target.value)} className="mr-2" />
        Female
      </label>
     
    </div>
  </div>
</div>
            <SelectComp value={stakeholder} onChange={handleDropdownChange} />
            {stakeholder === "patient" && (
              <div>
                <div className="flex flex-col mb-4">
                  <div className="flex relative ">
                    <span className="  absolute inline-flex  items-center px-3 py-2.5 text-gray-500  text-sm">
                      {/* Date of Birth Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 4h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <input
                      type="date"
                      id="design-login-dateOfBirth"
                      className="poppins pl-11 rounded-xl flex-1 appearance-none border h-12 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Date of Birth"
                      style={{ textIndent: 25 }}
                      onChange={(event) => setDateOfBirth(event.target.value)}
                    />
                  </div>
                </div>
               
              </div>
            )}
                <div className="flex flex-col  pb-4">
                  <div className="flex relative ">
                    <span className="  absolute inline-flex  items-center px-3 py-2.5 text-gray-500  text-sm">
                      {/* Phone Icon */}
                      {/* <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" className="w-6 h-6 text-gray-500" ><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg> */}
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-6 h-6 text-gray-200" fill="#6b7280"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
                    </span>
                    <input
                      type="tel"
                      id="design-login-phone"
                      className="poppins pl-11 rounded-xl flex-1 appearance-none border h-12 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Phone"
                      style={{ textIndent: 25 }}
                      onChange={(event) => setPhone(event.target.value)}
                    />
                  </div>
                </div>
 {/* Specialization Input */}
            {stakeholder === "doctor" && (
              <div className="flex flex-col   pb-5">
                <div className="flex relative ">
                  <span className="  absolute inline-flex  items-center px-3 py-2.5 text-gray-500  text-sm">
                    {/* Specialization Icon */}
                   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#6b7280"><path d="M540-80q-108 0-184-76t-76-184v-23q-86-14-143-80.5T80-600v-240h120v-40h80v160h-80v-40h-40v160q0 66 47 113t113 47q66 0 113-47t47-113v-160h-40v40h-80v-160h80v40h120v240q0 90-57 156.5T360-363v23q0 75 52.5 127.5T540-160q75 0 127.5-52.5T720-340v-67q-35-12-57.5-43T640-520q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 70T800-407v67q0 108-76 184T540-80Zm220-400q17 0 28.5-11.5T800-520q0-17-11.5-28.5T760-560q-17 0-28.5 11.5T720-520q0 17 11.5 28.5T760-480Zm0-40Z"/></svg>
                  </span>
                  <input
                    type="text"
                    id="design-login-specialization"
                    className="poppins pl-11 rounded-xl flex-1 appearance-none border h-12 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Specialization"
                    style={{ textIndent: 25 }}
                    onChange={(event) => setSpecialization(event.target.value)}
                  />
                </div>
              </div>
            )}

           <button
              type="submit"
              className={`w-full px-4 py-2 text-base rounded -xl h-12 font-semibold poppins text-center text-white transition duration-200 ease-in ${isLoading ? 'bg-gray-400' : 'bg-black'} shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2`}
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? (
                <span className="flex justify-center items-center">
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                  Loading...
                </span>
              ) : (
                <span className="w-full">Submit</span>
              )}
            </button>
          </form>
          <div className="pt-12 pb-12 text-center">
            <p className="poppins">
              Have an account?
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
      <div style={{ backgroundColor: '#EDF2FB', }} className="w-1/2  shadow-2xl">
        <img
          className="hidden object-scale-down w-full h-screen md:block"
          src={bg}
        />
      </div>
    </div>
  );
}

export default Signup;
