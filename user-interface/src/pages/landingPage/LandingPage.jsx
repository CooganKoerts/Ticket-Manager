import React, { Component } from 'react';
import Register from '../register/RegisterContainer';

class LandingPage extends Component {
   componentWillMount() {
      // TODO: check if user is already logged in on the page on load/refresh.
   }
   render() {
      return (
         <div> 
            LandingPage
            <Register />
         </div>
      )
   }
}

export default LandingPage;