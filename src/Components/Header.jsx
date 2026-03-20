import React from 'react';
import { Link } from 'react-router-dom';
import {  useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Footer';


const Header = () => { 
  const navigate = useNavigate();


  const email = localStorage.getItem("userEmail");

  const logout = () => {
    localStorage.removeItem("userEmail");
    navigate("/");
  };
    return (
       <>
        <div>
          
                <nav style={{
                  marginLeft:"5px",
                   marginRight:"20px"
                }}>
                    <div className="row card-body ">
                         <h4 className=' text-center text-success text-bold text-shadow heading'><strong>HOSTEL  MANAGEMENT  SYSTEM - HYDERABAD (PVT CCP.)</strong></h4>
                    </div>
                    
                   
                    <div className="row card-body">
                        <h5 className='symbol text-center'><img src='image.png' alt='' height='55' width=''/>GOVERNMENT OF TELANGANA</h5>
                       <p className='text-center paragraph'> Hyderabad , Medchal-Malkajgiri code:500034
                        Contact: +91 8754327541,0827432767</p>
                    <div>
            

            <div className=" row">
            
  <nav className="navbar navbar-expand-sm navbar-dark bg-success highlight">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls='navbarNav'  aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse col-1" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link active" to="/header"> Home</Link>
        </li>
        <div className="dropdown">
  <button className="btn btn-success  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
  style={{
  backgroundColor:"hsla(133, 93%, 27%, 0.836)",
  fontSize: "16px",
  fontWeight:"600",
  marginLeft:"50px",
  marginRight:"50px"
  }}>
    Services
  </button>
  <ul class="dropdown-menu bg-success ">
    <li><Link className="dropdown-item  " to="/hostel"><h6 className='text-dark '>Hostels List</h6></Link></li>
    <li><Link className="dropdown-item " to="/hostel"><h6 className='text-dark '>Apply</h6></Link></li>
    <li><Link className="dropdown-item " to="/userlogin">Print Application</Link></li>
  </ul>
</div>
      <li>

      </li>
        <li className="nav-item">
          <Link className="nav-link active disable" to="/">Management</Link>
        </li>
         
        <div className="dropdown">
  <button className="btn btn-success  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
    style={{
  backgroundColor:"hsla(133, 93%, 27%, 0.836)",
  fontSize: "16px",
  fontWeight:"600",
  marginLeft:"50px",
  marginRight:"50px"
  }}>
   Department
  </button>
  <ul class="dropdown-menu bg-success ">
    <li><Link className="dropdown-item  " to="/adminlogin"><h6 className='text-dark '>Admin</h6></Link></li>
    <li><Link className="dropdown-item " to="/register"><h6 className='text-dark '>Registere here for Hostel Owners</h6></Link></li>
    <li><Link className="dropdown-item " to="/userlogin">Print Applications </Link></li>
  </ul>
</div>
 <li className="nav-item">
          <Link className="nav-link active" to="/Aboutus">About us</Link>
        </li>
      </ul>


    </div>
  </div>
   
                      {email ? (
          <>
            <span className='text-white' style={
              {
                marginRight:"px",
                }}>{email}</span>

            <button className='btn btn-sm text-white bg-success' onClick={logout} style={styles.logout}>
            <span class="material-symbols-outlined">
logout
</span>
            </button>
          </>
        ) : (
          <button className='btn btn-sm text-white bg-success' onClick={()=>navigate("/")}><b>Login</b></button>
        )}

</nav>
            </div>
        

           
            
        </div>
                        
                    </div>
                    
                </nav>

                <div className="container">
                  <h5 className='mt-4'>For Students :</h5>
                  <div className="row">
                    <div className="col">
                      <div className="card-body card-shadow  p-5 mt-4"
                      style={{
                        backgroundColor:"#000080",
                        borderRadius:'15px',
                        marginBottom:"100px"
                        
                        
                      }}>
                        <h3 className='text-center'><a className='nav-link active text-shadow text-white' href='/hostel'>Apply for Hostel</a></h3>

                      </div>
                    </div>
                    <div className="container col">
                      <div className="card-body card-shadow  p-5 mt-4"
                        style={{
                        backgroundColor:"#BA55D3",
                        borderRadius:'15px',
                        
                        
                      }}>
                        <h3 className='text-center'><Link className='nav-link active text-shadow text-white' to='/userlogin'><i class="fa-solid fa-print"></i>Print Application</Link></h3>

                      </div>

                    </div>
                    <div className="col">
                      <div className="card-body card-shadow  p-5 mt-4"
                        style={{
                        backgroundColor:"#008080",
                        borderRadius:'15px',
                        
                        
                      }}>
                        <h3 className='text-center'><Link className='nav-link active text-shadow text-white' to='/userlogin'>Track Application</Link></h3>
                      </div>
                    </div>
                  </div>
                </div>
               
        </div>
        <Footer/>
       </>
    );
};
const styles ={
navbar:{

justifyContent:"space-between",
alignItems:"center",
padding:"10px 10px",
background:"#0ccf61",
color:"white"
},

logout:{
marginRight:"50px",
border:"none",
background:"white",
color:"#0ccf61",
cursor:"pointer",
borderRadius:"5px"
}
};

export default Header;