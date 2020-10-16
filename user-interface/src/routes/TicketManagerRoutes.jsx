import React from 'react';
import {
  Route, Switch, BrowserRouter as Router,
} from 'react-router-dom';

import { ProtectedRoute } from '../components';
import {
  AccountInfo, Issues, LandingPage, NotFound, Projects,
} from '../pages';

const TicketManagerRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <ProtectedRoute path="/issues" component={Issues} />
      <ProtectedRoute path="/projects" component={Projects} />
      <ProtectedRoute path="/account" component={AccountInfo} />
      <ProtectedRoute component={NotFound} />
    </Switch>
  </Router>
);

export default TicketManagerRoutes;
