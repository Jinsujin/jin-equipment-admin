import React from "react";
import Tabbar from "../tabbar/tabbar";
import Button from "@mui/material/Button";

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
    <section>
      <section>
        <h1>Login</h1>
        <ul>
          <li>
            <Button onClick={onLogin} variant="text">
              Google
            </Button>
          </li>
          <li>
            <Button variant="contained">Github</Button>
          </li>
        </ul>
      </section>
      <Tabbar />
    </section>
  );
};

export default Login;
