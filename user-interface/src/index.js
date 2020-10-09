/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ManagerDuck } from './ducks/ManagerDuck';
import App from './App';

const reducers = {
  data: ManagerDuck.reducer,
  form: formReducer,
};

const reducer = combineReducers(reducers);

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
