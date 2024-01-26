import { configureStore } from "@reduxjs/toolkit";

import bookReducer from "./bookSlice.jsx";

export const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});
