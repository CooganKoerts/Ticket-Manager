import { connect } from 'react-redux';

import LandingPage from './LandingPage';

const mapStateToProps = (state) => ({
  isUserLoggedIn: state.data.isUserLoggedIn,
});

export default connect(mapStateToProps)(LandingPage);
