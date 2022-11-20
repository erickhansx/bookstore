import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => (
  <div className="navbar">
    <div className="left">
      <h1 className="navbar__h1">Bookstore CMS</h1>
      <NavLink to="/BooksPage">BOOKS</NavLink>
      <NavLink to="/CategoriesPage">CATEGORIES</NavLink>
    </div>
    <div className="right">
      <i className="fa-solid fa-user" />
    </div>
  </div>
);

export default Navbar;
