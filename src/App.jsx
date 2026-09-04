import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import { useEffect } from "react";

import Header from "./components/Header";

import Home from "./pages/Home";

import BrowseBooks from "./pages/BrowseBooks";

import BookDetails from "./pages/BookDetails";

import AddBook from "./pages/AddBook";

import NotFound from "./pages/NotFound";

import {
  fetchBooksFromAPI,
} from "./store/bookSlice";


// --------------------------------------------------
// APP COMPONENT
// --------------------------------------------------
//
// This component controls:
//
// 1. API loading
// 2. Header visibility
// 3. Application routes
//

function App() {

  const dispatch = useDispatch();


  // Get current Redux books.
  const books = useSelector(
    (state) => state.books.books
  );


  // Get current URL.
  const location =
    useLocation();


  // ------------------------------------------------
  // FETCH API BOOKS
  // ------------------------------------------------
  //
  // useEffect runs when the application loads.
  //
  // We only fetch books if Redux currently has
  // no books.
  //

  useEffect(() => {

    if (books.length === 0) {

      dispatch(
        fetchBooksFromAPI()
      );

    }

  }, [dispatch, books.length]);


  // ------------------------------------------------
  // CHECK WHETHER ROUTE IS 404
  // ------------------------------------------------
  //
  // The assignment says:
  //
  // "404 page should not include Header."
  //
  // So we determine whether the current URL
  // belongs to one of our known routes.
  //

  const validRoutes =

    location.pathname === "/" ||

    location.pathname === "/books" ||

    location.pathname === "/add-book" ||

    location.pathname.startsWith("/books/") ||

    location.pathname.startsWith("/book/");


  return (

    <>

      {/* 
        Header appears only on valid pages.
        
        If the route is invalid,
        Header will not be rendered.
      */}

      {validRoutes && <Header />}


      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />


        {/* Browse all */}
        <Route
          path="/books"
          element={<BrowseBooks />}
        />


        {/* Dynamic category */}
        <Route
          path="/books/:category"
          element={<BrowseBooks />}
        />


        {/* Dynamic book */}
        <Route
          path="/book/:id"
          element={<BookDetails />}
        />


        {/* Add Book */}
        <Route
          path="/add-book"
          element={<AddBook />}
        />


        {/* 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </>
  );
}


export default App;