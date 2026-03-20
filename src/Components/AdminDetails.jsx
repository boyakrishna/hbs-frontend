import React, { useEffect, useState } from "react";

import Navbar from './Navbar';
import axios from "axios";

function AdminDetails() {


  const [users, setUsers] = useState([]);  

const admin = JSON.parse(localStorage.getItem("admin"));
const hostelid = admin?.hostelid;

useEffect(() => {

  if(!hostelid) return;

  fetch(`http://localhost:8080/api/applications`)
    .then(res => res.json())
    .then(data => {
      setUsers(data);
    })
    .catch(err => console.log(err));

}, [hostelid]);

const deleteapplications = (applicationId) => {

    axios.delete(`https://hbs-project-backeend.onrender.com/api/application/${applicationId}`)
      .then(() => {
        alert("Application deleted successfully");

        // remove deleted user from UI
        setUsers(users.filter(user => user.applicationId !== applicationId));
      })
      .catch(err => console.log(err));

  };
  const approveApplication = async (applicationId) => {

  await axios.put(`https://hbs-project-backeend.onrender.com/api/application/${applicationId}/approve`);

  setUsers(users.map(user =>
    user.applicationId === applicationId ? { ...user, status: "Approved"} : user
  ));
};  const rejectApplication = async (applicationId) => {

  await axios.put(`https://hbs-project-backeend.onrender.com/api/application/${applicationId}/reject`);

  setUsers(users.map(user =>
    user.applicationId === applicationId ? { ...user, status: "Rejected"} : user
  ));
};

  return (
     
    <div className="container mt-4">
       <Navbar/>
       <h3 className="text-center text-secondary">Applications Data</h3>
      <table className="table table-bordered">

        <thead colSpan="7" className="text-center">
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Education</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody className="text-center"> 

          {users.length > 0 ? (

            users.map((user) => (

              <tr key={user.applicationId}>

                <td>
                  <img
                    src={`https://hbs-project-backeend.onrender.com/uploads/${user.photo}`}
                    width="60"
                    alt=""
                  />
                </td>

                <td>
                  {user.firstname} {user.lastname}
                </td>

                <td>{user.dob}</td>

                <td>{user.mobile}</td>

                <td>{user.email}</td>

                <td>{user.education}</td>
                <td >{user.status}</td>
                <td colSpan="7" className="text-center">
                <button type="button" className="btn btn-sm bg-success text-white flex" onClick={()=>approveApplication (user.applicationId)}>Approve</button> 
                <button type="button" className="btn btn-sm bg-primary text-white flex" onClick={()=>rejectApplication (user.applicationId)}>Reject</button> 
                <button type="button" onClick={()=> deleteapplications (user.applicationId) } className="btn btn-sm bg-danger text-white">Delete</button></td>

              </tr>

            ))

          ) : (

            <tr>
              <td colSpan="6" className="text-center">
                No Users Found
              </td>
            </tr>

          )}

        </tbody>

      </table>
      <button type="button" className="btn btn-sm bg-primary text-white"
      style={{
        marginLeft:"480px",
        padding:"5px 4px",
        marginBottom:"35px"

      }} onClick={()=>{window.print()}}>Print</button>
    </div>
  );
}

export default AdminDetails;