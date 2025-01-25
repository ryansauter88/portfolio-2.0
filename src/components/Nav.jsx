// Bringing in the required import from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom';
import Navbar from './UI/Navbar';

function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  const currentPage = useLocation().pathname;

  return (
    <Navbar
      links={[
        <Link key={1} to="/"
        className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>,
        <Link key={2} to="/about"
        className={currentPage === '/about' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </Link>,
        <Link key={3} to="/contact"
        className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>,
        <Link key={4} to="/resume"
        className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>,
      ]}
    />
  );
}

export default Nav