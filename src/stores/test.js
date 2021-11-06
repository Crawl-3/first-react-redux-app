import { createSlice } from "@reduxjs/toolkit";

export const test = createSlice({
   name: "test",
   initialState: {
      test: true,
   },
   reducers: {
      toggleTest: (state) => {
         state.test = !state.test;
      },
   },
});

export const { toggleTest } = test.actions;
export default test.reducer;
