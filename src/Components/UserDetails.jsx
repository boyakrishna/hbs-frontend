import React from "react";
import { useLocation, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./Navbar";

function UserDetails() {
  const location = useLocation();
  const user = location.state;

  if (!user) {
    return (
      <div className="container mt-5">
        <h3>No user data found. Please submit the application first.</h3>
        <Link to="/hostel" className="btn btn-primary mt-3">Go Back</Link>
      </div>
    );
  }

  return (
    <>
    
    <div className="container  mt-4">
      
      <Navbar/>
     <h2 className="text-center text-secondary m-3 ">Application Details</h2>
      <table className="table flex table-bordered table-center">
        
        <tbody className=" table-shadow">
           <tr>
            <th>Photo</th>
            <td>
              {user.photo ? (
                   <img
                    src={`https://hbs-project-backeend.onrender.com/uploads/${user.photo}`}
                    width="60"
                    alt=""
                  />
              ) : (
                "No photo uploaded"
              )}
            </td>
          </tr>
          <tr>
            <th>Signature</th>
            <td>
              {user.signature ? (
                <img src={`https://hbs-project-backeend.onrender.com/uploads/${user.signature}`} width="120" alt=""/>
              ) : (
                "No signature uploaded"
              )}
            </td>
          </tr>
          <tr>
            <th>Application ID</th>
            <td>{user.applicationId}</td>
          </tr>
          <tr>
            <th>First Name</th>
            <td>{user.firstname}</td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>{user.lastname}</td>
          </tr>
          <tr>
            <th>Date of Birth</th>
            <td>{user.dob}</td>
          </tr>
          <tr>
            <th>Mobile</th>
            <td>{user.mobile}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{user.email}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>{user.address}</td>
          </tr>
          <tr>
            <th>Education</th>
            <td>{user.education}</td>
          </tr>
          <tr>
            <th>Current Status</th>
            <td>{user.currentstatus}</td>
          </tr>
          <tr>
            <th>Application status</th>
            <td>{user.status}</td>
          </tr>
         
        </tbody>
      </table>

      <div className="text-center mt-3">
        <Link to="/userdetails" className="btn btn-primary btn btn-sm m-4">Edit</Link>
                  <button
type="button"
className="bg-primary text-white btn btn-sm"
onClick={window.print}
>
Print
</button>
<Link to="/hostel" className="btn btn-danger btn btn-sm m-4">Back</Link>
   
      </div>

    </div>
    </>
  );
}

export default UserDetails;