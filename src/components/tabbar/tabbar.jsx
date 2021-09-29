import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styles from "./tabbar.module.css";

import { Button, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Tabbar = (props) => {
  return (
    // <Menu mode="horizontal">
    //   <Menu.Item>
    //     <Link to="/order">Order</Link>
    //   </Menu.Item>
    //   <Menu.Item>
    //     <Link to="/manage">Manage</Link>
    //   </Menu.Item>
    //   <Menu.Item>
    //     <Link to="/settings">Settings</Link>
    //   </Menu.Item>
    // </Menu>
    <div className={styles.tabbar_wrap}>
      <ul className={styles.tabbar}>
        <li>
          <Button type="text" icon={<SearchOutlined />}>
            <Link to="/order">Order</Link>
          </Button>
        </li>
        <li>
          <Button type="text" icon={<SearchOutlined />}>
            <Link to="/manage">Manage</Link>
          </Button>
        </li>
        <li>
          <Button type="text" icon={<SearchOutlined />}>
            <Link to="/settings">Settings</Link>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Tabbar;
