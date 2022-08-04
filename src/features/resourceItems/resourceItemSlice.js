import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  resourceItems: [],
  error: "",
};

export const fetchResourceItems = createAsyncThunk("/fetchItems", (id) => {
  return axios
    .get(
      `https://media-content.ccbp.in/website/react-assignment/resource/${id}.json`
    )
    .then((response) => response.data);
});

const resourceItemSlice = createSlice({
  name: "resourceItems",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchResourceItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchResourceItems.fulfilled, (state, action) => {
      state.loading = false;
      state.resourceItems = action.payload;
      state.error = "";
    });
    builder.addCase(fetchResourceItems.rejected, (state, action) => {
      state.loading = false;
      state.resourceItems = [];
      state.error = action.error.message;
    });
  },
});

export default resourceItemSlice.reducer;
