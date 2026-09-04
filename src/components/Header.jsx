import { NavLink } from "react-router-dom";

// Header provides the main navigation for the library application.
function Header() {
  // Add an active class to show which page the user is currently viewing.
  const getNavClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="header">
      <NavLink to="/" className="logo">
        📚 BookNest
      </NavLink>

      <nav className="nav">
        <NavLink to="/" className={getNavClass} end>
          Home
        </NavLink>

        <NavLink to="/books" className={getNavClass}>
          Browse Books
        </NavLink>

        <NavLink to="/add-book" className="add-book-link">
          + Add Book
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;