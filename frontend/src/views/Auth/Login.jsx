import React from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Container,
  Stack,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";  // Import useNavigate for redirection
import { isValidLogin } from "../../utils/validate";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();  // Hook to navigate to different routes
  const [error, setError] = React.useState({});
  const [payload, setPayload] = React.useState({
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    console.log("Input Changed:", e.target.name, e.target.value); 
    setError({ ...error, [e.target.name]: false });
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };
  

//   const onClickLogin = (e) => {
//     e.preventDefault();
//     console.log("Login button clicked");

    
//     if (!isValidLogin(payload, error, setError)) {
//       console.log("invalid");
//       return;
//     } else {
//       dispatch(login(payload)).then((response) => {
//           console.log("response from login ",response)
//         const userType = response.payload.userType;  // Assuming userType is in response payload

//         // Redirect based on userType
//         if (userType === "Admin") {
//           navigate("/admin");  // Redirect to admin Dashboard
//         } else {
//           navigate("/user");  // Redirect to User Dashboard
//         }
//       }).catch((error) => {
//         console.error("Login failed:", error);
//       });
//     }
//   };

  return (
    <Container sx={{ alignItems: "center", display: "flex", minHeight: "90vh" }}>
      <Card sx={{ maxWidth: 400, mx: "auto", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)" }}>
        <CardContent sx={{ mx: 3, my: 3 }}>
          <Typography variant="h5" component="div" sx={{ textAlign: "center", mb: 2 }}>
            Welcome back
          </Typography>
          <Typography variant="subtitle1" sx={{ textAlign: "center", mb: 2 }}>
            Glad to see you again 👋
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            name="email"
            error={error.email}
            helperText={error.email ? error.email : " "}
            onChange={(e) => onChangeInput(e)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            name="password"
            error={error.password}
            helperText={error.password ? error.password : " "}
            onChange={(e) => onChangeInput(e)}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            // onClick={(e) => onClickLogin(e)}
          >
            Login
          </Button>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            mt={2}
          >
            <Typography variant="body2" sx={{ textAlign: "center" }}>
              Don't have an account?
            </Typography>
            <Typography
              component={Link}
              to={"/auth/register"}
              variant="body2"
              sx={{ textAlign: "center", textDecoration: "none" }}
            >
              Sign up
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
