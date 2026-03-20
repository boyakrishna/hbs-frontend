import React , { useState,useEffect }from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

const Hostel = () => {
    

const [hostels, setHostels] = useState([]);
const [selectedArea, setSelectedArea] = useState("");

useEffect(() => {
    axios.get("https://hbs-project-backeend.onrender.com/api/hostels")
    .then(res => {
        setHostels(res.data);
    })
    .catch(err => {
        console.log(err);
    });
}, []);

const areas = [...new Set(hostels.map((h) => h.area))];

const filteredHostels = selectedArea
? hostels.filter((h) => h.area === selectedArea)
: hostels;

return (
<div>

<div className="row">
<div className="col">

<select
className="selection"
onChange={(e) => setSelectedArea(e.target.value)}
>

<option value="">Select Area</option>

{areas.map((area, index) => (
<option key={index} value={area}>
{area}
</option>
))}

</select>

</div>
</div>

<table className="table table-striped table-bordered">

<thead>
<tr>
<th>ID</th>
<th>Hostel Name</th>

<th>Area</th>
<th>Facilities</th>
<th>Contact</th>
<th>Charges</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{filteredHostels.map((hostel) => (

<tr key={hostel.hostelid}>

<td>{hostel.hostelid}</td>
<td>{hostel.hostelname}</td>

<td>{hostel.area}</td>
<td>{hostel.facilities}</td>
<td>{hostel.contact}</td>
<td>{hostel.charges}</td>

<td>
<Link
className="nav-link text-danger text-center"
to="/form"
state={{hostelid: hostel.hostelid, hostelName: hostel.hostelname }}

>
clickhere
</Link>
</td>

</tr>

))}

</tbody>

</table>

<button
type="button"
className="bg-primary text-white btn btn-sm"
onClick={window.print}
>
Print
</button>

</div>
);
}

export default Hostel;