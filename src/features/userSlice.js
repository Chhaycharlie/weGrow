import { createSlice } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const initialState = {
  user: null,
};

//persistence state is use to avoid refresh page and get lost of data
const persistedState =
  JSON.parse(localStorage.getItem("reduxState")) || initialState;

const userSlice = createSlice({
  name: "user",
  initialState: persistedState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      // Clear persisted state from local storage
      localStorage.removeItem("reduxState");
      // Sign out from Firebase
      signOut(auth);
      // Reset user state to null
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
