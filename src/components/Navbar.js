// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'activeLink' : 'nonactiveLink'
          }
        >
          Domû
        </NavLink>
        <NavLink
          to="/comedy"
          className={({ isActive }) =>
            isActive ? 'activeLink' : 'nonactiveLink'
          }
        >
          Komedie
        </NavLink>
        <NavLink
          to="/serials"
          className={({ isActive }) =>
            isActive ? 'activeLink' : 'nonactiveLink'
          }
        >
          Seriály
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
