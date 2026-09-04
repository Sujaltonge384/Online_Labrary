import {
  Link,
  useLocation,
} from "react-router-dom";


// 404 PAGE

// "*" in App.jsx sends undefined URLs here.
//
// useLocation() gives us the current URL.


// Displays a friendly message when the user visits an invalid URL.
function NotFound() {

  const location =
    useLocation();


  return (

    <main className="not-found">

      <div className="not-found-number">
        404
      </div>

      <h1>
        Page Not Found
      </h1>

      <p>
        We couldn't find:
      </p>

      <code>
        {location.pathname}
      </code>


      <Link
        to="/"
        className="primary-button"
      >
        ← Back to Home
      </Link>

    </main>
  );
}


export default NotFound;