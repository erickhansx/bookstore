const CHECKSTATUS = 'bookstore/src/redux/categories/CHECKSTATUS';

const initialState = [];

const checkStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;

    case CHECKSTATUS:
      return 'Under construction';
  }
};

export const checkStatus = () => ({
  type: CHECKSTATUS,
});

export default checkStatusReducer;
