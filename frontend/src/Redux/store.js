import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Redux/features/auth/authSlice.js";


export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// empty store
// export default configureStore({
//   reducer : {}
// })
