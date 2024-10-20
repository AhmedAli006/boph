
import Login from './pages/Login';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Signup from './pages/Signup';
import Home from './pages/Home';
import Upload from './pages/Upload';
import MyData from './pages/MyData';
import Splash from './pages/Splash';
import Profile from './pages/Profile';
import { useSelector } from 'react-redux';
import EmrComp from './pages/EmrComp';


function App() {
   const {userData, isLoading} = useSelector(state => state.auth);
   console.log(userData);
   
  return (
 <>
<Router>
  
    <Routes>
      
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/upload' element={<Upload/>}/>
      <Route path='/transaction' element={<MyData/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/emr' element={<EmrComp/>}/>
      {/* <Route path='/splash' element={<Splash/>}/> */}
    </Routes>
   {/* <Routes>
        {userData ? (
          <>
            <Route path='/home' element={<Home />} />
            <Route path='/upload' element={<Upload />} />
            <Route path='/transaction' element={<MyData />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/splash' element={<Splash />} />
            
          </>
        ) : (
          <>
            <Route path='/' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Signup />} />
          </>
        )}
      </Routes> */}
</Router>


 
 </>
  );
}

export default App;
