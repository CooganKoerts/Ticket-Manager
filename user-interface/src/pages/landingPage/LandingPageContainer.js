import { connect } from 'react-redux';

import LandingPage from './LandingPage';

const mapStateToProps = (state) => ({
  isUserLoggedIn: state.account.isUserLoggedIn,
});

export default connect(mapStateToProps)(LandingPage);
