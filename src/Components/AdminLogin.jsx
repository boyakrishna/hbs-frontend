import React, { useState }  from 'react';
import {  useNavigate } from "react-router-dom";
import Home from './Home';


function AdminLogin() {

  const [hostelid, setHostelid] = useState("");
  const [dob, setDob] = useState("");

  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();

  const loginData = {
    hostelid: hostelid,
    dob: dob
  };

  try {

    const res = await fetch("https://hbs-project-backeend.onrender.com/api/adminlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginData)
    });

    if (!res.ok) {
      alert("Invalid Hostel ID or Password");
      return;
    }

    const data = await res.json();

    // save admin details
    localStorage.setItem("admin", JSON.stringify(data));

    navigate("/admindetails");

  } catch (error) {
    console.error("Login Error:", error);
    alert("Server Error");
  }
};

  return (
<>
 
  <Home/>
      <h3 className="text-center text-secondary"
      style={{
        marginTop:"80px",
        marginLeft:"50px",
        fontFamily:"sans-serif",
        fontWeight:"300",
      }}>Admin</h3>
         <div className=" row  card-body card-shadow" 
    style={{
      marginLeft:"550px",
      marginRight:"480px",
      padding:"10px 10px",
      backgroundColor:"#175891",
      borderRadius:"10px"
    }}>

      <form onSubmit={handleLogin}>

        <div className="mb-3 text-white">
          <label className='d-flex' style={{
            fontFamily:"sans-serif",
            fontSize:"16px",
            fontWeight:"400"
          }}>Hostel ID</label>
          <input
            type="text"
            className="form-control"
                style={{
              margin:"10px",
              padding:"4px",
              borderRadius:"15px"
            }}
            value={hostelid}
            onChange={(e) => setHostelid(e.target.value)}
            required
          />
        </div>

        <div className="mb-3 text-white">
          <label
          style={{
            fontFamily:"sans-serif",
            fontSize:"16px",
            fontWeight:"400"
          }}>Password</label>
          <input
            type="date"
            className="form-control"
            style={{
              margin:"10px",
              padding:"4px",
              borderRadius:"15px"
            }}
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
         <button className="btn btn-m text-white " 
         style={
          {
            backgroundColor:"green",
            marginLeft:'80px',
            borderRadius:"10px"
          }
         }>
          Login
        </button>

      

      </form>
      

    </div>
     <p className='text-center text-danger'
     style={{
      margin:"10px",
      marginLeft:"100px"
     }}><strong>Note:</strong>* admin only login here *</p>
    </>

  );

}

export default AdminLogin;