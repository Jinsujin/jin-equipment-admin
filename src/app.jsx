import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./components/login/login";
// import styles from "./app.module.css";
import Order from "./components/order/order";
import Manage from "./components/manage/manage";
import Settings from "./components/settings/settings";
import Work from "./components/work/work";
import "antd/dist/antd.css";

/**
 * 모든 컴포넌트에 적용될 사항을 넣어준다
 */

function App({ authService }) {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/order">
            <Order authService={authService} />
          </Route>
          <Route path="/manage">
            <Manage authService={authService} />
          </Route>
          <Route path="/work">
            <Work authService={authService} />
          </Route>
          <Route path="/settings">
            <Settings authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
