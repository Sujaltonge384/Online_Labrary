import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import Booklist from "../components/Booklist";

import Loading from "../components/Loading";


// HOME PAGE

//
// The Home page contains:
//
// 1. Welcome section
// 2. Book categories
// 3. Popular books

function Home() {

 
  // GET DATA FROM REDUX
  

  const {
    books,
    loading,
  } = useSelector(
    (state) => state.books
  );


  // Show first 6 books as popular books.
  const popularBooks = books.slice(0, 6);


  return (

    <main>

      {/* HERO SECTION*/}

      <section className="hero">

        <div className="hero-content">

          <span className="hero-label">
            YOUR DIGITAL LIBRARY
          </span>

          <h1>
            Discover your next
            <br />
            <span>great read.</span>
          </h1>

          <p>
            Explore thousands of books, discover
            new authors, and find stories that stay
            with you forever.
          </p>

          <Link
            to="/books"
            className="primary-button"
          >
            Explore Books →
          </Link>

        </div>

      </section>


      {/* CATEGORIES */}

      <section className="section">

        <div className="section-heading">

          <div>
            <span className="section-label">
              EXPLORE
            </span>

            <h2>
              Browse by Category
            </h2>
          </div>

        </div>


        <div className="categories">

          <Link
            to="/books/Fiction"
            className="category-card"
          >
            <span>📖</span>
            <h3>Fiction</h3>
            <p>Stories & novels</p>
          </Link>


          <Link
            to="/books/Non-Fiction"
            className="category-card"
          >
            <span>🧠</span>
            <h3>Non-Fiction</h3>
            <p>Learn & discover</p>
          </Link>


          <Link
            to="/books/Sci-Fi"
            className="category-card"
          >
            <span>🚀</span>
            <h3>Sci-Fi</h3>
            <p>Future worlds</p>
          </Link>


          <Link
            to="/books/Fantasy"
            className="category-card"
          >
            <span>🧙</span>
            <h3>Fantasy</h3>
            <p>Magical worlds</p>
          </Link>

        </div>

      </section>


      {/* POPULAR BOOKS*/}

      <section className="section">

        <div className="section-heading">

          <div>

            <span className="section-label">
              READER FAVORITES
            </span>

            <h2>
              Popular Books
            </h2>

          </div>


          <Link
            to="/books"
            className="view-all"
          >
            View all →
          </Link>

        </div>


        {loading ? (

          <Loading />

        ) : (

          <BookList
            books={popularBooks}
          />

        )}

      </section>

    </main>
  );
}


export default Home;