import axios from 'axios';
import ManagerDuck from '../ducks/ManagerDuck';

const { loadUser } = ManagerDuck.creators;

export const getTickets = async () => {
    // TODO set up .env-cmdrc and get env variable
    return axios.get('http://localhost:5000/tickets')
        .then((result) => console.log(result))
        .catch((err) => console.log('ERROR'))
};

export const registerUser = (user) => (dispatch) => {
    // TODO set up .env-cmdrc and get env variable

    return axios.post('http://localhost:5000/register', user, { headers: { 'Set-Cookie': '' }})
    .then((response) => {
        const { data } = response;
        dispatch(loadUser(data));
    })
    .catch((err) => console.log(err));
}