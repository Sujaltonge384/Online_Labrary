import { Link } from "react-router-dom";

// Header provides navigation links for the library application.
function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        📚 BookNest
      </Link>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/books">Browse Books</Link>
        <Link to="/add-book" className="add-book-link">
          + Add Book
        </Link>
      </nav>
    </header>
  );
}

export default Header;