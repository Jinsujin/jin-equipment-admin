import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import AppLayout from "../layout/appLayout";

const Settings = ({ authService }) => {
  // const history = useHistory();
  // const onLogout = () => {
  //   authService.logout();
  // };

  // useEffect(() => {
  //   authService.onAuthChange(user => {
  //     if (!user) {
  //       history.push("/");
  //     }
  //   });
  // });

  // return (
  //   <section>
  //     <button onClick={onLogout}>logout</button>
  //   </section>
  // );

  const pageTitle = "Settings";
  return (
    <AppLayout authService={authService} pageTitle={pageTitle}>
      <div>app layout - settings </div>
    </AppLayout>
  );
};

export default Settings;
