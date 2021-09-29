/**
 * 각 페이지의 공통된 레이아웃
 * children: 컴포넌트의 내용
 */

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Tabbar from "../tabbar/tabbar";
import styles from "./appLayout.module.css";

import { Tabs } from "antd";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const AppLayout = ({ children, authService }) => {
  const history = useHistory();

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.location("/");
      }
    });
  });

  return (
    <div className={styles.wrap}>
      <section className={styles.container}>
        <header>
          <h1 className={styles.title}>Title</h1>
        </header>
        <Tabs
          centered
          className={styles.tabs}
          defaultActiveKey="1"
          onChange={callback}
          size="small"
          tabBarGutter={100}
        >
          <TabPane className={styles.tab_content} tab="Customer" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Detail" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
        <main>{children}</main>
        <Tabbar />
      </section>
    </div>
  );
};

export default AppLayout;
