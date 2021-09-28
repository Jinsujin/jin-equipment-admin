import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Settings = ({ authService }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push("/");
      }
    });
  });

  return (
    <section>
      <button onClick={onLogout}>logout</button>
    </section>
  );
};

export default Settings;
