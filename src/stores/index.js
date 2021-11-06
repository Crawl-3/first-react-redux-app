import { createStore } from "@reduxjs/toolkit";
import testReducer from "./test";

export default createStore({
   reducer: {
      test: testReducer,
   },
});
