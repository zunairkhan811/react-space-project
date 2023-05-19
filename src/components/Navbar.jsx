import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';

const Navbar = () => (
  <>
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img src={Logo} alt="Space Ship Logo" className="logo-img" />
          Space Travelers&apos; Hub
        </NavLink>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/">Rocket</NavLink>
        </li>
        <li>
          <NavLink to="/mission">Missions</NavLink>
        </li>
        <li>
          <NavLink to="/myprofile">My Profile</NavLink>
        </li>
      </ul>
    </nav>
    <hr />
  </>
);

export default Navbar;
