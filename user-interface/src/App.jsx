import React from 'react';
import {
  Route, Switch, BrowserRouter as Router,
} from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import LandingPage from './pages/landingPage/LandingPage';
import NotFound from './pages/not-found/NotFound';
import Issues from './pages/issues/Issues';
import Projects from './pages/projects/Projects';

import ManagerDuck from './ducks/ManagerDuck';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#104976',
      main: '#1769AA',
      dark: '#4587bb',
    },
    secondary: {
      light: '#761020',
      main: '#AA172E',
      dark: '#bb4557',
    },
    error: {
      main: '#FF9300',
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
