// Action types.
const ADDBOOK = 'bookstore/src/redux/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/src/redux/books/REMOVEBOOK';

// Initial State.
const initialState = [];
const bookID = 0;
const defaultBooks = [
  {
    genre: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    genre: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    genre: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
];

// Reducer

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state, defaultBooks];

    case ADDBOOK:
      return [...state, action.payload];

    case REMOVEBOOK:
      return state.filter((book) => book.bookID !== action.payload.bookID);
  }
};

// Action creators
export const addBook = (payload) => ({
  type: ADDBOOK,
  payload: {
    bookID: bookID + 1,
    title: payload.title,
    author: payload.author,
    genre: payload.genre,
  },
});

export const removeBook = () => ({
  type: REMOVEBOOK,
});

// Selectors.

export const selectBooks = (state) => {
  console.log(state.map((book) => book.author));
};

export const selectDefaultBooks = (state) => {
  state.map((book) => console.log(book.title, book.author, book.genre));
};

export default booksReducer;
