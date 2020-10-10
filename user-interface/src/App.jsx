import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import AccountDuck from './ducks/AccountDuck';
import TicketManagerRoutes from './routes/TicketManagerRoutes';

const reducers = {
  account: AccountDuck.reducer,
  form: formReducer,
};

const reducer = combineReducers(reducers);

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <TicketManagerRoutes />
    </Provider>
  </React.StrictMode>
);

export default App;
