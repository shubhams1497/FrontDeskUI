import * as React from "react";
import { connect } from "react-redux";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import routes from "./routes";
import AppBar from "./common/components/AppBar";

interface IProps {
  userState?: Record<string, any>;
}

class App extends React.Component<IProps> {
  render() {
    return (
      <div className="App">
        <Router>
          <AppBar />
          <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
              {this.props.userState?.isLoggedIn && (
                <Route exact path={"/login"}>
                  <Redirect to={"/"} />
                </Route>
              )}
              {routes.map(({ requiresLogin, ...route }, index) => {
                if (requiresLogin && !this.props.userState?.isLoggedIn) {
                  return (
                    <Route exact {...route} key={index}>
                      <Redirect
                        to={{
                          pathname: "/login",
                          search: new URLSearchParams({
                            redirect: route.path,
                          }).toString(),
                          state: { referrer: route.path },
                        }}
                        exact={true}
                        strict={true}
                      />
                    </Route>
                  );
                }

                return <Route exact {...route} key={index} />;
              })}
              <Redirect to={"/"} />
            </Switch>
          </React.Suspense>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { userState: state.userState };
};

export default connect(mapStateToProps)(App);
