
import React, { Component, Fragment } from 'react'
import Index from './Components/Index/Index';
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from "react-router-dom";
import Browse from './Browse';
import { Helmet } from "react-helmet";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Netflix - copy</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <Router>

          <Switch>
            <Route exact path="/">
              <Redirect to="/netflix" />
            </Route>
            <Route exact path="/netflix">
              <Index />
            </Route>
            <Route exact path="/browse">
              <Browse />
            </Route>
          </Switch>
        </Router>
      </Fragment>
    )
  }
}
