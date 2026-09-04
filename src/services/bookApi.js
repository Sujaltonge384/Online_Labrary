// ==================================================
// BOOK API SERVICE
// ==================================================
//
// This file is responsible for getting books from
// the Open Library API.
//
// We fetch books for different categories separately:
//
// Fiction
// Non-Fiction
// Sci-Fi
// Fantasy
//
// Then we combine all the results into one array.
// ==================================================


// Open Library API
const API_BASE_URL =
  "https://openlibrary.org/search.json";


// --------------------------------------------------
// CATEGORY SEARCHES
// --------------------------------------------------
//
// Each category uses a different search query.
//
// This gives our application books belonging to
// different categories instead of making every book
// "Fiction".
//

const categoryQueries = {
  Fiction: "fiction",
  "Non-Fiction": "non fiction",
  "Sci-Fi": "science fiction",
  Fantasy: "fantasy",
};


// --------------------------------------------------
// FETCH BOOKS FOR ONE CATEGORY
// --------------------------------------------------
//
// category = "Fiction"
// category = "Fantasy"
// etc.
//

const fetchBooksByCategory = async (category) => {

  // Get the search term for this category.
  const query = categoryQueries[category];


  // Create the API URL.
  const url =
    `${API_BASE_URL}?q=${encodeURIComponent(query)}&limit=15`;


  // Send request to Open Library.
  const response = await fetch(url);


  // Check whether the API request was successful.
  if (!response.ok) {
    throw new Error(
      `Failed to fetch ${category} books`
    );
  }


  // Convert response to JavaScript object.
  const data = await response.json();


  // Convert API data into our own book format.
  const books = data.docs
    .filter((book) => book.title)
    .map((book, index) => {

      // Get author.
      //
      // Some API books don't contain author_name,
      // so we provide a fallback.
      const author =
        book.author_name?.[0] ||
        "Unknown Author";


      // Get book cover.
      //
      // cover_i is the Open Library cover ID.
      //
      // If there is no cover, we use a placeholder.
      const image = book.cover_i

        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`

        : "https://placehold.co/300x450?text=No+Cover";


      // Get rating.
      //
      // Some books don't have a rating.
      const rating =
        book.ratings_average
          ? Number(
              book.ratings_average.toFixed(1)
            )
          : 4.0;


      // Return our application's book object.
      return {

        // Open Library key is used as the ID.
        // If it isn't available, create a fallback ID.
        id:
          book.key ||
          `${category}-${index}-${book.title}`,

        title:
          book.title,

        author:
          author,

        // IMPORTANT:
        // Use the category that we requested.
        category:
          category,

        // Open Library search results sometimes
        // contain a first sentence.
        description:
          book.first_sentence?.[0] ||

          `Discover ${book.title}, a book by ${author}.`,

        rating:
          rating,

        image:
          image,

      };
    });


  return books;
};


// --------------------------------------------------
// FETCH ALL BOOKS
// --------------------------------------------------
//
// This function fetches books from all four categories.
//
// Promise.all() allows all API requests to run
// instead of waiting for one category to finish
// before requesting the next one.
//

export const fetchBooks = async () => {

  try {

    // Get category names.
    const categories =
      Object.keys(categoryQueries);


    // Fetch every category.
    const results =
      await Promise.all(

        categories.map(
          (category) =>
            fetchBooksByCategory(category)
        )

      );


    // results is an array containing four arrays.
//
// [
//   [fiction books],
//   [non-fiction books],
//   [sci-fi books],
//   [fantasy books]
// ]

    // flat() combines them into one array.
    const allBooks =
      results.flat();


    // Remove duplicate books.
    //
    // Sometimes Open Library can return the same
    // book in different searches.
    const uniqueBooks =
      Array.from(

        new Map(

          allBooks.map(
            (book) => [
              book.id,
              book,
            ]
          )

        ).values()

      );


    // Return final book collection.
    return uniqueBooks;


  } catch (error) {

    // Show API error in browser console.
    console.error(
      "Book API Error:",
      error
    );


    // Send error back to Redux.
    throw error;
  }
};