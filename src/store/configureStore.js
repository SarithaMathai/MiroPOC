import { configureStore } from "@reduxjs/toolkit";
import { getAllReducers } from "./allReducers";

export default configureStore({
  reducer: getAllReducers(),
});
