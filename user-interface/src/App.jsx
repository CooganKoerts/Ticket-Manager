import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React from 'react';
import { Provider } from 'react-redux';
import {
  Route, Switch, BrowserRouter as Router,
} from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import ManagerDuck from './ducks/ManagerDuck';
import Issues from './pages/issues/Issues';
import LandingPage from './pages/landingPage/LandingPage';
import NotFound from './pages/not-found/NotFound';
import Projects from './pages/projects/Projects';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1769aa',
    },
    error: {
      main: '#ff9300',
    },
  },
});

const reducers = {
  data: ManagerDuck.reducer,
  form: formReducer,
};

const reducer = combineReducers(reducers);

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/Issue" component={Issues} />
            <Route path="/Projects" component={Projects} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </Provider>
  </React.StrictMode>
);

export default App;
