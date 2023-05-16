import Logo from '../images/logo.png';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <a href="#f">
        <img src={Logo} alt="Space Ship Logo" className="logo-img" />
        Space Travelers&apos; Hub
      </a>
    </div>

    <hr />
  </nav>
);

export default Navbar;
