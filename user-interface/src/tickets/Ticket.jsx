import React, { Component } from 'react';
import { getTickets } from '../helpers/Api';

class Tickets extends Component {
    async componentWillMount() {
        console.log(getTickets())
    }
    render() {
        return <div> Tickets </div>
    }
}

export default Tickets;