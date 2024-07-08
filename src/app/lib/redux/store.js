import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/profileDetails/profileSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});
console.log(appStore);
export default appStore;
