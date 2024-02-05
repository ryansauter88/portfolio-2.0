// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

// TODO: add variable that gets passed to navbar and highlights the selected category

function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link" to="/">
          About Me
        </Link>,
        <Link key={2} className="nav-link" to="/portfolio">
          Portfolio
        </Link>,
        <Link key={3} className="nav-link" to="/contact">
          Contact
        </Link>,
        <Link key={4} className="nav-link" to="/resume">
          Resume
        </Link>,
      ]}
    />
  );
}

export default Nav