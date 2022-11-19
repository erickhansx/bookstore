import { configureStore } from '@reduxjs/toolkit';
import checkStatusReducer from './categories/categories';
import booksSlice from './books/books';

const store = configureStore({
  reducer: {
    books: booksSlice,
    categories: checkStatusReducer,
  },
});

export default store;
