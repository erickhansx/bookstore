import { NavLink } from 'react-router-dom';
import BooksPage from '../pages/BooksPage';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar__h1">Bookstore CMS</h1>
      <NavLink to="/BooksPage">Books</NavLink>
      <NavLink>Categories</NavLink>
    </div>
  );
};

export default Navbar;
