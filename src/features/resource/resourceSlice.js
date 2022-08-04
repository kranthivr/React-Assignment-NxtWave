import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  resources: [],
  error: "",
};

export const fetchResources = createAsyncThunk("/fetchResources", () => {
  return axios
    .get(
      "https://media-content.ccbp.in/website/react-assignment/resources.json"
    )
    .then((response) => response.data);
});

const resourceSlice = createSlice({
  name: "resource",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchResources.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchResources.fulfilled, (state, action) => {
      state.loading = false;
      state.resources = action.payload;
      state.error = "";
    });
    builder.addCase(fetchResources.rejected, (state, action) => {
      state.loading = false;
      state.resources = [];
      state.error = action.error.message;
    });
  },
});

export default resourceSlice.reducer;
