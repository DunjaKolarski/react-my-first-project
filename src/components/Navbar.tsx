import logo from "../assets/pawspa-logo.jpg";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <p>PawSpa</p>
        <img src={logo} alt="Paw Spa Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
