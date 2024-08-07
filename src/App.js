
import Login from './pages/Login';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Sidebar from './components/SidebarComp';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Upload from './pages/Upload';
import MyData from './pages/MyData';
import Splash from './pages/Splash';
// import Table from './components/TableComp';


function App() {
  return (
 <>
<Router>
  
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/upload' element={<Upload/>}/>
      <Route path='/data' element={<MyData/>}/>
      <Route path='/splash' element={<Splash/>}/>
    </Routes>
 
</Router>
 {/* <Login/> */}
{/* <Sidebar/> */}
 
 </>
  );
}

export default App;
