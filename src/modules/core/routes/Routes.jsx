import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../../modules/home/Home";
import Layout from "../components/Layout";
import Details from "../../modules/details/Details";

const Loading = () => <h3>...Loading</h3>;
const NotFound = () => <h3>404 Page not found.</h3>;

const Routes = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />

          <Route
            exact
            path={"/home"}
            component={(props) => (
              <Layout {...props}>
                <Home {...props} />
              </Layout>
            )}
          />

          <Route
            exact
            path={"/details/:id"}
            component={(props) => (
              <Layout {...props}>
                <Details {...props} />
              </Layout>
            )}
          />

          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
};

export default Routes;
