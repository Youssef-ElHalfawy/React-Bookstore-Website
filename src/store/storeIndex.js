import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./reducers/booksSlice";
import { cartReducer } from "./reducers/counterSlice";

export const store = configureStore({
  reducer: {
    booksReducer,
    cartReducer,
  },
});