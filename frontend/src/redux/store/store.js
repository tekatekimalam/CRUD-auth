import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { createBookReducer } from "../reducers/books/createBooksReducers";
import { bookListReducer } from "../reducers/books/bookListReducers";

const middlewares = [thunk];

const reducer = combineReducers({
  bookCreated: createBookReducer,
  bookList: bookListReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export { store };
