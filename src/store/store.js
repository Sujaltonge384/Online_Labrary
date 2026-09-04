import { configureStore } from "@reduxjs/toolkit";

import bookReducer from "./bookSlice";

// Redux Store

// The store is the central place where
// our application's book data is stored.

// "books" is the name of our Redux state section.
const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default store;