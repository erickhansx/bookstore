import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gsPcb8D6x3QfolcShzQl/books/';

const ADD_BOOK = 'bookstore/src/redux/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/src/redux/books/REMOVEBOOK';

export const fetchBooks = createAsyncThunk('FETCH_BOOKS', () => axios.get(url).then((response) => {
  const books = response.data;
  const data = Object.keys(books).map((id) => ({
    id,
    title: books[id][0].title,
    author: books[id][0].author,
    category: books[id][0].category,
  }));
  return data;
}));

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (_, action) => action.payload);
  },
});

export const addBook = createAsyncThunk(ADD_BOOK, (payload) => {
  axios
    .post(`${url}`, {
      item_id: payload.id,
      title: payload.title,
      author: payload.author,
      category: payload.genre,
    })
    .then((response) => response.data);
});

export const removeBook = createAsyncThunk(REMOVEBOOK, (id) => {
  axios.delete(`${url}${id}`).then((response) => response.data);
});

export default booksSlice.reducer;
