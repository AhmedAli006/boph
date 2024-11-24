import Login from "./pages/Login";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Upload from "./pages/Upload";

import Splash from "./pages/Splash";
import Profile from "./pages/Profile";
import { useSelector } from "react-redux";
import EmrComp from "./pages/EmrComp";
import AdminPanal from "./pages/AdminPanal";
import History from "./pages/History";

function App() {
  const { userData, isLoading } = useSelector((state) => state.auth);
  console.log("user data Main App ", userData);

  // Check if userData is null or undefined
  const isAuthenticated = userData && userData.response;

  return (
    <Router>
      <Routes>
        {isAuthenticated ? (
          // If userData exists, show authenticated routes
          <>
            {userData.response.stakeholder === "doctor" ? (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/upload/:id" element={<Upload />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/splash" element={<Splash />} />
                <Route path="/emr/:id" element={<EmrComp />} />
                <Route path="/history/:id" element={<History />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Profile />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/history/:id" element={<History />} />

                {/* <Route path="/home" element={<Home />} /> */}
                <Route path="/splash" element={<Splash />} />
                <Route path="/emr/:id" element={<EmrComp />} />
                
              </>
            )}
          </>
        ) : (
          // If userData does not exist, show login/signup routes
          <>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Signup />} /> {/* Redirect all unknown routes to Signup */}
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;