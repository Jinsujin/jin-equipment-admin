import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styles from "./tabbar.module.css";

import { Button, Tooltip } from "antd";
import {
  SearchOutlined,
  SettingOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

const Tabbar = (props) => {
  const history = useHistory();
  const onClickOrder = (e) => {
    history.push("/order");
  };

  const onClickManage = (e) => {
    history.push("/manage");
  };

  const onClickSettings = (e) => {
    history.push("/settings");
  };

  return (
    <div className={styles.tabbar_wrap}>
      <ul className={styles.tabbar}>
        <li>
          <Button
            className={styles.button}
            type="text"
            icon={<SearchOutlined />}
            onClick={onClickOrder}
          >
            order
          </Button>
        </li>
        <li>
          <Button
            className={styles.button}
            type="text"
            icon={<FileTextOutlined />}
            onClick={onClickManage}
          >
            Manage
          </Button>
        </li>
        <li>
          <Button
            className={styles.button}
            type="text"
            icon={<SettingOutlined />}
            onClick={onClickSettings}
          >
            Settings
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Tabbar;
