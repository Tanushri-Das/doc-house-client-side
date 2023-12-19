// store.js
import { configureStore } from "@reduxjs/toolkit";
import doctorsReducer from "./features/doctorsSlice";

const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    // add other reducers as needed
  },
});

export default store;
