import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchBooks } from "../services/bookApi";


// --------------------------------------------------
// ASYNC THUNK
// --------------------------------------------------
//
// createAsyncThunk is used when Redux needs to perform
// an asynchronous operation.
//
// Here the asynchronous operation is:
// "Fetch books from the API".
//
// The flow is:
//
// Component
//    ↓
// dispatch(fetchBooksFromAPI())
//    ↓
// API request
//    ↓
// Redux state updated
//

export const fetchBooksFromAPI = createAsyncThunk(
  "books/fetchBooks",
  async () => {

    // Call our API function.
    const books = await fetchBooks();

    // Whatever we return becomes action.payload
    // when the request succeeds.
    return books;
  }
);


// --------------------------------------------------
// INITIAL STATE
// --------------------------------------------------

const initialState = {

  // Stores all books.
  books: [],

  // Used to show a loading message.
  loading: false,

  // Stores API error messages.
  error: null,
};


// --------------------------------------------------
// SLICE
// --------------------------------------------------

const bookSlice = createSlice({

  name: "books",

  initialState,

  reducers: {

    // ------------------------------------------------
    // ADD BOOK
    // ------------------------------------------------
    //
    // This reducer adds a new book to the beginning
    // of the books array.
    //
    // unshift() adds the item at index 0.
    //
    addBook: (state, action) => {

      state.books.unshift(action.payload);
    },
  },


  // ------------------------------------------------
  // EXTRA REDUCERS
  // ------------------------------------------------
  //
  // These handle the different states of our API call.
  //

  extraReducers: (builder) => {

    builder

      // API request has started.
      .addCase(
        fetchBooksFromAPI.pending,
        (state) => {

          state.loading = true;

          state.error = null;
        }
      )


      // API request completed successfully.
      .addCase(
        fetchBooksFromAPI.fulfilled,
        (state, action) => {

          state.loading = false;

          // Store API books in Redux.
          state.books = action.payload;
        }
      )


      // API request failed.
      .addCase(
        fetchBooksFromAPI.rejected,
        (state, action) => {

          state.loading = false;

          state.error =
            action.error.message ||
            "Unable to load books.";
        }
      );
  },
});


// Export the addBook action.
export const { addBook } = bookSlice.actions;


// Export the reducer.
export default bookSlice.reducer;