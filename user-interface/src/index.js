import React from 'react';
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form';
import ManagerDuck from './ducks/ManagerDuck';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import App from './App';

const reducers = {
  data: ManagerDuck.reducer,
  form: formReducer
}

const reducer = combineReducers(reducers);

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
