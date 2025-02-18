import axios from "axios";
import { Configuration } from "../Configuration";

// Sign In (User or Admin)
export const signIn = async (payload) => {
  try {
    const apiEndpoint = `${Configuration.BASE_URL}${Configuration.USER_LOGIN}`;
      // userType === "Admin"
      //   ? `${Configuration.BASE_URL}${Configuration.ADMIN_LOGIN}`
      //   : `${Configuration.BASE_URL}${Configuration.USER_LOGIN}`;
    const response = await axios.post(apiEndpoint, {
      email: payload.email,
      password: payload.password, 
    });
    // const responseWithRole = {...response.data, role:userType}
    console.log("api response",response)
    return response.data;
  } catch (error) {
    console.error("Error during sign-in:", error.message);
    throw error;
  }
};


// User Sign Up
export const signUpUser = async (payload) => {
  try {
    const response = await axios.post(
      `${Configuration.BASE_URL}${Configuration.USER_REGISTER}`,
      payload
    );
    return response.data; // User registration response
  } catch (error) {
    console.error("Error during user sign-up:", error.message);
    throw error;
  }
};

// Admin Sign Up (inside Admin Dashboard only)
export const signUpAdmin = async (payload) => {
  try {
    const response = await axios.post(
      `${Configuration.BASE_URL}${Configuration.ADMIN_REGISTER}`,
      payload
    );
    return response.data; // Admin registration response
  } catch (error) {
    console.error("Error during admin sign-up:", error.message);
    throw error;
  }
};

// Log Out
export const LogOut = async () => {
  try {
    console.log("Logged out successfully");
    return { isSuccess: true };
  } catch (error) {
    console.error("Error during logout:", error.message);
    return { isSuccess: false, error };
  }
};
  