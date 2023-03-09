import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
    removeUser(state, action) {
      console.log("Id", action.payload)
      state.splice(action.payload, 1)
    },
    deleteAllUsers(state, action) {
      return [];
    },
  },
});

export { userSlice };
export const { addUser, removeUser, deleteAllUsers } = userSlice.actions;
