import React from "react";
import AppLayout from "../layout/appLayout";

const Manage = ({ authService }) => {
  const pageTitle = "Manage Order";
  return (
    <AppLayout authService={authService} pageTitle={pageTitle}>
      <div>app layout - Manage </div>
    </AppLayout>
  );
};

export default Manage;
