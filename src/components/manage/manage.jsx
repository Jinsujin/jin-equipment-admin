import React from "react";
import AppLayout from "../layout/appLayout";

const Manage = ({ authService }) => {
  return (
    <AppLayout authService={authService}>
      <div>app layout - Manage </div>
    </AppLayout>
  );
};

export default Manage;
