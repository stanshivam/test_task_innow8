import React from "react";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import configureStore from "./store/store";
import Signin from "./containers/Signin";
import PrivateRoute from "./components/PrivateRoute";
import Albums from "./containers/Albums";
import { isAuthenticated } from "./utils/utility";

export const store = configureStore();

const history = createBrowserHistory();

const Routing = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Switch>
            <Route
              path={"/"}
              exact
              render={(exp) =>
                isAuthenticated() ? (
                  <Redirect to="/albums" />
                ) : (
                  <Signin exp={exp} />
                )
              }
            />
            <PrivateRoute path={"/albums"} component={Albums} />
            <Route component={() => <h1>404</h1>} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default Routing;
