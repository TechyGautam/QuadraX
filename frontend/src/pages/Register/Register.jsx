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
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div
        className="w-full max-w-md rounded-xl shadow-lg"
        style={{
          padding : "32px",
          boxSizing:"border-box",
          backgroundColor: "var(--bg-card)",
          color: "var(--text-primary)",
          border: "1px solid var(--border-color)",
        }}
      >
      
      <div className="text-center mb-6">
          <h1 className="text-2xl font-bold" style={{ color: "var(--accent)" }}>
            Blood Donor Finder
          </h1>

          <h2 className="text-xl font-semibold mt-2">Create Your Account</h2>
          <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
            Join our community and help save lives.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div> 
            
          <label htmlFor="firstName" className="block text-xs font-medium mb-1">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter first name"
              required
              className="w-full p-2.5 rounded-lg border outline-none focus:ring-2 focus:ring-red-400 text-sm"
              style={{
                backgroundColor: "var(--bg-primary)",
                color: "var(--text-primary)",
                borderColor: "var(--border-color)",
              }}
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-xs font-medium mb-1"> Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter last name"
              required
              className="w-full p-2.5 rounded-lg border outline-none focus:ring-2 focus:ring-red-400 text-sm"
              style={{
                backgroundColor: "var(--bg-primary)",
                color: "var(--text-primary)",
                borderColor: "var(--border-color)",
              }}
            />
          </div> 

            <div>
            <label htmlFor="email" className="block text-xs font-medium mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@example.com"
              required
              className="w-full p-2.5 rounded-lg border outline-none focus:ring-2 focus:ring-red-400 text-sm"
              style={{
                backgroundColor: "var(--bg-primary)",
                color: "var(--text-primary)",
                borderColor: "var(--border-color)",
              }}
            />
          </div>

          <div>
            <label htmlFor="mobile" className="block text-sm mb-1">Mobile Number</label>
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
              }}
            />
            {errors.mobile && (<p className="text-xs mt-1 text-red-500">{errors.mobile}</p>)}
          </div>
          
          <div>
            <label htmlFor="bloodGroup" className="block text-sm mb-1">Blood Group</label>
             <select id="bloodGroup" 
             name="bloodGroup" 
             required 
             defaultValue=""
             className="w-full p-2.5 rounded-lg border outline-none focus:ring-2 focus:ring-red-400 text-sm"
             style={{
               backgroundColor: "var(--bg-primary)",
               color: "var(--text-primary)",
               borderColor: "var(--border-color)",
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

<div>
  <label htmlFor="city" className="block text-xs font-medium mb-1">City</label>
  <input 
  type="text" 
  id="city" 
  name="city" 
  placeholder="Enter your city" 
  required 
  className="w-full p-2.5 rounded-lg border outline-none focus:ring-2 focus:ring-pink-400"
  style={{
    backgroundColor:"var(--bg-primary)",
    color:"var(--text-primary)",
    borderColor:"var(--border-color)",
  }} />
</div>


<div>
  <label htmlFor="pincode" className="block text-xs font-medium mb-1">
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
   className="w-full sm:w-1/2 p-2.5 rounded-lg border outline-none focus:ring-2 focus:ring-pink-400 text-sm"
   style={{
    backgroundColor:"var(--bg-primary)",
    color:"var(--text-primary)",
    borderColor:"var(--border-color)",
  }} />
  {errors.pincode && (<p className = "text-xs mt-1 text-red-500">{errors.pincode}</p>)}
</div>

  <div> 
  <label htmlFor="password" className="block text-xs font-medium mb-1"> Password</label>
  <div style={{position:"relative"}}>
    <input type={showPassword?"text" : "password"}
              id="password"
              name="password"
              placeholder="Create password"
              minLength={8}
              required
              onChange={(e) => checkPasswordStrength(e.target.value)}
              className="w-full p-2.5 pr-14 rounded-lg border outline-none focus:ring-2 focus:ring-red-400"
              style={{
                backgroundColor: "var(--bg-primary)",
                color: "var(--text-primary)",
                borderColor: "var(--border-color)",
              }}
            />
           <button 
            type="button"  
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm"
            style={{color:"var(--text-secondary)"}}>
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {passwordStrength && ( 
            <p className={`text-xs mt-1 ${passwordStrength ==="Weak"?"text-red-500":passwordStrength === "Medium"?"text-yellow-500":"text-green-500"}`}>
            Strength : {passwordStrength}
            </p>)}

          {errors.password && <p className="text-xs mt-1 text-red-500">{errors.password}</p>}
        </div>  

          <div>
            <label htmlFor="confirmPassword" className="block text-xs font-medium mb-1"> Confirm Password </label>
            <div className="relative">
            <input 
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-enter password"
              minLength={8}
              required
              className="w-full p-3 pr-16 rounded-lg border outline-none focus:ring-2 focus:ring-red-400"
              style={{
                backgroundColor: "var(--bg-primary)",
                color: "var(--text-primary)",
                borderColor: "var(--border-color)",
              }}
            />
            <button 
              type="button" 
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs  font-medium"
              style={{color: "var(--text-secondary)"}}>
              {showConfirmPassword ? "Hide":"Show"}
            </button>
            </div>
            
             {errors.confirmPassword && <p className="text-sm mt-1 text-red-500">{errors.confirmPassword}</p>}
          </div>

          <div className="flex items-center gap-2 pt-1">
            <input type="checkbox" id="terms" name="terms" required className="accent-pink-500 cursor-pointer"/>
            <label htmlFor="terms" className="text-xs cursor-pointer" style={{color: "var(--text-secondary)"}}>
              I agree to the <span className="underline">Terms and Conditions</span> 
              </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-white hover:opacity-90 transition duration-200 cursor-pointer text-sm shadow-md"
            style={{ 
              backgroundColor: "var(--accent)",
              marginTop:"8px",
             }}
          >Create Account</button>
        </form>
        <div className="text-center mt-4">
          <p className="text-xs" style={{color:"var(--text-secondary)"}}>Already have an account?{" "}
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
