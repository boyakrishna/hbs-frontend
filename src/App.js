
import 'bootstrap/dist/css/bootstrap.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ApplicationForm from './Components/ApplicationForm';
import Hostel from './Components/Hostel'; 
import Header from './Components/Header';
import Addhostel from './Components/Addhostel';
import Login from './Components/Login';
import UserDetails from './Components/UserDetails';
import UsersLogin from './Components/UsersLogin';
import Navbar from './Components/Navbar';
import AdminLogin from './Components/AdminLogin';
import AdminDetails from './Components/AdminDetails';
import About from './Components/About';
import Footer from './Components/Footer';


function App() {
  return (
    <BrowserRouter>
<Routes>

  <Route path="/" element={<Login/>}/>
{/* Pages without header */}
  
  <Route path="/userlogin" element={<UsersLogin/>}/>
  <Route path="/form" element={<ApplicationForm/>}/>
  <Route path='/navbar' element={<Navbar/>}/>
  <Route path="/userdetails" element={<UserDetails/>}/>
  <Route path="/header" element={<Header/>}/>
  <Route path="/adminlogin" element={<AdminLogin/>}/>
  <Route path="/admindetails" element={<AdminDetails/>}/>
  <Route path="/aboutus" element={<About/>}/>
  <Route path='/hostel' element={<Hostel/>}/>
  <Route path='/footer' element={<Footer/>}/>



  {/* Pages with header */}
  <Route path="/header" element={
      <>
        <Header/>
        <Footer/>
      </>
  }/>

  <Route path="/register" element={
      <>

        <Addhostel/>
      </>
  }/>

  <Route path="/userdetails" element={
      <>
      
        <UserDetails/>
      </>
  }/>
  </Routes>
  
    </BrowserRouter>
    
  );
}

export default App;
