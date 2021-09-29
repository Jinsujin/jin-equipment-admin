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
  return (
    <div className={styles.tabbar_wrap}>
      <ul className={styles.tabbar}>
        <li>
          <Button
            className={styles.button}
            type="text"
            icon={<SearchOutlined />}
          >
            <Link to="/order">Order</Link>
          </Button>
        </li>
        <li>
          <Button
            className={styles.button}
            type="text"
            icon={<FileTextOutlined />}
          >
            <Link to="/manage">Manage</Link>
          </Button>
        </li>
        <li>
          <Button
            className={styles.button}
            type="text"
            icon={<SettingOutlined />}
          >
            <Link to="/settings">Settings</Link>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Tabbar;
