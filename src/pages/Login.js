import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Box,
  Link,
  InputLabel,
  Container,
  Card,
  Paper,
} from "@mui/material";
import Logo from "../components/logo.png";

import { GoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";

function Login({ login }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleGoogleLogin = () => {
    // Handle Google login
    console.log("Logging in with Google...");
  };

  const handleFacebookLogin = () => {
    // Handle Facebook login
    console.log("Logging in with Facebook...");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
    login();
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", margin: "5%" }}>
      <Paper sx={{ width: "30%" }}>
        <Container sx={{ padding: "8%" }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} container justifyContent="center">
                <img src={Logo} alt="logo" />
              </Grid>
              <Grid
                item
                xs={12}
                container
                justifyContent="center"
                sx={{ textAlign: "center" }}
              >
                <h1>
                  <b>Sign in to your Account</b>
                </h1>
              </Grid>

              <Grid item xs={12} container justifyContent="center">
                <GoogleLogin
                  size="large"
                  onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </Grid>

              <Grid item xs={12} container justifyContent="center">
                or Sign in with Username or Email
              </Grid>

              <Grid item xs={12}>
                <InputLabel /> <b>Username or Email </b>
                <TextField
                  placeholder="mail@abc.com"
                  value={username}
                  onChange={handleUsernameChange}
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <InputLabel /> <b>Password</b>
                <TextField
                  placeholder="******"
                  value={password}
                  onChange={handlePasswordChange}
                  fullWidth
                  type="password"
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        checked={rememberMe}
                        onChange={handleRememberMeChange}
                      />
                    }
                    label="Remember Me"
                  />
                  <Button
                    component={Link}
                    href="/forgot-password"
                    variant="text"
                    color="primary"
                  >
                    Forgot Password?
                  </Button>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Log In
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Paper>
    </Box>
  );
}
export default Login;
