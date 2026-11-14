import "./Register.css";
import {useState} from "react";
function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const[showConfirmPassword, setShowConfirmPassword] = useState(false);
  const[errors, setErrors]= useState({});
  const[passwordStrength, setPasswordStrength] = useState("");

  const checkPasswordStrength = (password) => {
    if(password.length == 0){
      setPasswordStrength("");
    }
    else if(password.length < 8){
      setPasswordStrength("Weak");
    }
    else if(password.length>=8 && 
      /[A-Z]/.test(password) && 
      /[0-9]/.test(password) && 
      /[^A-Za-z0-9]/.test(password))
      {
      setPasswordStrength("Strong");
    }
    else{
      setPasswordStrength("Medium");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const mobile = form.mobile.value;
    const pincode=form.pincode.value;
    const newErrors ={};

    if(!/^[6-9]\d{9}$/.test(mobile)){
      newErrors.mobile= "Please enter a valid 10-digit mobile number.";
    }
     if(!/^[1-9][0-9]{5}$/.test(pincode)){
      newErrors.pincode = "Please enter a valid 6-digit pincode.";
    }

    if(password.length<8){
      newErrors.password = "Password must contain at least 8 characters.";
    }

    if(password !=confirmPassword){
      newErrors.confirmPassword= "Password do not match";
    }

    setErrors(newErrors);

    if(Object.keys(newErrors).length > 0){
      return;
    }
    alert("Registration details validated successfully!");
  };
  

  return (
    <div
      className="min-h-screen flex items-center justify-center registerpage-bg"
      style={{ padding:"32px 16px"}}
    >
      <div
        className="w-full max-w-lg rounded-2xl shadow-xl"
        style={{
          padding : "40px 36px",
          boxSizing:"border-box",
          backgroundColor: "var(--bg-card)",
          color: "var(--text-primary)",
          border: "1px solid var(--border-color)",
        }}
      >
      
      <div className="text-center" style={{marginBottom:"28px" }}>
          <h1 className="text-2xl font-semibold tracking-widest uppercase" style={{ color: "var(--accent)", marginBottom:"8px"}}>
            Blood Donor Finder
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight"style={{color:"var(--text-primary)"}}>Create Your Account</h2>
          <p className="text-sm mt-1.5" style={{ color: "var(--text-secondary)" }}>
            Join our community and help save lives.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div style={{marginBottom:"16px"}}> 
            
          <label htmlFor="firstName" className="block text-sm font-semibold mb-1.5" style={{color: "var(--text-primary"}}>First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter first name"
              required
              className="w-full rounded-lg border outline-none focus:ring-2 focus:ring-red-400 text-sm"
              style={{
                backgroundColor: "var(--bg-primary)",
                color: "var(--text-primary)",
                borderColor: "var(--border-color)",
                padding:"11px 14px",
              }}
            />
          </div>

          <div style={{marginBottom:"16px" }}>
            <label htmlFor="lastName" className="block text-sm font-semibold mb-1.5" style={{color: "var(--text-primary)"}}> Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter last name"
              required
              className="w-full rounded-lg border outline-none focus:ring-2 focus:ring-red-400 text-sm"
              style={{
                backgroundColor: "var(--bg-primary)",
                color: "var(--text-primary)",
                borderColor: "var(--border-color)",
                padding:"11px 14px"
              }}
            />
          </div> 

            <div style={{marginBottom:"16px"}}>
            <label htmlFor="email" className="block text-sm font-semibold mb-1.5"style={{color:"var(--text-primary"}}>Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@example.com"
              required
              className="w-full rounded-lg border outline-none focus:ring-2 focus:ring-red-400 text-sm"
              style={{
                backgroundColor: "var(--bg-primary)",
                color: "var(--text-primary)",
                borderColor: "var(--border-color)",
                padding:"11px 14px",
              }}
            />
          </div>

          <div style={{marginBottom:"16px" }}>
            <label htmlFor="mobile" className="block text-sm font-semibold mb-1.5"style={{color:"var(--text-primary)"}}>Mobile Number</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Enter 10-digit mobile number"
              maxLength={10}
              required
              className="w-full p-2.5 rounded-lg border outline-none focus:ring-2 focus:ring-red-400 text-sm"
              style={{
                backgroundColor: "var(--bg-primary)",
                color: "var(--text-primary)",
                borderColor: "var(--border-color)",
                padding:"11px 14px",
              }}
            />
            {errors.mobile && (<p className="text-xs mt-1 text-red-500">{errors.mobile}</p>)}
          </div>
          
          <div style={{marginBottom:"16px" }}>
            <label htmlFor="bloodGroup" className="block text-sm font-semibold mb-1.5"style={{color:"var(--text-primary)"}}>Blood Group</label>
             <select id="bloodGroup" 
             name="bloodGroup" 
             required 
             defaultValue=""
             className="w-full rounded-lg border outline-none focus:ring-2 focus:ring-red-400 text-sm"
             style={{
               backgroundColor: "var(--bg-primary)",
               color: "var(--text-primary)",
               borderColor: "var(--border-color)",
               padding:"11px 14px",
    }}
  >
    <option value="" disabled> Select your blood group</option>
    <option value="A+">A+</option>
    <option value="A-">A-</option>
    <option value="B+">B+</option>
    <option value="B-">B-</option>
    <option value="AB+">AB+</option>
    <option value="AB-">AB-</option>
    <option value="O+">O+</option>
    <option value="O-">O-</option>
  </select>
</div>

<div style={{marginBottom:"16px" }}>
  <label htmlFor="city" className="block text-sm font-semibold mb-1.5"style={{color:"var(--text-primary)"}}>City</label>
  <input 
  type="text" 
  id="city" 
  name="city" 
  placeholder="Enter your city" 
  required 
  className="w-full rounded-lg border outline-none focus:ring-2 focus:ring-red-400"
  style={{
    backgroundColor:"var(--bg-primary)",
    color:"var(--text-primary)",
    borderColor:"var(--border-color)",
    padding:"11px 14px",
  }} />
</div>


<div style={{marginBottom:"16px"}}>
  <label htmlFor="pincode" className="block text-sm font-semibold mb-1.5"style={{color:"var(--text-primary)"}}>
    Pincode
    </label>
  <input
   type="text" 
   id="pincode" 
   name="pincode" 
   placeholder="Enter 6-digit pincode" 
   maxLength={6} 
   inputMode="numeric" 
   required 
   className="w-full p-2.5 rounded-lg border outline-none focus:ring-2 focus:ring-red-400 text-sm"
   style={{
    backgroundColor:"var(--bg-primary)",
    color:"var(--text-primary)",
    borderColor:"var(--border-color)",
    padding:"11px 14px"
  }} />
  {errors.pincode && (<p className = "text-xs mt-1 text-red-500">{errors.pincode}</p>)}
</div>

  <div style={{marginBottom:"16px"}}> 
  <label htmlFor="password" className="block text-sm font-semibold mb-1.5"style={{color:"var(--text-primary)"}}> Password</label>
  <div style={{position:"relative"}}>
    <input type={showPassword?"text" : "password"}
              id="password"
              name="password"
              placeholder="Create password"
              minLength={8}
              required
              onChange={(e) => checkPasswordStrength(e.target.value)}
              className="w-full rounded-lg border outline-none focus:ring-2 focus:ring-red-400 text-sm"
              style={{
                backgroundColor: "var(--bg-primary)",
                color: "var(--text-primary)",
                borderColor: "var(--border-color)",
                padding:"11px 14px",
                paddingRight:"54px",
              }}
            />
           <button 
            type="button"  
            onClick={() => setShowPassword(!showPassword)}
            className="text-xs font-medium cursor-pointer"
            style={{
              position:"absolute",
              right:"14px",
              top:"50%",
              transform:"translateY(-50%)",
              color:"var(--text-secondary)",
              background:"transparent",
              border:"none"
            }}>
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {passwordStrength && ( 
            <p className={`text-xs mt-1 ${passwordStrength ==="Weak"?"text-red-500":passwordStrength === "Medium"?"text-yellow-500":"text-green-500"}`}>
            Strength : {passwordStrength}
            </p>)}

          {errors.password && <p className="text-xs mt-1 text-red-500">{errors.password}</p>}
        </div>  

          <div style={{marginBottom:"16px"}}>
            <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-1.5"style={{color:"var(--text-primary)"}}> Confirm Password </label>
            <div style={{position:"relative"}}>
            <input 
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-enter password"
              minLength={8}
              required
              className="w-full rounded-lg border outline-none focus:ring-2 focus:ring-red-400"
              style={{
                backgroundColor: "var(--bg-primary)",
                color: "var(--text-primary)",
                borderColor: "var(--border-color)",
                padding:"11px 14px",
                paddingRight: "54px",
              }}
            />
            <button 
              type="button" 
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="text-xs font-medium cursor-pointer"
              style={{
              position:"absolute",
              right:"14px",
              top:"50%",
              transform:"translateY(-50%)",
              color:"var(--text-secondary)",
              background:"transparent",
              border:"none",
              outline: "none"
              }}>

              {showConfirmPassword ? "Hide":"Show"}
            </button>
            </div>
            
             {errors.confirmPassword && <p className="text-sm mt-1 text-red-500">{errors.confirmPassword}</p>}
          </div>

          <div className="flex items-center" style={{gap:"10px",marginTop:"16px",marginBottom:"16px"}}>
            <input 
            type="checkbox"
            id="terms" 
            name="terms" 
            required 
            className="accent-red-500 cursor-pointer"
            style={{width:"16px",height:"16px"}}
            />
            <label htmlFor="terms" className="text-xs cursor-pointer" style={{color: "var(--text-secondary)"}}>
              I agree to the <span className="underline">Terms and Conditions</span> 
              </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg font-semibold text-white hover:opacity-90 transition duration-200 cursor-pointer text-sm shadow-md"
            style={{ 
              backgroundColor: "var(--accent)",
              marginTop:"13px",
             }}
          >Create Account</button>
        </form>
        <div className="text-center"style={{marginTop:"20px"}}>
          <p className="text-s" style={{color:"var(--text-secondary)"}}>Already have an account?{" "}
            <a href = "/login" className="font-semibold hover:underline" style={{color:"var(--accent)"}}>
            Login
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Register;
