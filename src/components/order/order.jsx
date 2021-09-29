import React from "react";
import AppLayout from "../layout/appLayout";

const Order = ({ authService }) => {
  return (
    <AppLayout authService={authService}>
      <div>app layout - Order </div>
    </AppLayout>
  );
};

export default Order;
