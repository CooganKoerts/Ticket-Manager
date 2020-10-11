import React from 'react';
import {
  Route, Switch, BrowserRouter as Router,
} from 'react-router-dom';

import { ProtectedRoute } from '../components';
import AccountInfo from '../pages/account/AccountInfoContainer';
import Issues from '../pages/issues/Issues';
import LandingPage from '../pages/landingPage/LandingPageContainer';
import NotFound from '../pages/not-found/NotFound';
import Projects from '../pages/projects/Projects';

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
