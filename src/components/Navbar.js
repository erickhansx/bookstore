import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar__h1">Bookstore CMS</h1>
      <NavLink>Books</NavLink>
      <NavLink>Categories</NavLink>
    </div>
  );
};

export default Navbar;
