import {
  FETCH_BOOK_REQUEST,
  FETCH_USERS_FAIL,
  FETCH_USERS_SUCCESS,
} from "../../actions/actionTypes";

const bookListReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_BOOK_REQUEST:
      return {
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        books: action.payload,
      };
    case FETCH_USERS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export { bookListReducer };
