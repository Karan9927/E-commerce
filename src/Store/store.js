import { configureStore } from "@reduxjs/toolkit";
import feature from "../features/Slice";

export const store = configureStore({
  reducer: feature,
});
