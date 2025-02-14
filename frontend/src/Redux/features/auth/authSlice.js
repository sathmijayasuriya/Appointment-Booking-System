// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import authService from "./authService";


// //If a user logs in and the app is refreshed, fetching the user from localStorage
// const localStorageUser = JSON.parse(localStorage.getItem("user"));

// //initial state
// const initialState = {
//   user: localStorageUser || null,   //if the user on local storeage it will get user infor, otherwise null
//   isError: false,
//   isSuccess: false,
//   isLoading: false,
//   message: "",
//   role:"User"
// };

// // User Login
// export const login = createAsyncThunk(
//   "auth/login",
//   async ({ email, password }, thunkAPI) => {
//     try {
//       return await authService.login({ email, password });
//     } catch (error) {
//       const message =
//         (error.response && error.response.data && error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// // User Registration
// export const registerUser = createAsyncThunk(
//   "auth/registerUser",
//   async (payload, thunkAPI) => {
//     try {
//       return await authService.registerUser(payload);
//     } catch (error) {
//       const message =
//         (error.response && error.response.data && error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// // Pharmacist Registration
// export const registerPharmacist = createAsyncThunk(
//   "auth/registerPharmacist",
//   async (payload, thunkAPI) => {
//     try {
//       return await authService.registerPharmacist(payload);
//     } catch (error) {
//       const message =
//         (error.response && error.response.data && error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

//   // authSlice is created using createSlice.
//   // The reducer part of the authSlice is exported as the default export
// export const authSlice = createSlice({   
//   name: "auth",
//   initialState,
//   reducers: {     // regular reducers
//     reset: (state) => {  //Synchronous Actions (Reducers):
//       state.isLoading = false;
//       state.isSuccess = false;
//       state.isError = false;
//       state.message = "";
//     },
//     logout: (state) => {
//       state.user = null; // Clear user data
//       state.isSuccess = false;
//     },
//   },
//   extraReducers: (builder) => {  //async actions
//     builder
//       .addCase(login.pending, (state) => {
//         state.isLoading = true; // When login starts, set isLoading to true
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.user = action.payload;
//         state.role = action.payload.userType;
//         console.log("Login fulfilled payload:", action.payload);
        
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//         console.log("User Logged In: ", action.payload);
//       })
//       .addCase(registerUser.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.user = action.payload;
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//       })
//       .addCase(registerPharmacist.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(registerPharmacist.fulfilled, (state) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//       })
//       .addCase(registerPharmacist.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//       });
//   },
// });

// // Action creators are generated for each case reducer function
// export const { reset,logout } = authSlice.actions; // regular reducers
// export default authSlice.reducer;
