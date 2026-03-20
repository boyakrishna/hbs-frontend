import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleOtpChange = (value, index) => {

    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      document.getElementById("otp-" + (index + 1)).focus();
    }
  };

  const sendOtp = async () => {

    if (!email.includes("@")) {
      alert("Enter valid email");
      return;
    }

    const res = await fetch(
      "http://localhost:8080/api/send-otp?email=" + email,
      { method: "POST" }
    );

    const data = await res.text();

    alert(data);
  };

  const verifyOtp = async () => {

    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 4) {
      alert("Enter complete OTP");
      return;
    }

    const res = await fetch(
      "https://hbs-project-backeend.onrender.com/api/verify-otp?email=" + email + "&otp=" + enteredOtp,
      { method: "POST" }
    );

    const data = await res.text();

    if (data === "OTP Verified") {

      localStorage.setItem("userEmail", email);
      alert("Login Successful");
      navigate("/header");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <>
    <Home/>
    <div style={styles.container}>
      

      <div style={styles.box}>

        <h2>Email OTP Login</h2>

        <input
          style={styles.mobile}
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <button style={styles.button} onClick={sendOtp}>
          Send OTP
        </button>

        <div style={styles.otpContainer}>

          {otp.map((data, index)=>(
            <input
              key={index}
              id={"otp-"+index}
              style={styles.otpInput}
              maxLength="1"
              value={data}
              onChange={(e)=>handleOtpChange(e.target.value, index)}
            />
          ))}

        </div>

        <button style={styles.button} onClick={verifyOtp}>
          Verify OTP
        </button>

      </div>

    </div>
    </>
  );
}

const styles = {

container:{
height:"70vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
background:"#f5f5f5"
},

box:{
background:"white",
padding:"40px",
borderRadius:"10px",
boxShadow:"0 0 10px gray",
textAlign:"center"
},

mobile:{
padding:"10px",
width:"220px",
marginBottom:"10px"
},

otpContainer:{
display:"flex",
justifyContent:"center",
gap:"10px",
marginTop:"15px",
marginBottom:"15px"
},

otpInput:{
width:"40px",
height:"40px",
fontSize:"20px",
textAlign:"center"
},

button:{
padding:"10px 20px",
background:"#0ccf61",
color:"white",
border:"none",
marginTop:"10px",
cursor:"pointer",
borderRadius:"10px"
}

};

export default Login;