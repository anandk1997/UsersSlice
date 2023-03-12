import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = () => axios.get("https://panorbit.in/api/users.json");

export const fetchAsync = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await fetchUsers();
    return response.data.users;
  } catch (error) {
    console.log(error);
  }
});

export const fetchUserAsync = createAsyncThunk(
  "users/fetchUser",
  async (id) => {
    try {
      const response = await fetchUsers();
      const currentUser = await response.data.users?.find(
        (userDetails) => userDetails?.id === parseInt(id)
      );
      return currentUser;
    } catch (error) {
      console.log(error);
    }
  }
);
