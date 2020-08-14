import axios from 'axios';

export const getTickets = async () => {
    // TODO set up .env-cmdrc and get env variable
    return axios.get('http://localhost:5000/tickets')
        .then((result) => console.log(result))
        .catch((err) => console.log('ERROR'))
};