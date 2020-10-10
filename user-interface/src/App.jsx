import React from 'react';
import { Provider } from 'react-redux';
import {
  Route, Switch, BrowserRouter as Router,
} from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import AccountDuck from './ducks/AccountDuck';
import Issues from './pages/issues/Issues';
import LandingPage from './pages/landingPage/LandingPage';
import NotFound from './pages/not-found/NotFound';
import Projects from './pages/projects/Projects';

const reducers = {
  data: AccountDuck.reducer,
  form: formReducer,
};

const reducer = combineReducers(reducers);

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/Issue" component={Issues} />
          <Route path="/Projects" component={Projects} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>
);

export default App;
