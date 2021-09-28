import React from "react";
import Tabbar from "../tabbar/tabbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Login = ({ authService }) => {
  const onLogin = event => {
    console.log("onLogin");
    authService //
      .login(event.currentTarget.textContent)
      .then(console.log);
    // .then(data => goToAddOrder(data.user.id));
  };

  const goToAddOrder = userId => {
    console.log("go add order page");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          paddingTop: 4,
          marginTop: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "white"
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Button
          onClick={onLogin}
          // type="submit"
          // fullWidth
          variant="outlined"
          size="large"
          sx={{ mt: 3, mb: 2 }}
        >
          Google
        </Button>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Box>
    </Container>
  );
};

export default Login;
