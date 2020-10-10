import axios from 'axios';

import ManagerDuck from '../ducks/ManagerDuck';

const { loadUser } = ManagerDuck.creators;

export const getTickets = async () => axios.get('http://localhost:5000/tickets')
  .then((result) => result)
  .catch((err) => err);

export const registerUser = (user) => (dispatch) => axios.post('http://localhost:5000/register', user)
  .then((response) => {
    const { data } = response;
    dispatch(loadUser(data));
  })
  .catch((err) => err);

export const loginUser = (user) => (dispatch) => axios.post('http://localhost:5000/login', user)
  .then((response) => {
    const { data } = response;
    console.log(data);
    dispatch(loadUser(data));
  })
  .catch((err) => err);
