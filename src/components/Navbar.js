import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => (
  <div className="navbar">
    <h1 className="navbar__h1">Bookstore CMS</h1>
    <NavLink to="/BooksPage">BOOKS</NavLink>
    <NavLink to="/CategoriesPage">CATEGORIES</NavLink>
  </div>
);

export default Navbar;
