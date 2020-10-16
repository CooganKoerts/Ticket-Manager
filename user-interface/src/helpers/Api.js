import axios from 'axios';

import AccountDuck from '../ducks/AccountDuck';

const { loadUser } = AccountDuck.creators;

const tokenKey = 'access-validation-id'

export const getTickets = async () => axios.get('http://localhost:5000/tickets')
  .then((result) => result)
  .catch((err) => err);

export const registerUser = (user) => (dispatch) => axios.post('http://localhost:5000/register', user)
  .then(({ data }) => {
    sessionStorage.setItem(tokenKey, data[tokenKey])
    dispatch(loadUser(data.user, data.myProjects));
  })
  .catch((err) => err);

export const loginUser = (user) => (dispatch) => axios.post('http://localhost:5000/login', user)
  .then(({ data }) => {
    sessionStorage.setItem(tokenKey, data[tokenKey])
    dispatch(loadUser(data.user, data.myProjects));
  })
  .catch((err) => err);
