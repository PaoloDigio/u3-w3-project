import { configureStore } from "@reduxjs/toolkit";
import albumReducer from "../reducers";

const store = configureStore({
  reducer: albumReducer,
});

export default store;
