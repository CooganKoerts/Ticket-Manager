import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Home from './home/Home';
import Projects from './projects/Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/Home" component={Home} /> 
        <Route path="/Projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;
