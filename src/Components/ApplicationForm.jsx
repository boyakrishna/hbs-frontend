import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


function ApplicationForm() {


  const location = useLocation();
  const hostelName = location.state?.hostelName;


  const navigate = useNavigate();

 
  const [user, setUser] = useState({
    education: ""
  });
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [currentstatus, setCurrentstatus] = useState("");
  const [photo, setPhoto] = useState(null);
  const [signature, setSignature] = useState(null);

  
  const handlePhotoUpload = (e) => setPhoto(e.target.files[0]);
  const handleSignatureUpload = (e) => setSignature(e.target.files[0]);

  
 const handleSubmit = async (e) => {
  e.preventDefault();

  
  if (!photo || !signature) {
    Swal.fire("Error", "Please upload both photo and signature!", "error");
    return;
  }

  if (photo.size > 2 * 1024 * 1024 || signature.size > 2 * 1024 * 1024) {
    Swal.fire("Error", "Files must be less than 2MB", "error");
    return;
  }

  try {
    
    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("dob", dateofbirth); 
    formData.append("mobile", mobile);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("education", user.education);
    formData.append("currentstatus", currentstatus);
    formData.append("photo", photo);
    formData.append("signature", signature);

    
    const res = await fetch("https://hbs-project-backeend.onrender.com/api/apply", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Server error:", errorText);
      throw new Error("Server returned error");
    }

    // 4️⃣ Parse backend response
    const data = await res.json();

    // 5️⃣ Show success popup
    Swal.fire({
      title: "Application Submitted",
      html: `
        <h3 style="color:green;">Success</h3>
        <p>Your Application ID:</p>
        <h2 style="color:blue">${data.applicationId}</h2>
        <p style="color:red;">Please save this ID for future login</p>
      `,
      icon: "success",
    });

    if (data.applicationId) {
      navigate("/userdetails", {
        state: {
          firstname,
          lastname,
          dateofbirth,
          mobile,
          email,
          address,
          education: user.education,
          currentstatus,
          photo,
          signature,
          applicationId: data.applicationId,
        },
      });
    }
  } catch (error) {
    console.error("Error submitting application:", error);
    Swal.fire(
      "Submission Failed",
      "Error submitting application. Check console for details.",
      "error"
    );
  }
};

  return (
    <div className="container mt-4">
      <form className="card p-5 shadow" 
      style={{
        backgroundColor:"#F0F8FF"
      }} onSubmit={handleSubmit}>
        <h2 className="text-center text-danger">{hostelName}- Application </h2>

        <div className="row">
          <div className="col">
            <label>First Name</label>
            <input type="text" className="form-control" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
          </div>
          <div className="col">
            <label>Last Name</label>
            <input type="text" className="form-control" value={lastname} onChange={(e) => setLastname(e.target.value)} />
          </div>
          <div className="col">
            <label>Date of Birth</label>
            <input type="date" className="form-control" value={dateofbirth} onChange={(e) => setDateofbirth(e.target.value)} />
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col">
            <label>Mobile</label>
            <input type="text" className="form-control" value={mobile}  onChange={(e) => setMobile(e.target.value)} />
          </div>
          <div className="col">
            <label>Email</label>
            <input type="text" className="form-control" value={email}   onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="col">
            <label>Address</label>
            <textarea className="form-control" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col">
            <label>Education</label>
            <select className="form-select" value={user.education} onChange={(e) => setUser({ ...user, education: e.target.value })}>
              <option value="">Select</option>
              <option value="Diploma">Diploma</option>
              <option value="B.Tech">B.Tech/M.Tech</option>
              <option value="Degree">Degree/PG</option>
              <option value="MBA">MBA/MSC/M.com</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="col">
            <label>Current Status</label>
            <input type="text" className="form-control" value={currentstatus} onChange={(e) => setCurrentstatus(e.target.value)} />
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col">
            <label>Upload Photo</label>
            <input type="file" accept="image/*" onChange={handlePhotoUpload} />
            {photo && (
              <div>
                <p>Preview</p>
                <img src={URL.createObjectURL(photo)} alt="preview" width="120" />
              </div>
            )}

            <label>Upload Signature</label>
            <input type="file" accept="image/*"  onChange={handleSignatureUpload} />
            {signature && (
              <div>
                <p>Preview</p>
                <img src={URL.createObjectURL(signature)} alt="preview" width="120" />
              </div>
            )}
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col">
            <button type="submit" className="btn btn-success">Submit</button>
            <Link className="btn btn-danger ms-2" to="/hostel">Cancel</Link>
          </div>
        </div>

      </form>
    </div>
  );
}

export default ApplicationForm;