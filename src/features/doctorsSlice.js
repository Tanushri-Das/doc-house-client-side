// doctorsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const doctorsSlice = createSlice({
  name: "doctors",
  initialState: [],
  reducers: {
    setDoctors: (state, action) => {
      return action.payload;
    },
    updateDoctor: (state, action) => {
      const { _id } = action.payload;
      const existingDoctor = state.find((doctor) => doctor._id === _id);
      if (existingDoctor) {
        Object.assign(existingDoctor, action.payload);
      }
    },
    // add other reducers as needed
  },
});

export const { setDoctors, updateDoctor } = doctorsSlice.actions;
export default doctorsSlice.reducer;
