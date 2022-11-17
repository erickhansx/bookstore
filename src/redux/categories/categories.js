// Action Types.
const CHECKSTATUS = 'bookstore/src/redux/categories/CHECKSTATUS';

// Initial state.
const initialState = [];

// Reducer.

const checkStatusReducer = (state = initialState, action) => {
  switch(action.type) {
    default: 
    return state;

    case CHECKSTATUS:
      return 'Under construction',
  }
}

// Action Creators.
export const checkStatus = () => {
  return {
    type: CHECKSTATUS,
  }
};
