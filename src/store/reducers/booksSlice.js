import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:3005/books"
const initialState = {
  book: {},
  books: [],
  filteredBooks: [],
  isLoading: false,
  error: null,
  addedBook: false,
  editedBook: false,
  deletedBook: false,
};

export const getBooks = createAsyncThunk("books/getBooks", async (args, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await axios.get(baseUrl);
    // console.log("Response Data", response.data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const getOneBook = createAsyncThunk("books/getOneBook", async (bookId, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await axios.get(`${baseUrl}/${bookId}`)
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message)
  }
});

export const addBook = createAsyncThunk("books/addBook", async (bookAdded, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await axios.post(baseUrl, bookAdded);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const editBook = createAsyncThunk("books/editBook", async (args, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  // console.log({args});
  try {
    const response = await axios.patch(`${baseUrl}/${args.idArg}`, args.bookArg);   //must have same names
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const deleteBook = createAsyncThunk("books/deleteBook", async (bookId, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await axios.delete(`${baseUrl}/${bookId}`)
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message)
  }
});

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {

    categoryFilter: (state, action) => {
      // console.log("action",action.payload);
      if (action.payload === "all") {
        return {
          ...state,
          filteredBooks: []
        };
      }
      return {
        ...state,
        filteredBooks: state.books.filter(book => book.type === action.payload)
      };
    }
  },
  
  extraReducers: (builder) => {
    builder
      //------------------ Get All Books
      .addCase(getBooks.pending, (state, action) => {
          state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
          state.isLoading = false;
          state.books = action.payload;
          state.error = null;
          state.addedBook = false;
          state.editedBook = false;
          state.deletedBook = false;
      })
      .addCase(getBooks.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
      })
      //------------------ Get Book by ID
      .addCase(getOneBook.pending, (state, action) => {
          state.isLoading = true;
      })
      .addCase(getOneBook.fulfilled, (state, action) => {
          state.isLoading = false;
          state.book = action.payload;
          state.error = null;
          state.addedBook = false;
          state.editedBook = false;
          state.deletedBook = false;
      })
      .addCase(getOneBook.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
      })
      //------------------ Add Book
      .addCase(addBook.pending, (state, action) => {
          state.isLoading = true;
      })
      .addCase(addBook.fulfilled, (state, action) => {
          state.isLoading = false;
          // state.books.push(action.payload);
          state.addedBook = true;
      })
      .addCase(addBook.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
      })
      //------------------ Edit Book
      .addCase(editBook.pending, (state, action) => {
          state.isLoading = true;
      })
      .addCase(editBook.fulfilled, (state, action) => {
          state.isLoading = false;
          // state.books = state.books.map(book => {if (book.id===action.payload.id) {book===action.payload}});
          state.editedBook = true;
      })
      .addCase(editBook.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
      })
      //------------------ Delete Book
      .addCase(deleteBook.pending, (state, action) => {
          state.isLoading = true;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
          state.isLoading = false;
          // state.books = state.books.filter(book => book!=action.payload);
          state.deletedBook = true;
      })
      .addCase(deleteBook.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
      })
  },
});

export const booksReducer = booksSlice.reducer;
export const booksActions = booksSlice.actions;