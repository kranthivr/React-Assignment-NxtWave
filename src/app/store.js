import { configureStore } from "@reduxjs/toolkit";
import resourceReducer from "../features/resource/resourceSlice";
import resourceItemReducer from "../features/resourceItems/resourceItemSlice";

const store = configureStore({
  reducer: {
    resource: resourceReducer,
    resourceItems: resourceItemReducer,
  },
});

export default store;
