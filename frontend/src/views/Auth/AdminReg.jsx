import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Stack,
  Link,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { registerAdmin } from "../../Redux/features/auth/authSlice";

export default function AdminReg() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setErrors({});
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Register admin
      const payload = {
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
        Phone: formData.phoneNumber,
        role: "ADMIN",
      };
      dispatch(registerAdmin(payload));
      console.log("Form submitted successfully!");
      navigate("/Admin"); // Redirect to Admin dashboard after success
    } else {
      setErrors(validationErrors);
    }
  };

  const validate = (data) => {
    const errors = {};
    if (!data.fullName.trim()) {
      errors.fullName = "Full Name is required";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }
    if (!data.phoneNumber.trim()) {
      errors.phoneNumber = "Phone Number is required";
    }
    if (!data.dob.trim()) {
      errors.dob = "Date of Birth is required";
    }
    if (!data.address.trim()) {
      errors.address = "Address is required";
    }
    if (!data.pharmacyName.trim()) {
      errors.pharmacyName = "Pharmacy Name is required";
    }
    if (!data.password.trim()) {
      errors.password = "Password is required";
    }
    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };
  return (
    <>
      <Container
        sx={{
          alignItems: "center",
          display: "flex",
          minHeight: "90vh",
        }}
      >
        <Card
          sx={{
            maxWidth: 400,
            mx: "auto",
            mt: 5,
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            border: "none",
          }}
        >
          <CardContent sx={{ mx: 3, my: 3 }}>
            <Typography
              variant="h5"
              component="div"
              sx={{ textAlign: "center", mb: 3 }}
            >
              Admin Sign up
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                size="small"
                label="Full Name"
                variant="outlined"
                fullWidth
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                error={!!errors.fullName}
                helperText={errors.fullName}
                sx={{ mb: 2 }}
              />
              <TextField
                size="small"
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                sx={{ mb: 2 }}
              />
              <TextField
                size="small"
                label="Phone Number"
                variant="outlined"
                fullWidth
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber}
                sx={{ mb: 2 }}
              />
              <TextField
                size="small"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
                sx={{ mb: 2 }}
              />
              <TextField
                size="small"
                label="Confirm Password"
                type="password"
                variant="outlined"
                fullWidth
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                sx={{ mb: 2 }}
              />
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
                mt={2}
              >
                <Button variant="outlined" fullWidth component={Link} to="/">
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Confirm
                </Button>
              </Stack>
            </form>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
