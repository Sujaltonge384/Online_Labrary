import { Link } from "react-router-dom";

// This component displays ONE book.


// Displays a book cover, basic information, rating, and details link.
function BookCard({ book }) {

  return (

    <article className="book-card">

      <div className="book-image-container">

        <img
          src={book.image}
          alt={book.title}
          className="book-image"
        />

      </div>


      <div className="book-content">

        <span className="category">
          {book.category}
        </span>

        <h3>
          {book.title}
        </h3>

        <p className="author">
          By {book.author}
        </p>

        <p className="rating">
          ⭐ {book.rating}
        </p>

        <Link
          to={`/book/${encodeURIComponent(book.id)}`}
          className="details-button"
        >
          View Details →
        </Link>

      </div>

    </article>
  );
}


export default BookCard;