import Login from "./pages/Login";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import MyData from "./pages/MyData";
import Splash from "./pages/Splash";
import Profile from "./pages/Profile";
import { useSelector } from "react-redux";
import EmrComp from "./pages/EmrComp";
import AdminPanal from "./pages/AdminPanal";

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
                <Route path="/upload" element={<Upload />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/splash" element={<Splash />} />
                <Route path="/emr" element={<EmrComp />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Profile />} />
                <Route path="/profile" element={<Profile />} />

                <Route path="/home" element={<Home />} />
                <Route path="/splash" element={<Splash />} />
                <Route path="/emr" element={<EmrComp />} />
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