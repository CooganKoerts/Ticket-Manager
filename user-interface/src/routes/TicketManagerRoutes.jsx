import React from 'react';
import {
    Route, Switch, BrowserRouter as Router,
} from 'react-router-dom';

import Issues from '../pages/issues/Issues';
import LandingPage from '../pages/landingPage/LandingPageContainer';
import NotFound from '../pages/not-found/NotFound';
import Projects from '../pages/projects/Projects';

const TicketManagerRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/issues" component={Issues} />
      <Route path="/projects" component={Projects} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default TicketManagerRoutes;
