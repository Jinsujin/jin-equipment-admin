/**
 * 각 페이지의 공통된 레이아웃
 * children: 컴포넌트의 내용
 */

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Tabbar from "./tabbar/tabbar";

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
    <div>
      {children}
      <Tabbar />
    </div>
  );
};

export default AppLayout;
