
import './App.css';

const bloodGroups = [
  { name: 'A+', color: '#F5D76E' },
  { name: 'A-', color: '#F5D76E' },
  { name: 'B+', color: '#78BFFF' },
  { name: 'B-', color: '#78BFFF' },
  { name: 'AB+', color: '#B99AFF' },
  { name: 'AB-', color: '#B99AFF' },
  { name: 'O+', color: '#83D9A0' },
  { name: 'O-', color: '#83D9A0' },
];

function App() {

  const handleSearch = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const bloodGroup = formData.get('bloodGroup');
    const city = formData.get('city');
    const state = formData.get('state');

    alert(
      `Search Details:\nBlood Group: ${bloodGroup}\nCity: ${city}\nState: ${state}`
    );
  };

  return (
    <div className="app">
      <nav className="navbar">
        
<h2 className="logo">
  <svg className="blood-drop" viewBox="0 0 24 30">
    <path
      d="M12 1 C9 6 2 14 2 20 A10 10 0 0 0 22 20 C22 14 15 6 12 1Z"
      fill="#ff1025"
    />
  </svg>
  Blood<span>Finder</span>
</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#blood-groups">Blood Groups</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-buttons">
          <a href="#login" className="login-btn">Login</a>
          <a href="#register" className="register-btn">Register</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="tagline">BE SOMEONE'S LIFESAVER</p>
            <h1>Donate Blood<br />
              <span>Save Lives.</span>
            </h1>
            <p>
              A single drop of blood can make a huge difference.
              Connect with blood donors and help save lives.
            </p>

            <div className="hero-buttons">
              <a href="#search" className="primary-btn">Find a Donor</a>
              <a href="#register" className="secondary-btn">Become a Donor</a>
            </div>
          </div>

          <div className="hero-card">
            <span className="heart">♥</span>
            <h2>Every Drop</h2>
            <h2 className="pink-text">Counts!</h2>
            <p>Your donation can give someone another chance at life.</p>
          </div>
        </section>

        <section className="search-section" id="search">
          <h2>Find Blood Donors</h2>
          <p>Search for donors according to your requirements.</p>

          <form className="search-box" onSubmit={handleSearch}>
            <select name="bloodGroup" defaultValue="" required>
              <option value="" disabled>Select Blood Group</option>
              {bloodGroups.map((group) => (
                <option key={group.name}>{group.name}</option>
              ))}
            </select>

           <input
              type="text"
              name="city"
              placeholder="Enter your city"
              required
            />

            <input
              type="text"
              name="state"
              placeholder="Enter your state"
              required
            />
            <button type="submit">Search Donors</button>
            </form>
        </section>

        <section className="blood-section" id="blood-groups">
          <h2>Choose Your Blood Group</h2>
          <p>Every blood group matters. Find the one you need.</p>

          <div className="blood-grid">
            {bloodGroups.map((group) => (
              <div
                className="blood-card"
                key={group.name}
                style={{ '--group-color': group.color }}
              >
                {group.name}
              </div>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <h2>How It Works</h2>
          <p className="section-description">
            Three simple steps to help save a life.
          </p>

          <div className="steps">
            <div className="step-card">
              <span>01</span>
              <h3>Search Donors</h3>
              <p>Choose a blood group and enter your location.</p>
            </div>

            <div className="step-card">
              <span>02</span>
              <h3>Connect</h3>
              <p>Find and connect with available blood donors.</p>
            </div>

            <div className="step-card">
              <span>03</span>
              <h3>Save Lives</h3>
              <p>Get the help you need and make a difference.</p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact">
        <h2>
  Blood<span>Finder</span>
  <svg className="blood-drop" viewBox="0 0 24 30">
    <path
      d="M12 1 C9 6 2 14 2 20 A10 10 0 0 0 22 20 C22 14 15 6 12 1Z"
      fill="#ff1025"
    />
  </svg>
</h2>
        <p>Connecting donors. Saving lives.</p>
        <p className="copyright">
          © 2026 Blood Donor Finder. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
