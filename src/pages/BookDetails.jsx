import { Link, useParams } from "react-router-dom";

import { useSelector } from "react-redux";


function BookDetails() {

  // Get book ID from URL.
  const { id } = useParams();


  // Convert URL id back into the same format
  // that was used when creating the route.
  const decodedId =
    decodeURIComponent(id);


  // Get books from Redux.
  const books = useSelector(
    (state) => state.books.books
  );


  // Find the selected book.
  const book = books.find(
    (book) =>
      String(book.id) ===
      String(decodedId)
  );



  // BOOK NOT FOUND

  if (!book) {

    return (

      <main className="container details-not-found">

        <h1>
          Book Not Found
        </h1>

        <Link to="/books">
          ← Back to Browse
        </Link>

      </main>
    );
  }


  return (

    <main className="container">


      <Link
        to="/books"
        className="back-link"
      >
        ← Back to Browse
      </Link>


      <section className="details">

       {/*COVER*/}
         
        <div className="details-image">

          <img
            src={book.image}
            alt={book.title}
          />

        </div>


        {/*  INFORMATION */}

        <div className="details-content">

          <span className="category">
            {book.category}
          </span>


          <h1>
            {book.title}
          </h1>


          <p className="details-author">
            By {book.author}
          </p>


          <div className="details-rating">

            <span>
              ⭐
            </span>

            <strong>
              {book.rating}
            </strong>

            <span>
              / 5
            </span>

          </div>


          <div className="description">

            <h2>
              About this book
            </h2>

            <p>
              {book.description}
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}


export default BookDetails;