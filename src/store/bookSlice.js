import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBooks } from "../services/bookApi";

// Fetch books from the Open Library API.
export const fetchBooksFromAPI = createAsyncThunk(
  "books/fetchBooks",
  async () => {
    const books = await fetchBooks();
    return books;
  }
);

const initialState = {
  books: [],
  loading: false,
  error: null,
};

// Redux slice for storing and updating the library book collection.
const bookSlice = createSlice({
  name: "books",
  initialState,

  reducers: {
    // Add a newly created book to the beginning of the collection.
    addBook: (state, action) => {
      state.books.unshift(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksFromAPI.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooksFromAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooksFromAPI.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Unable to load books.";
      });
  },
});

export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;