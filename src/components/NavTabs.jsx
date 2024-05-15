import { Link, useLocation } from 'react-router-dom';
import style from './NavTabs.module.css'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
      <ul className={`nav nav-item ${style.navigation}`}>
        <li className="nav-item">
          <Link
            to="/"
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === '/' ? `${style.activeTab} nav-link` : 'nav-link'}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Skills"
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/Skills' ? `${style.activeTab} nav-link` : 'nav-link'}
          >
            Skills
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Blog"
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/Blog' ? `${style.activeTab} nav-link` : 'nav-link'}
          >
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/Contact' ? `${style.activeTab} nav-link` : 'nav-link'}
          >
            Contact
          </Link>
        </li>
      </ul>
  );
}

export default NavTabs;
