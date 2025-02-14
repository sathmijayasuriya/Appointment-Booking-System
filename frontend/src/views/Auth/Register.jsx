// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   Container,
//   Card,
//   CardContent,
//   TextField,
//   Button,
//   Typography,
//   Grid,
//   Stack,
// } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { registerUser } from "../../Redux/features/auth/authSlice";

// const Register = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
  
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phoneNumber: "",
//     password: "",
//     confirmPassword: "",
//     dob: "",
//     address: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setErrors({});
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate(formData);
//     if (Object.keys(validationErrors).length === 0) {
//       // Register user
//       const payload = {
//         name: formData.fullName,
//         email: formData.email,
//         password: formData.password,
//         address: formData.address,
//         contactNo: formData.phoneNumber,
//         dob: formData.dob,
//         userType: "User",   
//     }
//       dispatch(registerUser(payload));
//       console.log("Form submitted successfully!");
//       navigate("/auth/sign-in"); // Redirect to sign-in page after success
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   const validate = (data) => {
//     const errors = {};
//     if (!data.fullName.trim()) {
//       errors.fullName = "Full Name is required";
//     }
//     if (!data.email.trim()) {
//       errors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(data.email)) {
//       errors.email = "Email is invalid";
//     }
//     if (!data.phoneNumber.trim()) {
//       errors.phoneNumber = "Phone Number is required";
//     }
//     if (!data.dob.trim()) {
//       errors.dob = "Date of Birth is required";
//     }
//     if (!data.address.trim()) {
//       errors.address = "Address is required";
//     }
//     if (!data.password.trim()) {
//       errors.password = "Password is required";
//     }
//     if (data.password !== data.confirmPassword) {
//       errors.confirmPassword = "Passwords do not match";
//     }
//     return errors;
//   };

//   return (
//     <Container
//       sx={{
//         alignItems: "center",
//         display: "flex",
//         minHeight: "90vh",
//       }}
//     >
//       <Card
//         sx={{
//           maxWidth: 500,
//           mx: "auto",
//           mt: 5,
//           boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
//           // backdropFilter: "blur(5px)",
//           borderColor: "#b4b4b4",
//           borderWidth: 1,
//           borderStyle: "solid",
//         }}
//       >
//         <CardContent sx={{ mx: 3, my: 3 }}>
//           <Typography
//             variant="h5"
//             component="div"
//             sx={{ textAlign: "center", mb: 3 }}
//           >
//             Sign up
//           </Typography>
//           <form onSubmit={handleSubmit}>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   label="Full Name"
//                   variant="outlined"
//                   fullWidth
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   error={!!errors.fullName}
//                   helperText={errors.fullName}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Email"
//                   variant="outlined"
//                   fullWidth
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   error={!!errors.email}
//                   helperText={errors.email}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Phone Number"
//                   variant="outlined"
//                   fullWidth
//                   name="phoneNumber"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   error={!!errors.phoneNumber}
//                   helperText={errors.phoneNumber}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Date of Birth"
//                   type="date"
//                   variant="outlined"
//                   fullWidth
//                   name="dob"
//                   value={formData.dob}
//                   onChange={handleChange}
//                   error={!!errors.dob}
//                   helperText={errors.dob}
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Address"
//                   variant="outlined"
//                   fullWidth
//                   name="address"
//                   value={formData.address}
//                   onChange={handleChange}
//                   error={!!errors.address}
//                   helperText={errors.address}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Password"
//                   type="password"
//                   variant="outlined"
//                   fullWidth
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   error={!!errors.password}
//                   helperText={errors.password}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Confirm Password"
//                   type="password"
//                   variant="outlined"
//                   fullWidth
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   error={!!errors.confirmPassword}
//                   helperText={errors.confirmPassword}
//                 />
//               </Grid>
//             </Grid>
//             <Stack
//               direction="row"
//               justifyContent="center"
//               alignItems="center"
//               spacing={1}
//               mt={2}
//             >
//               <Button variant="outlined" fullWidth component={Link} to="/">
//                 Cancel
//               </Button>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//               >
//                 Confirm
//               </Button>
//             </Stack>
//           </form>
//           <Stack
//             direction="row"
//             justifyContent="center"
//             alignItems="center"
//             spacing={1}
//             mt={2}
//           >
//             <Typography variant="body2" sx={{ textAlign: "center" }}>
//               Already have an account?
//             </Typography>
//             <Typography
//               component={Link}
//               to={"/auth/sign-in"}
//               variant="body2"
//               sx={{ textAlign: "center", textDecoration: "none" }}
//             >
//               Sign In
//             </Typography>
//           </Stack>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

// export default Register;
