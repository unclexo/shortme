import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';

// Routes components
import Home from '../ui/components/links/Home';
import Signup from '../ui/components/auth/Signup';
import Login from '../ui/components/auth/Login';
import Link from '../ui/components/links/Link';
import NotFound from '../ui/components/error/NotFound';

const history = createBrowserHistory();

// Routes
const publicRoutes = ['/', '/login', '/signup'];
const privateRoutes = ['/links'];

const onEnterPublicRoute = () => {
  if (Meteor.userId()) {
    history.replace('/links');
  }
};

const onEnterPrivateRoute = () => {
  if (!Meteor.userId()) {
    history.replace('/login');
  }
};

export const onAuthChange = (isAuthenticated) => {
  const currentPage = history.location.pathname;
  const isPublicRoute = publicRoutes.includes(currentPage);
  const isPrivateRoute = privateRoutes.includes(currentPage);
  
  if (isPublicRoute && isAuthenticated) {
    history.replace('/links');
  } else if (isPrivateRoute && !isAuthenticated) {
    history.replace('/login');
  }
};

export const routes = (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} onEnter={onEnterPublicRoute}/>
      <Route exact path="/signup" component={Signup} onEnter={onEnterPublicRoute}/>
      <Route exact path="/login" component={Login} onEnter={onEnterPublicRoute}/>
      <Route exact path="/links" component={Link} onEnter={onEnterPrivateRoute}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  </Router>
);