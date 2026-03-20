import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Addhostel() {
    const navigate = useNavigate();

const [hostel, setHostel] = useState({
    hostelname: "",
    dob:"",
    area: "",
    facilities: "",
    contact: "",
    charges: ""
});

const handleChange = (e) => {
    setHostel({
        ...hostel,
        [e.target.name]: e.target.value
    });
};

const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("https://hbs-project-backeend.onrender.com/api/addhostel", hostel)
    .then(res => {

        const data = res.data;

        Swal.fire({
          title: "Hostel Added Successfully",
          html: `
            <h3 style="color:green;">Success</h3>
            <p>Your Hostel ID:</p>
            <h2 style="color:blue">${data.hostelid}</h2>
            <p style="color:red;">Please save this ID for future login</p>
          `,
          icon: "success"
        });

        setHostel({
          hostelname:"",
          dob:"",
          area:"",
          facilities:"",
          contact:"",
          charges:""
        });
        navigate('/hostel')

    })
    .catch(err => {
        console.log(err);
        alert("Error adding hostel");
    });
};

return (
<div className="container  mt-4">

<div className="card shadow p-4"
style={{
    backgroundColor:"#F0F8FF"
}}>

<h3 className="text-center mb-4">Register Hostel</h3>

<form onSubmit={handleSubmit}>

<div className="row">

<div className="col">
<label>Hostel Name</label>
<input type="text"
name="hostelname"
className="form-control"
value={hostel.hostelname}
onChange={handleChange}
required
/>
</div>

<div className="col">
<label>Date Of Birth</label>
<input type="date"
name="dob"
className="form-control"
value={hostel.dob}
onChange={handleChange}
required
/>
</div>

<div className="col">
<label>Area</label>
<input type="text"
name="area"
className="form-control"
value={hostel.area}
onChange={handleChange}
required
/>
</div>

</div>

<br/>

<div className="row">

<div className="col">
<label>Facilities</label>
<input type="text"
name="facilities"
className="form-control"
value={hostel.facilities}
onChange={handleChange}
required
/>
</div>

<div className="col">
<label>Contact</label>
<input type="text"
name="contact"
className="form-control"
value={hostel.contact}
onChange={handleChange}
required
/>
</div>

<div className="col">
<label>Charges</label>
<input type="text"
name="charges"
className="form-control"
value={hostel.charges}
onChange={handleChange}
/>
</div>

</div>

<br/>

<div className="text-center">
<button className="btn btn-primary btn-sm">
Submit
</button>

</div>

</form>

</div>

</div>
);
}

export default Addhostel;