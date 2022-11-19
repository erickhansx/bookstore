// Action types.
const ADDBOOK = 'bookstore/src/redux/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/src/redux/books/REMOVEBOOK';

// Initial State.
// const initialState = [];
const defaultBooks = [
  {
    genre: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    id: 1,
  },
  {
    genre: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    id: 2,
  },
  {
    genre: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    id: 3,
  },
];

// Reducer

const booksReducer = (state = defaultBooks, action) => {
  switch (action.type) {
    default:
      return state;

    case ADDBOOK:
      return [...state, action.payload];

    case REMOVEBOOK:
      return state.filter((book) => book.id !== action.id);
  }
};

// Action creators
export const addBook = (payload) => ({
  type: ADDBOOK,
  payload: {
    key: payload.id,
    id: payload.id,
    title: payload.title,
    author: payload.author,
    genre: payload.genre,
  },
});

export const removeBook = (payload) => ({
  type: REMOVEBOOK,
  id: payload.id,
});

// Selectors.

// export const selectBooks = (state) => {
//   console.log(state.map((book) => book.author));
// };

// export const selectDefaultBooks = (state) => {
//   state.map((book) => console.log(book.title, book.author, book.genre));
// };

export default booksReducer;
