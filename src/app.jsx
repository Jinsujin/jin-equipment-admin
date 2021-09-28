import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./components/login/login";
import styles from "./app.module.css";
import Order from "./components/order/order";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
