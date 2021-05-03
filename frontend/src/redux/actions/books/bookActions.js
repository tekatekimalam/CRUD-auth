import axios from "axios";
import {
  CREATE_BOOK_FAIL,
  CREATE_BOOK_REQUEST,
  CREATE_BOOK_SUCCESS,
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

export { createBookActions };
