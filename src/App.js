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
  const { userData } = useSelector((state) => state.auth);
  const isAuthenticated = userData && userData.response;
  const isAdmin = isAuthenticated && userData.response.email === "admin@gmail.com";
  const isDoctor = isAuthenticated && userData.response.stakeholder === "doctor";
  const userStatus = isAuthenticated ? userData.response.status : null; // Get user status
  console.log(isDoctor,"docter");

  return (
    <Router>
      <Routes>
        {isAuthenticated ? (
          <>
            {userStatus === "pending" && isDoctor === true ? (
              // Show splash screen if the user's status is pending
              <Route path="/" element={<Splash />} />
            ) : (
              <>
                {isAdmin ? (
                  <>
                    <Route path="/" element={<AdminPanal />} />
                    <Route path="/admin" element={<AdminPanal />} />
                  </>
                ) : isDoctor ? (
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
                    <Route path="/emr/:id" element={<EmrComp />} />
                  </>
                )}
              </>
            )}
          </>
        ) : (
          <>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Signup />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;