import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function Navbar() {

  const location = useLocation();
  const user = location.state;

  const navigate = useNavigate();

  

  const handleLogout = () => {
    navigate("/hostel");
  };

  return (

    <div
      className="d-flex justify-content-between align-items-center px-4"
      style={{background:"#0e084cfa", height:"60px"}}
    >

      <h4 className="text-white m-0">HOSTEL BOOKING SYSTEM</h4>

      {user && (
        <div className="d-flex align-items-center text-white">

          <span style={{fontSize:"17px"}}>
            Welcome <b>{user.firstname}{user.lastname}</b>
          </span>

          <button
            onClick={handleLogout}
            className="btn btn-success ms-3"
          >
            Logout
          </button>

        </div>
      )}

     
</div>
  );

};


export default Navbar;