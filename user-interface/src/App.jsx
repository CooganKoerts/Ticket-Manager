import React from 'react';
import {
  Route, Switch, BrowserRouter as Router,
} from '../node_modules/react-router-dom';
import Projects from './pages/projects/Projects';
import Tickets from './pages/tickets/Ticket';
import NotFound from './pages/not-found/NotFound';
import LandingPage from './pages/landingPage/LandingPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/Tickets" component={Tickets} />
        <Route path="/Projects" component={Projects} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
