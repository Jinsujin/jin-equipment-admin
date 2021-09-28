import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

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
    authService //
      .login(event.currentTarget.textContent)
      .then(data => goToOrder(data.user.uid));
  };

  const history = useHistory();
  const goToOrder = userId => {
    // 로그인한 유저정보를 함께 전달
    history.push({
      pathname: "/order",
      state: { id: userId }
    });
  };

  // 컴포넌트가 마운트되거나 업데이트될때
  useEffect(() => {
    // 사용자 상태가 바뀌면 콜백 실행
    // 로그아웃하면 user null
    authService.onAuthChange(user => {
      user && goToOrder(user.uid);
    });
  });

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
