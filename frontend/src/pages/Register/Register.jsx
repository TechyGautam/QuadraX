
function Register() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div
        className="w-full max-w-md p-6 rounded-xl shadow-lg"
        style={{
          backgroundColor: "var(--bg-card)",
          color: "var(--text-primary)",
          border: "1px solid var(--border-color)",
        }}
      >
        <div className="text-center mb-6">
          <h1
            className="text-2xl font-bold"
            style={{ color: "var(--accent)" }}
          >
            Blood Donor Finder
          </h1>

          <h2 className="text-xl font-semibold mt-3">
            Create Your Account
          </h2>

          <p
            className="text-sm mt-2"
            style={{ color: "var(--text-secondary)" }}
          >
            Join our community and help save lives.
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter first name"
              required
              className="w-full p-3 rounded-lg border outline-none focus:ring-2 focus:ring-red-400"
              style={{
                backgroundColor: "var(--bg-primary)",
                color: "var(--text-primary)",
                borderColor: "var(--border-color)",
              }}
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter last name"
              required
              className="w-full p-3 rounded-lg border outline-none focus:ring-2 focus:ring-red-400"
              style={{
                backgroundColor: "var(--bg-primary)",
                color: "var(--text-primary)",
                borderColor: "var(--border-color)",
              }}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
              required
              className="w-full p-3 rounded-lg border outline-none focus:ring-2 focus:ring-red-400"
              style={{
                backgroundColor: "var(--bg-primary)",
                color: "var(--text-primary)",
                borderColor: "var(--border-color)",
              }}
            />
          </div>

          <div>
            <label htmlFor="mobile" className="block text-sm mb-2">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Enter 10-digit mobile number"
              maxLength={10}
              required
              className="w-full p-3 rounded-lg border outline-none focus:ring-2 focus:ring-red-400"
              style={{
                backgroundColor: "var(--bg-primary)",
                color: "var(--text-primary)",
                borderColor: "var(--border-color)",
              }}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create password"
              minLength={8}
              required
              className="w-full p-3 rounded-lg border outline-none focus:ring-2 focus:ring-red-400"
              style={{
                backgroundColor: "var(--bg-primary)",
                color: "var(--text-primary)",
                borderColor: "var(--border-color)",
              }}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-enter password"
              minLength={8}
              required
              className="w-full p-3 rounded-lg border outline-none focus:ring-2 focus:ring-red-400"
              style={{
                backgroundColor: "var(--bg-primary)",
                color: "var(--text-primary)",
                borderColor: "var(--border-color)",
              }}
            />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="terms" name="terms" required />
            <label htmlFor="terms" className="text-sm">
              I agree to the Terms and Conditions
            </label>
          </div>

          <button
            type="submit"
            className="w-full p-3 rounded-lg font-semibold text-white hover:opacity-90 transition duration-200 cursor-pointer"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
