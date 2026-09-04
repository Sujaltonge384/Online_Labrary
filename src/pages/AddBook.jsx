import { useState } from "react";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { addBook } from "../store/bookSlice";


// This page allows the user to add their own book.

function AddBook() {

  // Redux dispatch function.
  const dispatch = useDispatch();


  // Used to redirect after successful submission.
  const navigate = useNavigate();


 
  // FORM STATE
 
  const [formData, setFormData] = useState({

    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
    image: "",

  });


  // Error message state.
  const [error, setError] =
    useState("");


  // HANDLE INPUT
  
  const handleChange = (event) => {

    const {
      name,
      value,
    } = event.target;


    // Spread keeps all previous fields.

    // [name] dynamically updates the correct field.
   

    setFormData({

      ...formData,

      [name]: value,

    });


    // Clear previous error
    // when the user starts editing.
    setError("");
  };



  // SUBMIT
 

  const handleSubmit = (event) => {

    // Prevent browser refresh.
    event.preventDefault();


    // VALIDATION
  

    if (
      !formData.title.trim() ||
      !formData.author.trim() ||
      !formData.category.trim() ||
      !formData.description.trim() ||
      !formData.rating
    ) {

      setError(
        "Please fill in all required fields."
      );

      return;
    }


    // Convert rating string to number.
    const rating =
      Number(formData.rating);


    // Rating must be between 1 and 5.
    if (
      rating < 1 ||
      rating > 5
    ) {

      setError(
        "Rating must be between 1 and 5."
      );

      return;
    }


    const newBook = {

      // Date.now gives us a simple unique ID.
      id: `user-${Date.now()}`,

      title:
        formData.title.trim(),

      author:
        formData.author.trim(),

      category:
        formData.category.trim(),

      description:
        formData.description.trim(),

      rating:

        rating,

      // If the user doesn't provide an image,
      // show a placeholder.
      image:
        formData.image.trim() ||
        "https://via.placeholder.com/300x450?text=No+Cover",

    };


    dispatch(
      addBook(newBook)
    );


    navigate("/books");
  };


  return (

    <main className="container">

      <section className="form-header">

        <span className="section-label">
          CONTRIBUTE
        </span>

        <h1>
          Add a New Book
        </h1>

        <p>
          Add your favorite book to the library.
        </p>

      </section>


      <form
        className="book-form"
        onSubmit={handleSubmit}
      >


        {error && (

          <div className="error-message">
            {error}
          </div>

        )}



        <div className="form-group">

          <label>
            Book Title *
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter book title"
          />

        </div>


        <div className="form-group">

          <label>
            Author *
          </label>

          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Enter author name"
          />

        </div>


        <div className="form-group">

          <label>
            Category *
          </label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >

            <option value="">
              Select a category
            </option>

            <option value="Fiction">
              Fiction
            </option>

            <option value="Non-Fiction">
              Non-Fiction
            </option>

            <option value="Sci-Fi">
              Sci-Fi
            </option>

            <option value="Fantasy">
              Fantasy
            </option>

          </select>

        </div>


        <div className="form-group">

          <label>
            Description *
          </label>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter a short description"
          />

        </div>



        <div className="form-group">

          <label>
            Rating *
          </label>

          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="1"
            max="5"
            step="0.1"
            placeholder="1 - 5"
          />

        </div>


        <div className="form-group">

          <label>
            Book Cover URL
          </label>

          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/book-cover.jpg"
          />

          <small>
            Optional — paste a URL to a book cover.
          </small>

        </div>


        <button
          type="submit"
          className="primary-button"
        >
          Add Book →
        </button>

      </form>

    </main>
  );
}


export default AddBook;