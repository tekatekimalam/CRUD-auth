import axios from "axios";
import {
  CREATE_BOOK_FAIL,
  CREATE_BOOK_REQUEST,
  CREATE_BOOK_SUCCESS,
  FETCH_BOOK_FAIL,
  FETCH_BOOK_SUCCESS,
  FETCH_USERS_REQUEST,
} from "../actionTypes";

const createBookActions = bookData => {
  return async dispatch => {
    try {
      dispatch({
        type: CREATE_BOOK_REQUEST,
      });

      const config = {
        "Content-Type": "application/json",
      };

      // Make http request
      const { data } = await axios.post("/api/books", bookData, config);

      dispatch({
        type: CREATE_BOOK_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: CREATE_BOOK_FAIL,
        payload: err.response && err.response.data.message,
      });
    }
  };
};

// Fetch all books action
const fetchBookActions = () => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_USERS_REQUEST,
      });

      const config = {
        headers: {
          "content/type": "application/json",
        },
      };

      const { data } = await axios.get("/api/books", config);

      dispatch({
        type: FETCH_BOOK_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: FETCH_BOOK_FAIL,
        payload: err.response && err.response.data.message,
      });
    }
  };
};

export { createBookActions, fetchBookActions };
