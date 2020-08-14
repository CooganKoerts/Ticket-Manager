import React from 'react';
import { Route, Link, BrowserRouter as Router } from '../node_modules/react-router-dom'
import Home from './home/Home';
import Projects from './projects/Projects';
import Tickets from './tickets/Ticket';
import NotFound from './not-found/NotFound'

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Home} />
        <Route path="/Tickets" component={Tickets} /> 
        <Route path="/Projects" component={Projects} />
        {/* <Route component={NotFound} /> */}
      </div>
    </Router>
  );
}

export default App;
