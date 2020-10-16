import { connect } from 'react-redux';

import LandingPage from './LandingPage';

const mapStateToProps = (state) => {
  console.log(state.account);
  return {
    isUserLoggedIn: state.account.isUserLoggedIn,
}};

export default connect(mapStateToProps)(LandingPage);
