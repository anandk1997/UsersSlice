import { createSlice } from "@reduxjs/toolkit";
import { fetchAsync, fetchUserAsync } from "./UserThunks";

const initialState = {
  users: [],
  selectedUser: null,
  status: "idle",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.users = action.payload;
      })
      .addCase(fetchUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedUser = action.payload;
      });
  },
});

// export const { } = usersSlice.actions;

export default usersSlice.reducer;
