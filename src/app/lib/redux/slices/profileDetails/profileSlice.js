import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "user",
  initialState: {
    name: "Jhon Doe",
    email: "john.doe@example.com",
    edit: false,
  },
  reducers: {
    editUserDetails: (state, action) => {
      state.name = action?.payload?.newName;
      state.email = action?.payload?.newEmail;
    },
    clearEditedText: (state, action) => {
      let newName = localStorage.getItem("name");
      let newEmail = localStorage.getItem("email");
      state.name = newName;
      state.email = newEmail; // Retrieve previous values from local storage
    },
    logOutUser:(state,action) => {
        state.name = "Jhon Doe";
        state.email = "john.doe@example.com";
    },
    editForm: (state, action) => {
      state.edit = !state.edit;
    },
  },
});

export const { editUserDetails, clearEditedText, editForm, logOutUser } =
  profileSlice.actions;
export default profileSlice.reducer;
