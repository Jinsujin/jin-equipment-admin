/**
 * 각 페이지의 공통된 레이아웃
 * children: 컴포넌트의 내용
 */

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Tabbar from "../tabbar/tabbar";
import styles from "./appLayout.module.css";

const AppLayout = ({ children, authService, pageTitle }) => {
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
          <h1 className={styles.title}>{pageTitle}</h1>
        </header>
        <main>{children}</main>
        <Tabbar />
      </section>
    </div>
  );
};

export default AppLayout;
