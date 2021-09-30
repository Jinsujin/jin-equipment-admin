import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import AppLayout from "../layout/appLayout";
import { Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

const Settings = ({ authService }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const pageTitle = "Settings";
  return (
    <AppLayout authService={authService} pageTitle={pageTitle}>
      <div>
        <Button
          onClick={onLogout}
          block
          type="primary"
          shape="round"
          icon={<LogoutOutlined />}
          size="large"
        >
          로그아웃
        </Button>
      </div>
    </AppLayout>
  );
};

export default Settings;
