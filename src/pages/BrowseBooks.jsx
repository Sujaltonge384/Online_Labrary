import { useState } from "react";

import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import BookList from "../components/Booklist";

import Loading from "../components/Loading";



// BROWSE BOOKS PAGE

// This page handles:

// 1. Showing all books
// 2. Category filtering
// 3. Search by title
// 4. Search by author

// Dynamic route:
// /books/Fiction
// gives us:
// category = "Fiction"


function BrowseBooks() {

  // Get books and loading state from Redux.
  const {
    books,
    loading,
    error,
  } = useSelector(
    (state) => state.books
  );


  // Get category from URL.
  const { category } = useParams();


  // Search input state.
  const [searchTerm, setSearchTerm] = useState("");


  const categoryFilteredBooks = category

    ? books.filter((book) =>

        book.category.toLowerCase() ===
        category.toLowerCase()

      )

    : books;

// Filter books by selected category and search text.
  const filteredBooks =
    categoryFilteredBooks.filter((book) => {

      const search =
        searchTerm.toLowerCase();


      return (

        book.title
          .toLowerCase()
          .includes(search)

        ||

        book.author
          .toLowerCase()
          .includes(search)

      );
    });


  return (

    <main className="container">

      {/* Page heading */}

      <section className="browse-header">

        <span className="section-label">
          LIBRARY
        </span>

        <h1>
          {category
            ? `${category} Books`
            : "Browse Books"
          }
        </h1>

        <p>
          Find your next favorite book from
          our collection.
        </p>

      </section>


      {/* SEARCH */}

      <div className="search-container">

        <span>
          🔍
        </span>

        <input
          type="text"
          placeholder="Search by book title or author..."
          value={searchTerm}

          onChange={(event) => {

            // Update search state whenever
            // the user types something.
            setSearchTerm(
              event.target.value
            );

          }}

        />

      </div>


      {/* ERROR*/}

      {error && (

        <div className="error-message">
          {error}
        </div>

      )}


      {/* BOOKS*/}

      {loading ? (

        <Loading />

      ) : filteredBooks.length > 0 ? (

        <BookList
          books={filteredBooks}
        />

      ) : (

        <div className="empty-state">

          <div>📚</div>

          <h2>
            No books found
          </h2>

          <p>
            Try another search term or category.
          </p>

        </div>

      )}

    </main>
  );
}


export default BrowseBooks;