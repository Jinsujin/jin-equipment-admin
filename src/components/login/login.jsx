import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  // event 로 넘어오는 객체
  //   password: "11"
  // remember: true
  // username: "aa"
  // TODO: 로그인 아이디,비번 맞지않았을때 에러 처리
  //FirebaseError: Firebase: Error (auth/invalid-email)
  const onLogin = ({ email, password }) => {
    console.log(email, password);
    authService //
      .login(email, password)
      .then((data) => goToOrder(data.user.uid));
  };

  const history = useHistory();
  const goToOrder = (userId) => {
    // 로그인한 유저정보를 함께 전달
    console.log("Success login > go orderpage", userId);
    history.push({
      pathname: "/order",
      state: { id: userId },
    });
  };

  // 컴포넌트가 마운트되거나 업데이트될때
  // 사용자 상태가 바뀌면 콜백 실행
  // 로그아웃하면 user null
  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToOrder(user.uid);
    });
  });

  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <h1>Login</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onLogin}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
            >
              Log in
            </Button>
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            style={{ textAlign: "right" }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form>
      </section>
    </div>
  );
};

export default Login;
