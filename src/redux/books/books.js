// Action types.
const ADDBOOK = 'bookstore/src/redux/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/src/redux/books/REMOVEBOOK';

// Initial State.
const initialState = [];
const bookID = 0;

// Reducer

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;

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

export default booksReducer;