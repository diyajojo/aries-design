import './index.css';

function App() {
  return (
    <div className="landing-container">
      {/* Background gradients */}
      <div className="bg-gradient bg-teal-top-right"></div>
      <div className="bg-gradient bg-red-bottom-left"></div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo-container">
          <img src="/assets/logo.svg" alt="Aeris Logo" className="nav-logo" />
          <h1 className="nav-title">AERIS</h1>
        </div>

        <div className="nav-menu-pill">
          <ul className="nav-links">
            <li className="nav-item active">Home</li>
            <li className="nav-item">Features</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact</li>
          </ul>

          <div className="nav-actions">
            <button className="btn btn-login">login</button>
            <button className="btn btn-create">Create Account</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero-section">
        <div className="hero-content">
          <img src="/assets/logo.svg" alt="Aeris Icon" className="hero-icon" />
          <h2 className="hello-world">HELLO WORLD!</h2>
          <h1 className="meet-aeris">MEET AERIS</h1>
          <h3 className="system-subtitle">SMART EMERGENCY RESPONSE SYSTEM</h3>

          <div className="avatar-description-group">
            <div className="avatars">
              <img src="/assets/group.svg" alt="Users" className="group-avatar" />
            </div>
            <p className="description-text">
              Report, track, and receive emergency help<br />
              effortlessly with AERIS.
            </p>
          </div>
        </div>

        <div className="hero-illustration">
          <img src="/assets/landing.svg" alt="Emergency Response App Illustration" className="main-illustration" />
        </div>
      </main>
    </div>
  );
}

export default App;
