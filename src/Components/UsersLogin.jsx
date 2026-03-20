import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

function UserLogin() {

  const [applicationId,setApplicationId] = useState("");
  const [dob,setDob] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("https://hbs-project-backeend.onrender.com/api/userlogin",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        applicationId:applicationId,
        dob:dob
      })
    });


    if(response.ok){

      const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data));

      alert("Login Successful");

      navigate("/userdetails",{state:data});

    }else{
      alert("Invalid Application ID or DOB");
    }

  };

  return (

  

<>

        <h4 className="text-center text-dark ">Print Application</h4>
          <div className=" "
    style={{
        marginLeft:"380px",
        marginRight:"200px"
       

     
    }}>
      <div className=" card-body card-shadow "
      style={{
        marginLeft:"110px",
        marginRight:"290px",
       paddingLeft:"25px",
       paddingRight:"25px",
       borderRadius:"5px",
       backgroundColor:"#F0F8FF"
        
         
        
      }}>

        <form onSubmit={handleLogin}>

          <div className=" ">
            <label className="text-dark  "
          style={{
            marginTop:"10px",
            fontFamily:"sans-serif",
            fontSize:"16px"
          }}>Application ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="ENTER APPLICATION ID "
           
              value={applicationId}
              onChange={(e)=>setApplicationId(e.target.value)}
              required
            />
          </div>

          <div className="flex">
            <label
         >Date Of Birth</label>
            <input
              type="date"
              className="form-control "
            
              value={dob}
              onChange={(e)=>setDob(e.target.value)}
              required
              
            />
          </div>

          <button className="btn btn-primary btn-sm"
          style={{
            marginRight:"80px",
            marginTop:"10px",
            marginBottom:"10px"
          }}>
           submit
          </button>
           <Link className="btn btn-danger btn-sm flex"
          style={{
            
            marginTop:"10px",
            marginBottom:"10px"
            
          }} to="/hostel">
            Cancel
          </Link>

        </form>

      </div>

    </div>
    </>
  );
}

export default UserLogin;